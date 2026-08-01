import { writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { bands } from '../src/data/bands'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outPath = resolve(__dirname, '../src/data/spotifyCovers.generated.json')

const CLIENT_ID = process.env.SPOTIFY_CLIENTID
const CLIENT_SECRET = process.env.SPOTIFY_SECRET

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
  })
  if (!res.ok) {
    throw new Error(`Autenticazione Spotify fallita: ${res.status} ${await res.text()}`)
  }
  const data = (await res.json()) as { access_token: string }
  return data.access_token
}

async function spotifyGet(token: string, url: string): Promise<any | null> {
  for (let attempt = 0; attempt < 4; attempt++) {
    const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } })
    if (res.status === 429) {
      const retryAfter = Number(res.headers.get('retry-after') ?? '2')
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

async function searchAlbum(token: string, bandName: string, albumTitle: string) {
  const q = `album:${albumTitle} artist:${bandName}`
  const url = `https://api.spotify.com/v1/search?type=album&limit=1&q=${encodeURIComponent(q)}`
  const data = await spotifyGet(token, url)
  const item = data?.albums?.items?.[0]
  if (!item || !item.images?.length) return null
  return { id: item.id as string, cover: item.images[0].url as string, spotifyUrl: item.external_urls.spotify as string }
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
  let bandsFound = 0
  let albumsFound = 0
  let tracksFound = 0
  let albumsTotal = 0

  for (const band of bands) {
    const artist = await searchArtist(token, band.name)
    if (artist) {
      result.bands[band.slug] = artist
      bandsFound++
    }
    await new Promise((r) => setTimeout(r, 60))

    for (const album of band.albums) {
      albumsTotal++
      const match = await searchAlbum(token, band.name, album.title)
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
    `Spotify: ${bandsFound}/${bands.length} foto band, ${albumsFound}/${albumsTotal} copertine album, ${tracksFound} link a tracce -> ${outPath}`,
  )
}

main().catch((err) => {
  console.error('Errore nel recupero dei dati Spotify:', err)
  writeFileSync(outPath, JSON.stringify({ bands: {}, albums: {} }, null, 2))
})
