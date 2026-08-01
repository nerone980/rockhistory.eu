import { writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { bands } from '../src/data/bands'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outPath = resolve(__dirname, '../src/data/spotifyCovers.generated.json')

const CLIENT_ID = process.env.SPOTIFY_CLIENTID
const CLIENT_SECRET = process.env.SPOTIFY_SECRET

interface CoverEntry {
  cover: string
  spotifyUrl: string
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

async function searchAlbum(
  token: string,
  bandName: string,
  albumTitle: string,
): Promise<CoverEntry | null> {
  const q = `album:${albumTitle} artist:${bandName}`
  const url = `https://api.spotify.com/v1/search?type=album&limit=1&q=${encodeURIComponent(q)}`

  for (let attempt = 0; attempt < 4; attempt++) {
    const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } })
    if (res.status === 429) {
      const retryAfter = Number(res.headers.get('retry-after') ?? '2')
      await new Promise((r) => setTimeout(r, (retryAfter + 1) * 1000))
      continue
    }
    if (!res.ok) return null
    const data = (await res.json()) as {
      albums?: { items: { images: { url: string }[]; external_urls: { spotify: string } }[] }
    }
    const item = data.albums?.items[0]
    if (!item || item.images.length === 0) return null
    return { cover: item.images[0].url, spotifyUrl: item.external_urls.spotify }
  }
  return null
}

async function main() {
  const result: Record<string, CoverEntry> = {}

  if (!CLIENT_ID || !CLIENT_SECRET) {
    console.warn(
      'SPOTIFY_CLIENTID / SPOTIFY_SECRET non impostate: genero un file vuoto, il sito userà le locandine generate.',
    )
    writeFileSync(outPath, JSON.stringify(result, null, 2))
    return
  }

  const token = await getAccessToken()
  let found = 0
  let total = 0

  for (const band of bands) {
    for (const album of band.albums) {
      total++
      const entry = await searchAlbum(token, band.name, album.title)
      if (entry) {
        result[`${band.slug}/${album.slug}`] = entry
        found++
      }
      // Piccola pausa per restare ben dentro i rate limit di Spotify
      await new Promise((r) => setTimeout(r, 60))
    }
  }

  writeFileSync(outPath, JSON.stringify(result, null, 2))
  console.log(`Copertine Spotify trovate: ${found}/${total} -> ${outPath}`)
}

main().catch((err) => {
  console.error('Errore nel recupero delle copertine Spotify:', err)
  // Non far fallire la build per un problema con l'API esterna: scrive un file vuoto.
  writeFileSync(outPath, JSON.stringify({}, null, 2))
})
