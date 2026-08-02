import { writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { bands } from '../src/data/bands'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outPath = resolve(__dirname, '../src/data/spotifyCovers.generated.json')

const CLIENT_ID = process.env.SPOTIFY_CLIENTID
const CLIENT_SECRET = process.env.SPOTIFY_SECRET

// Tetto massimo per l'intera scansione del catalogo: se Spotify rallenta o
// applica rate-limiting pesante, ci fermiamo e scriviamo quello che abbiamo
// raccolto finora invece di bloccare il workflow per ore (è già successo:
// senza questo limite un run è arrivato al timeout massimo di 6h di GitHub
// Actions senza mai completare né committare nulla).
const TIME_BUDGET_MS = 4 * 60 * 1000
const REQUEST_TIMEOUT_MS = 10_000

interface AlbumEntry {
  cover: string
  spotifyUrl: string
  tracks: Record<string, string>
}

interface SpotifyData {
  bands: Record<string, { photo: string; spotifyUrl: string }>
  albums: Record<string, AlbumEntry>
}

function normalizeTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/\(.*?\)/g, '')
    .replace(/[-–]\s*(remaster(ed)?|live|mono|stereo|single|deluxe|bonus track|demo).*/gi, '')
    .replace(/['’".,!?]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

async function getAccessToken(): Promise<string> {
  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
    },
    body: 'grant_type=client_credentials',
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
  })
  if (!res.ok) {
    throw new Error(`Autenticazione Spotify fallita: ${res.status} ${await res.text()}`)
  }
  const data = (await res.json()) as { access_token: string }
  return data.access_token
}

async function spotifyGet(token: string, url: string): Promise<any | null> {
  for (let attempt = 0; attempt < 3; attempt++) {
    let res: Response
    try {
      // Senza un timeout esplicito, una richiesta che resta appesa (connessione
      // stallata, nessuna risposta) blocca questo await per sempre: è così che
      // un run è arrivato al limite di 6h di GitHub Actions senza mai finire.
      res = await fetch(url, {
        headers: { Authorization: `Bearer ${token}` },
        signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
      })
    } catch {
      return null
    }
    if (res.status === 429) {
      // Cap al ritardo suggerito da Spotify: in rate-limiting pesante può
      // indicare attese di decine di minuti, che qui non ci possiamo permettere.
      const retryAfter = Math.min(Number(res.headers.get('retry-after') ?? '2'), 10)
      await new Promise((r) => setTimeout(r, (retryAfter + 1) * 1000))
      continue
    }
    if (!res.ok) return null
    return res.json()
  }
  return null
}

async function searchArtist(token: string, bandName: string) {
  const url = `https://api.spotify.com/v1/search?type=artist&limit=1&q=${encodeURIComponent(bandName)}`
  const data = await spotifyGet(token, url)
  const item = data?.artists?.items?.[0]
  if (!item || !item.images?.length) return null
  return { photo: item.images[0].url as string, spotifyUrl: item.external_urls.spotify as string }
}

async function searchAlbum(token: string, bandName: string, albumTitle: string, albumYear: number) {
  const q = `album:${albumTitle} artist:${bandName}`
  const url = `https://api.spotify.com/v1/search?type=album&limit=10&q=${encodeURIComponent(q)}`
  const data = await spotifyGet(token, url)
  const items = (data?.albums?.items ?? []) as any[]

  const wantedTitle = normalizeTitle(albumTitle)
  let best: any = null
  let bestScore = -Infinity
  for (const item of items) {
    if (!item?.images?.length) continue
    const releaseYear = Number(String(item.release_date ?? '').slice(0, 4))
    const yearDiff = Number.isFinite(releaseYear) ? Math.abs(releaseYear - albumYear) : 99
    const titleMatches = normalizeTitle(item.name ?? '') === wantedTitle
    // Skip candidates whose title doesn't match at all and whose release year is way off:
    // this is what causes false matches like an unrelated reissue or box set.
    if (!titleMatches && yearDiff > 1) continue
    const score = (titleMatches ? 100 : 0) + (item.album_type === 'album' ? 10 : 0) - yearDiff
    if (score > bestScore) {
      bestScore = score
      best = item
    }
  }
  if (!best) return null
  return { id: best.id as string, cover: best.images[0].url as string, spotifyUrl: best.external_urls.spotify as string }
}

async function getAlbumTracks(token: string, albumId: string): Promise<Record<string, string>> {
  const data = await spotifyGet(token, `https://api.spotify.com/v1/albums/${albumId}/tracks?limit=50`)
  const tracks: Record<string, string> = {}
  for (const t of data?.items ?? []) {
    if (t?.name && t?.external_urls?.spotify) {
      tracks[normalizeTitle(t.name)] = t.external_urls.spotify
    }
  }
  return tracks
}

async function main() {
  const result: SpotifyData = { bands: {}, albums: {} }

  if (!CLIENT_ID || !CLIENT_SECRET) {
    console.warn(
      'SPOTIFY_CLIENTID / SPOTIFY_SECRET non impostate: genero un file vuoto, il sito userà gli asset generati.',
    )
    writeFileSync(outPath, JSON.stringify(result, null, 2))
    return
  }

  const token = await getAccessToken()
  const startedAt = Date.now()
  let bandsFound = 0
  let albumsFound = 0
  let tracksFound = 0
  let albumsTotal = 0
  let stoppedEarly = false

  outer: for (const band of bands) {
    if (Date.now() - startedAt > TIME_BUDGET_MS) {
      stoppedEarly = true
      break
    }

    const artist = await searchArtist(token, band.name)
    if (artist) {
      result.bands[band.slug] = artist
      bandsFound++
    }
    await new Promise((r) => setTimeout(r, 60))

    for (const album of band.albums) {
      if (Date.now() - startedAt > TIME_BUDGET_MS) {
        stoppedEarly = true
        break outer
      }

      albumsTotal++
      const match = await searchAlbum(token, band.name, album.title, album.year)
      await new Promise((r) => setTimeout(r, 60))
      if (!match) continue

      const tracks = await getAlbumTracks(token, match.id)
      await new Promise((r) => setTimeout(r, 60))

      result.albums[`${band.slug}/${album.slug}`] = {
        cover: match.cover,
        spotifyUrl: match.spotifyUrl,
        tracks,
      }
      albumsFound++
      tracksFound += Object.keys(tracks).length
    }
  }

  writeFileSync(outPath, JSON.stringify(result, null, 2))
  console.log(
    `Spotify: ${bandsFound}/${bands.length} foto band, ${albumsFound}/${albumsTotal} copertine album, ${tracksFound} link a tracce` +
      (stoppedEarly ? ' (fermato per limite di tempo, catalogo parziale — riproverà al prossimo giro)' : '') +
      ` -> ${outPath}`,
  )
}

main().catch((err) => {
  console.error('Errore nel recupero dei dati Spotify:', err)
  writeFileSync(outPath, JSON.stringify({ bands: {}, albums: {} }, null, 2))
})
