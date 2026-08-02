import { Link } from 'react-router-dom'
import Poster from './Poster'
import FavoriteButton from './FavoriteButton'
import { useFavorites } from '../hooks/useFavorites'
import { getBandPhoto } from '../data/bands'
import { decadeOf, type Band } from '../types'

export default function PosterCard({ band }: { band: Band }) {
  const span = band.disbandedYear
    ? `${band.formedYear}–${band.disbandedYear}`
    : `dal ${band.formedYear}`
  const { isFavorite, toggleFavorite } = useFavorites()

  return (
    <div className="group relative">
      <Link to={`/band/${band.slug}`} className="block">
        <Poster
          title={band.name}
          subtitle={span}
          palette={band.palette}
          badge={decadeOf(band.formedYear)}
          variant="turntable"
          imageUrl={getBandPhoto(band)}
        />
        <p className="mt-2 truncate font-heading text-sm text-white/50 transition-colors group-hover:text-white/70">
          {band.genres.join(' · ')}
        </p>
      </Link>
      <FavoriteButton
        className="absolute right-2 top-2"
        active={isFavorite(band.slug)}
        onToggle={() => toggleFavorite(band.slug)}
      />
    </div>
  )
}
