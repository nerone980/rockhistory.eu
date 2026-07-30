import { useMemo, useState } from 'react'
import PosterCard from '../components/PosterCard'
import { bands } from '../data/bands'
import { decadeOf } from '../types'

export default function Home() {
  const decades = useMemo(() => {
    const set = new Set(bands.map((b) => decadeOf(b.formedYear)))
    return ['Tutte', ...Array.from(set).sort()]
  }, [])

  const [decade, setDecade] = useState('Tutte')

  const filtered = useMemo(
    () => (decade === 'Tutte' ? bands : bands.filter((b) => decadeOf(b.formedYear) === decade)),
    [decade],
  )

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <section className="mb-12 text-center">
        <p className="mb-3 font-heading text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
          {bands.length} band · 1960 → oggi
        </p>
        <h1 className="font-display text-4xl leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl">
          La storia del <span className="text-red-500">rock</span>,
          <br className="hidden sm:block" /> band per band
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base text-white/60 sm:text-lg">
          Dalle locandine degli anni Sessanta alle band di oggi: scopri la storia dei gruppi, i
          loro dischi e le hit che hanno segnato ogni epoca.
        </p>
      </section>

      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {decades.map((d) => (
          <button
            key={d}
            onClick={() => setDecade(d)}
            className={`rounded-full border px-4 py-1.5 font-heading text-sm font-medium uppercase tracking-wide transition-all duration-200 ${
              decade === d
                ? 'border-red-500 bg-red-500 text-white shadow-[0_0_20px_-4px_rgba(192,57,43,0.8)]'
                : 'border-white/15 text-white/60 hover:border-white/30 hover:text-white'
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {filtered.map((band) => (
          <PosterCard key={band.slug} band={band} />
        ))}
      </div>
    </div>
  )
}
