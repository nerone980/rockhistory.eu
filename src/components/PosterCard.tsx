import { Link } from 'react-router-dom'
import Poster from './Poster'
import { decadeOf, type Band } from '../types'

export default function PosterCard({ band }: { band: Band }) {
  const span = band.disbandedYear
    ? `${band.formedYear}–${band.disbandedYear}`
    : `dal ${band.formedYear}`

  return (
    <Link to={`/band/${band.slug}`} className="group block">
      <Poster
        title={band.name}
        subtitle={span}
        palette={band.palette}
        badge={decadeOf(band.formedYear)}
        imageUrl={band.photoImage}
      />
      <p className="mt-2 truncate font-heading text-sm text-white/50 transition-colors group-hover:text-white/70">
        {band.genres.join(' · ')}
      </p>
    </Link>
  )
}
