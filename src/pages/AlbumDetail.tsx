import { Link, Navigate, useParams } from 'react-router-dom'
import Poster from '../components/Poster'
import { getAlbum } from '../data/bands'
import { formatDuration } from '../types'

export default function AlbumDetail() {
  const { bandSlug = '', albumSlug = '' } = useParams()
  const { band, album } = getAlbum(bandSlug, albumSlug)

  if (!band || !album) return <Navigate to="/" replace />

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <Link to={`/band/${band.slug}`} className="mb-6 inline-block text-sm text-white/50 hover:text-white">
        ← {band.name}
      </Link>

      <div className="grid gap-8 sm:grid-cols-[280px_1fr]">
        <div className="mx-auto w-full max-w-xs sm:mx-0">
          <Poster
            title={album.title}
            subtitle={String(album.year)}
            palette={album.palette}
            imageUrl={album.coverImage}
          />
        </div>

        <div>
          <h1 className="font-display text-3xl font-extrabold text-white sm:text-4xl">{album.title}</h1>
          <p className="mt-1 text-white/60">
            {band.name} · {album.year}
          </p>
          <p className="mt-2 italic text-white/50">{album.tagline}</p>

          <h2 className="mt-6 text-sm font-semibold uppercase tracking-wide text-white/40">
            Storia del disco
          </h2>
          <p className="mt-2 leading-relaxed text-white/80">{album.history}</p>

          <h2 className="mt-6 mb-2 text-sm font-semibold uppercase tracking-wide text-white/40">
            Tracklist
          </h2>
          <ol className="divide-y divide-white/10 overflow-hidden rounded-lg border border-white/10">
            {album.tracks.map((track, i) => (
              <li
                key={track.title}
                className="flex items-center justify-between gap-3 bg-white/5 px-4 py-2.5"
              >
                <span className="flex items-center gap-3 text-white/90">
                  <span className="w-5 text-right text-sm text-white/40">{i + 1}</span>
                  {track.title}
                  {track.isHit && (
                    <span className="rounded-full bg-red-500/20 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-red-400">
                      Hit
                    </span>
                  )}
                </span>
                <span className="shrink-0 text-sm text-white/40">{formatDuration(track.durationSec)}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}
