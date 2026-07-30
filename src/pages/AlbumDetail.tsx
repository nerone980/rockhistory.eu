import { Link, Navigate, useParams } from 'react-router-dom'
import Poster from '../components/Poster'
import { getAlbum } from '../data/bands'
import { formatDuration } from '../types'

function SectionLabel({ children }: { children: string }) {
  return (
    <h2 className="flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
      <span className="h-px w-4 bg-red-500/70" />
      {children}
    </h2>
  )
}

export default function AlbumDetail() {
  const { bandSlug = '', albumSlug = '' } = useParams()
  const { band, album } = getAlbum(bandSlug, albumSlug)

  if (!band || !album) return <Navigate to="/" replace />

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <Link
        to={`/band/${band.slug}`}
        className="mb-6 inline-flex items-center gap-1 text-sm text-white/50 transition-colors hover:text-red-400"
      >
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
          <h1 className="font-display text-4xl leading-none tracking-tight text-white sm:text-5xl">
            {album.title}
          </h1>
          <p className="mt-2 text-white/60">
            {band.name} · {album.year}
          </p>
          <p className="mt-2 italic text-white/50">{album.tagline}</p>

          <div className="mt-6 space-y-1.5">
            <SectionLabel>Storia del disco</SectionLabel>
            <p className="leading-relaxed text-white/80">{album.history}</p>
          </div>

          <div className="mt-6 space-y-2">
            <SectionLabel>Tracklist</SectionLabel>
            <ol className="overflow-hidden rounded-lg border border-white/10">
              {album.tracks.map((track, i) => (
                <li
                  key={track.title}
                  className="group flex items-center justify-between gap-3 border-b border-white/5 bg-white/[0.03] px-4 py-3 transition-colors last:border-b-0 hover:bg-red-500/[0.06]"
                >
                  <span className="flex min-w-0 items-center gap-3 text-white/90">
                    <span className="font-heading w-5 shrink-0 text-right text-sm text-white/30 group-hover:text-red-400">
                      {i + 1}
                    </span>
                    <span className="truncate">{track.title}</span>
                    {track.isHit && (
                      <span className="shrink-0 rounded-full bg-red-500/20 px-2 py-0.5 font-heading text-xs font-semibold uppercase tracking-wide text-red-400">
                        Hit
                      </span>
                    )}
                  </span>
                  <span className="shrink-0 font-heading text-sm tabular-nums text-white/40">
                    {formatDuration(track.durationSec)}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
