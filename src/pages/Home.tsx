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
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <section className="mb-10 text-center">
        <h1 className="font-display text-3xl font-extrabold text-white sm:text-5xl">
          La storia del rock, band per band
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-white/60">
          Dalle locandine degli anni Sessanta alle band di oggi: scopri la storia dei gruppi, i
          loro dischi e le hit che hanno segnato ogni epoca.
        </p>
      </section>

      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {decades.map((d) => (
          <button
            key={d}
            onClick={() => setDecade(d)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              decade === d
                ? 'border-red-500 bg-red-500 text-white'
                : 'border-white/20 text-white/70 hover:border-white/40 hover:text-white'
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
