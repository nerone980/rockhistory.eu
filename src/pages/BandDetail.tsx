import { Link, Navigate, useParams } from 'react-router-dom'
import Poster from '../components/Poster'
import { getBandBySlug } from '../data/bands'

export default function BandDetail() {
  const { bandSlug = '' } = useParams()
  const band = getBandBySlug(bandSlug)

  if (!band) return <Navigate to="/" replace />

  const span = band.disbandedYear ? `${band.formedYear}–${band.disbandedYear}` : `dal ${band.formedYear}`

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <Link to="/" className="mb-6 inline-block text-sm text-white/50 hover:text-white">
        ← Tutte le band
      </Link>

      <div className="grid gap-8 sm:grid-cols-[280px_1fr]">
        <div className="mx-auto w-full max-w-xs sm:mx-0">
          <Poster title={band.name} subtitle={span} palette={band.palette} imageUrl={band.photoImage} />
        </div>

        <div>
          <h1 className="font-display text-3xl font-extrabold text-white sm:text-4xl">{band.name}</h1>
          <p className="mt-1 text-white/60">
            {band.origin} · {span}
          </p>
          <p className="mt-1 text-sm text-white/50">{band.genres.join(' · ')}</p>

          <h2 className="mt-6 text-sm font-semibold uppercase tracking-wide text-white/40">
            Formazione
          </h2>
          <p className="mt-1 text-white/80">{band.members.join(', ')}</p>

          <h2 className="mt-6 text-sm font-semibold uppercase tracking-wide text-white/40">
            Storia della band
          </h2>
          <p className="mt-2 leading-relaxed text-white/80">{band.history}</p>
        </div>
      </div>

      <h2 className="mb-5 mt-12 font-display text-2xl font-bold text-white">Discografia</h2>
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
