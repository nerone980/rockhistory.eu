import { bands } from './bands'
import { decadeOf } from '../types'
import { GENRE_GROUPS, genreGroupOf } from './genreGroups'

export interface GenreSeries {
  name: string
  color: string
}

// Colori assegnati in ordine fisso ai gruppi di genere (stesso ordine di GENRE_GROUPS).
// L'ultimo gruppo ("Funk, nu metal & altri") è di fatto il bucket "altro":
// riceve un grigio neutro invece di un nono hue categorico generato.
export const GENRE_SERIES: GenreSeries[] = [
  { name: 'Rock classico', color: '#3987e5' },
  { name: 'Hard rock & Metal', color: '#d95926' },
  { name: 'Punk', color: '#199e70' },
  { name: 'Grunge & Alternative', color: '#c98500' },
  { name: 'Progressive & Art rock', color: '#d55181' },
  { name: 'Psichedelia', color: '#008300' },
  { name: 'Pop rock & Britpop', color: '#9085e9' },
  { name: 'Glam & Arena rock', color: '#e66767' },
  { name: 'Funk, nu metal & altri', color: '#898781' },
]

export interface DecadeGenreCounts {
  decade: string
  counts: Record<string, number>
  total: number
}

const OTHER_GROUP = 'Funk, nu metal & altri'

/**
 * Ogni band viene conteggiata una sola volta, nel decennio in cui si è formata,
 * sotto il suo genere principale (il primo della lista che appartiene a un
 * gruppo). Così la somma degli stack per decennio combacia sempre con il
 * numero di band formate in quel decennio, senza doppi conteggi.
 */
export function computeGenreEvolution(): DecadeGenreCounts[] {
  const decadeMap = new Map<string, Record<string, number>>()

  for (const band of bands) {
    const decade = decadeOf(band.formedYear)
    const primaryGroup = band.genres.map(genreGroupOf).find((g): g is string => Boolean(g)) ?? OTHER_GROUP
    const rec = decadeMap.get(decade) ?? {}
    rec[primaryGroup] = (rec[primaryGroup] ?? 0) + 1
    decadeMap.set(decade, rec)
  }

  return Array.from(decadeMap.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([decade, counts]) => ({
      decade,
      counts,
      total: Object.values(counts).reduce((sum, n) => sum + n, 0),
    }))
}

export function genreGroupNames(): string[] {
  return GENRE_GROUPS.map((g) => g.name)
}
