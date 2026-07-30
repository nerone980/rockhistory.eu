import { Link } from 'react-router-dom'
import Poster from './Poster'
import { decadeOf, type Band } from '../types'

export default function PosterCard({ band }: { band: Band }) {
  const span = band.disbandedYear
    ? `${band.formedYear}–${band.disbandedYear}`
    : `dal ${band.formedYear}`

  return (
    <Link to={`/band/${band.slug}`} className="group block">
      <Poster title={band.name} subtitle={span} palette={band.palette} badge={decadeOf(band.formedYear)} />
      <p className="mt-2 truncate text-sm text-white/60">{band.genres.join(' · ')}</p>
    </Link>
  )
}
