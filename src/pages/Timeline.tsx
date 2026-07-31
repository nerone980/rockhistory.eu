import { useMemo } from 'react'
import PosterCard from '../components/PosterCard'
import { bands } from '../data/bands'
import { decadeOf } from '../types'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

export default function Timeline() {
  useDocumentMeta(
    'Timeline del rock 1960-oggi | RockHistory',
    'Le band rock più importanti disposte lungo la linea del tempo, decennio per decennio, dagli anni Sessanta a oggi.',
  )

  const byDecade = useMemo(() => {
    const map = new Map<string, typeof bands>()
    for (const band of bands) {
      const decade = decadeOf(band.formedYear)
      map.set(decade, [...(map.get(decade) ?? []), band])
    }
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b))
  }, [])

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <section className="mb-12 text-center">
        <p className="mb-3 font-heading text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
          Decennio per decennio
        </p>
        <h1 className="font-display text-4xl leading-[0.95] tracking-tight text-white sm:text-6xl">
          La <span className="text-red-500">timeline</span> del rock
        </h1>
      </section>

      <div className="relative space-y-14 border-l border-white/10 pl-6 sm:pl-10">
        {byDecade.map(([decade, decadeBands]) => (
          <div key={decade} className="relative">
            <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-red-500 bg-black sm:-left-[43px]" />
            <h2 className="mb-4 font-display text-2xl tracking-tight text-white sm:text-3xl">{decade}</h2>
            <div className="scrollbar-thin flex gap-4 overflow-x-auto pb-3">
              {decadeBands.map((band) => (
                <div key={band.slug} className="w-36 shrink-0 sm:w-44">
                  <PosterCard band={band} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
