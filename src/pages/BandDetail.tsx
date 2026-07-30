import { Link, Navigate, useParams } from 'react-router-dom'
import Poster from '../components/Poster'
import { getBandBySlug } from '../data/bands'

function SectionLabel({ children }: { children: string }) {
  return (
    <h2 className="flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
      <span className="h-px w-4 bg-red-500/70" />
      {children}
    </h2>
  )
}

export default function BandDetail() {
  const { bandSlug = '' } = useParams()
  const band = getBandBySlug(bandSlug)

  if (!band) return <Navigate to="/" replace />

  const span = band.disbandedYear ? `${band.formedYear}–${band.disbandedYear}` : `dal ${band.formedYear}`

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <Link
        to="/"
        className="mb-6 inline-flex items-center gap-1 text-sm text-white/50 transition-colors hover:text-red-400"
      >
        ← Tutte le band
      </Link>

      <div className="grid gap-8 sm:grid-cols-[280px_1fr]">
        <div className="mx-auto w-full max-w-xs sm:mx-0">
          <Poster title={band.name} subtitle={span} palette={band.palette} imageUrl={band.photoImage} />
        </div>

        <div>
          <h1 className="font-display text-4xl leading-none tracking-tight text-white sm:text-5xl">
            {band.name}
          </h1>
          <p className="mt-2 text-white/60">
            {band.origin} · {span}
          </p>
          <p className="mt-1 font-heading text-sm uppercase tracking-wide text-white/40">
            {band.genres.join(' · ')}
          </p>

          <div className="mt-6 space-y-1.5">
            <SectionLabel>Formazione</SectionLabel>
            <p className="text-white/80">{band.members.join(', ')}</p>
          </div>

          <div className="mt-6 space-y-1.5">
            <SectionLabel>Storia della band</SectionLabel>
            <p className="leading-relaxed text-white/80">{band.history}</p>
          </div>
        </div>
      </div>

      <div className="mb-6 mt-14 flex items-baseline gap-3">
        <h2 className="font-display text-3xl tracking-tight text-white">Discografia</h2>
        <span className="font-heading text-sm text-white/40">{band.albums.length} album</span>
      </div>
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
        {band.albums.map((album) => (
          <Link key={album.slug} to={`/band/${band.slug}/album/${album.slug}`} className="group block">
            <Poster
              title={album.title}
              subtitle={String(album.year)}
              palette={album.palette}
              imageUrl={album.coverImage}
            />
            <p className="mt-2 truncate text-sm text-white/60">{album.tagline}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
