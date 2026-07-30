import type { Band } from '../types'

export interface GenreGroup {
  name: string
  genres: string[]
}

export const GENRE_GROUPS: GenreGroup[] = [
  {
    name: 'Rock classico',
    genres: [
      'Rock',
      'Rock and roll',
      'Blues rock',
      'Garage rock',
      'Roots rock',
      'Surf rock',
      'Southern rock',
      'Country rock',
      'Heartland rock',
      'Proto-punk',
      'Folk rock',
    ],
  },
  {
    name: 'Hard rock & Metal',
    genres: [
      'Hard rock',
      'Heavy metal',
      'Glam metal',
      'Doom metal',
      'Stoner rock',
      'Thrash metal',
      'Metal alternativo',
      'Metalcore',
      'Industrial rock',
      'Shock rock',
    ],
  },
  {
    name: 'Punk',
    genres: ['Punk rock', 'Hardcore punk', 'Pop punk', 'Post-punk', 'Post-punk revival'],
  },
  {
    name: 'Grunge & Alternative',
    genres: [
      'Grunge',
      'Post-grunge',
      'Alternative rock',
      'Rock alternativo',
      'Indie rock',
      'Math rock',
      'Emo',
    ],
  },
  {
    name: 'Progressive & Art rock',
    genres: ['Rock progressivo', 'Art rock', 'Rock sperimentale', 'Rock opera', 'Rock gotico'],
  },
  {
    name: 'Psichedelia',
    genres: ['Rock psichedelico', 'Psichedelia', 'Pop psichedelico'],
  },
  {
    name: 'Pop rock & Britpop',
    genres: ['Pop rock', 'Britpop', 'Jangle pop', 'Power pop', 'New wave', 'New wave revival'],
  },
  {
    name: 'Glam & Arena rock',
    genres: ['Glam rock', 'Arena rock'],
  },
  {
    name: 'Funk, nu metal & altri',
    genres: ['Funk rock', 'Funk metal', 'Nu metal', 'Rap metal', 'Pop rap', 'Reggae rock', 'Electronic'],
  },
]

export function genreGroupOf(genre: string): string | undefined {
  return GENRE_GROUPS.find((group) => group.genres.includes(genre))?.name
}

export function bandMatchesGenreGroup(band: Band, groupName: string): boolean {
  return band.genres.some((g) => genreGroupOf(g) === groupName)
}
