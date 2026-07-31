import { Link, Navigate, useParams } from 'react-router-dom'
import Poster from '../components/Poster'
import SectionLabel from '../components/SectionLabel'
import { VinylRecord } from '../components/MusicalBackground'
import { getAlbum } from '../data/bands'
import { formatDuration } from '../types'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

export default function AlbumDetail() {
  const { bandSlug = '', albumSlug = '' } = useParams()
  const { band, album } = getAlbum(bandSlug, albumSlug)

  useDocumentMeta(
    band && album ? `${album.title} (${album.year}) — ${band.name} | RockHistory` : 'RockHistory',
    band && album
      ? `${album.title}, disco di ${band.name} del ${album.year}: storia, tracklist e hit su RockHistory.`
      : '',
  )

  if (!band || !album) return <Navigate to="/" replace />

  const accent = album.palette[1]
  const maxDuration = Math.max(...album.tracks.map((t) => t.durationSec))

  return (
    <div
      className="mx-auto max-w-6xl px-4 py-10 sm:px-6"
      style={{ '--accent': accent } as React.CSSProperties}
    >
      <Link
        to={`/band/${band.slug}`}
        className="mb-6 inline-flex items-center gap-1 text-sm text-white/50 transition-colors hover:text-[var(--accent)]"
      >
        ← {band.name}
      </Link>

      <div className="grid gap-8 sm:grid-cols-[280px_1fr]">
        <div className="group relative mx-auto w-full max-w-xs sm:mx-0">
          <VinylRecord className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 animate-spin-slow text-[var(--accent)] opacity-25 sm:-right-14 sm:-top-14 sm:h-52 sm:w-52" />
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
            <SectionLabel accent={accent}>Storia del disco</SectionLabel>
            <p className="leading-relaxed text-white/80">{album.history}</p>
          </div>

          <div className="mt-6 space-y-2">
            <SectionLabel accent={accent}>Tracklist</SectionLabel>
            <ol className="overflow-hidden rounded-lg border border-white/10">
              {album.tracks.map((track, i) => (
                <li
                  key={track.title}
                  className="group/track relative flex items-center justify-between gap-3 overflow-hidden border-b border-white/5 bg-white/[0.03] px-4 py-3 transition-colors last:border-b-0 hover:bg-white/[0.06]"
                >
                  <span
                    aria-hidden
                    className="absolute inset-y-0 left-0 opacity-[0.08] transition-[width]"
                    style={{
                      width: `${(track.durationSec / maxDuration) * 100}%`,
                      backgroundColor: accent,
                    }}
                  />
                  <span className="relative flex min-w-0 items-center gap-3 text-white/90">
                    <span className="font-heading w-5 shrink-0 text-right text-sm text-white/30 group-hover/track:text-[var(--accent)]">
                      {i + 1}
                    </span>
                    <span className="truncate">{track.title}</span>
                    {track.isHit && (
                      <span className="hit-badge shrink-0 rounded-full bg-red-500/20 px-2 py-0.5 font-heading text-xs font-semibold uppercase tracking-wide text-red-400">
                        Hit
                      </span>
                    )}
                  </span>
                  <span className="relative flex shrink-0 items-center gap-3">
                    <a
                      href={`https://genius.com/search?q=${encodeURIComponent(`${band.name} ${track.title}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-heading text-xs uppercase tracking-wide text-white/30 transition-colors hover:text-[var(--accent)]"
                      aria-label={`Cerca il testo di ${track.title} su Genius`}
                    >
                      Testo ↗
                    </a>
                    <span className="font-heading text-sm tabular-nums text-white/40">
                      {formatDuration(track.durationSec)}
                    </span>
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
