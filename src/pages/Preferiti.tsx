import { Link } from 'react-router-dom'
import PosterCard from '../components/PosterCard'
import { bands } from '../data/bands'
import { useFavorites } from '../hooks/useFavorites'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

export default function Preferiti() {
  useDocumentMeta(
    'I miei preferiti | RockHistory',
    'Le band che hai salvato tra i preferiti su RockHistory.',
  )

  const { favorites } = useFavorites()
  const favoriteBands = bands.filter((b) => favorites.has(b.slug))

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <section className="mb-12 text-center">
        <p className="mb-3 font-heading text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
          Salvate nel browser
        </p>
        <h1 className="font-display text-4xl leading-[0.95] tracking-tight text-white sm:text-6xl">
          I miei <span className="text-red-500">preferiti</span>
        </h1>
      </section>

      {favoriteBands.length === 0 ? (
        <p className="text-center text-white/50">
          Non hai ancora salvato nessuna band. Clicca sul cuore su una card per aggiungerla qui —{' '}
          <Link to="/" className="underline decoration-white/30 underline-offset-2 hover:text-white">
            torna alla home
          </Link>
          .
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {favoriteBands.map((band) => (
            <PosterCard key={band.slug} band={band} />
          ))}
        </div>
      )}
    </div>
  )
}
