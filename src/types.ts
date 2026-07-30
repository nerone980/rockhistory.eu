export interface Track {
  title: string
  durationSec: number
  isHit?: boolean
}

export interface Album {
  slug: string
  title: string
  year: number
  tagline: string
  history: string
  tracks: Track[]
  palette: [string, string]
  /** Copertina reale (es. /images/albums/band-slug/album-slug.jpg). Se assente, si usa la locandina generata. */
  coverImage?: string
}

export interface Band {
  slug: string
  name: string
  formedYear: number
  disbandedYear?: number
  origin: string
  genres: string[]
  members: string[]
  history: string
  palette: [string, string]
  albums: Album[]
  /** Foto reale della band (es. /images/bands/band-slug.jpg). Se assente, si usa la locandina generata. */
  photoImage?: string
}

export function decadeOf(year: number): string {
  const decade = Math.floor(year / 10) * 10
  return `${decade}s`
}

export function hits(album: Album): Track[] {
  return album.tracks.filter((t) => t.isHit)
}

export function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}
