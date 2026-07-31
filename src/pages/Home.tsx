import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import PosterCard from '../components/PosterCard'
import AlbumOfTheDay from '../components/AlbumOfTheDay'
import SectionLabel from '../components/SectionLabel'
import { bands } from '../data/bands'
import { decadeOf } from '../types'
import { GENRE_GROUPS, bandMatchesGenreGroup } from '../data/genreGroups'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { useExploredCount } from '../hooks/useExploredBands'

export default function Home() {
  useDocumentMeta(
    'RockHistory — La storia del rock dal 1960 a oggi',
    `Scopri la storia di ${bands.length} band rock dal 1960 a oggi: discografia, hit e curiosità, band per band.`,
  )

  const [searchParams] = useSearchParams()
  const exploredCount = useExploredCount()

  const decades = useMemo(() => {
    const set = new Set(bands.map((b) => decadeOf(b.formedYear)))
    return ['Tutte', ...Array.from(set).sort()]
  }, [])

  const genreOptions = useMemo(() => ['Tutte', ...GENRE_GROUPS.map((g) => g.name)], [])

  const [decade, setDecade] = useState('Tutte')
  const [genre, setGenre] = useState(() => {
    const fromUrl = searchParams.get('genre')
    return fromUrl && genreOptions.includes(fromUrl) ? fromUrl : 'Tutte'
  })

  const filtered = useMemo(
    () =>
      bands
        .filter((b) => decade === 'Tutte' || decadeOf(b.formedYear) === decade)
        .filter((b) => genre === 'Tutte' || bandMatchesGenreGroup(b, genre)),
    [decade, genre],
  )

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <section className="mb-12 text-center">
        <p className="mb-3 font-heading text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
          Top band dal 1960 ad oggi
        </p>
        <h1 className="font-display text-4xl leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl">
          La storia del <span className="text-red-500">rock</span>,
          <br className="hidden sm:block" /> band per band
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base text-white/60 sm:text-lg">
          Dalle locandine degli anni Sessanta alle band di oggi: scopri la storia dei gruppi, i
          loro dischi e le hit che hanno segnato ogni epoca.
        </p>
        {exploredCount > 0 && (
          <p className="mx-auto mt-4 max-w-xs font-heading text-xs uppercase tracking-wide text-white/40">
            Hai esplorato {exploredCount} / {bands.length} band
          </p>
        )}
      </section>

      <section className="mx-auto mb-14 max-w-3xl space-y-2">
        <SectionLabel>La storia del rock in breve</SectionLabel>
        <p className="leading-relaxed text-white/70">
          Il rock nasce a metà degli anni Cinquanta dall'incontro tra rhythm and blues, country e
          gospel afroamericani, ma è nel decennio successivo che esplode come fenomeno globale:
          la "British Invasion" guidata dai Beatles e dai Rolling Stones, la psichedelia della
          West Coast e il blues rock elettrico ridisegnano il pop mondiale. Gli anni Settanta
          moltiplicano i linguaggi — hard rock, progressive, glam, punk — mentre gli Ottanta
          portano synth, MTV e l'ascesa dell'heavy metal. Il decennio successivo vede grunge e
          alternative rock riportare rabbia e autenticità nelle classifiche, prima che gli anni
          Duemila e Duemiladieci frammentino ulteriormente il genere in indie, post-punk revival
          e nuove fusioni con elettronica e metal moderno. Sessant'anni dopo, il rock resta un
          linguaggio in continua trasformazione, capace di reinventarsi ad ogni generazione senza
          mai perdere la propria energia originaria.
        </p>
      </section>

      <AlbumOfTheDay />

      <div className="mb-4 flex flex-wrap justify-center gap-2">
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

      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {genreOptions.map((g) => (
          <button
            key={g}
            onClick={() => setGenre(g)}
            className={`rounded-full border px-3.5 py-1 font-heading text-xs font-medium uppercase tracking-wide transition-all duration-200 ${
              genre === g
                ? 'border-red-400/80 bg-red-500/20 text-red-300'
                : 'border-white/10 text-white/40 hover:border-white/25 hover:text-white/70'
            }`}
          >
            {g}
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mb-10 text-center text-sm text-white/40">
          Nessuna band trovata per questa combinazione di filtri.
        </p>
      )}

      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {filtered.map((band) => (
          <PosterCard key={band.slug} band={band} />
        ))}
      </div>
    </div>
  )
}
