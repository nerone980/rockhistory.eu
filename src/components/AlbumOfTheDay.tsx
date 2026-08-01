import { Link } from 'react-router-dom'
import { bands, getAlbumCover } from '../data/bands'

function getAlbumOfTheDay() {
  const pairs = bands.flatMap((band) => band.albums.map((album) => ({ band, album })))
  const startOfYear = new Date(new Date().getFullYear(), 0, 0).getTime()
  const dayOfYear = Math.floor((Date.now() - startOfYear) / 86400000)
  return pairs[dayOfYear % pairs.length]
}

export default function AlbumOfTheDay() {
  const { band, album } = getAlbumOfTheDay()
  const cover = getAlbumCover(band, album)

  return (
    <Link
      to={`/band/${band.slug}/album/${album.slug}`}
      className="group mx-auto mb-12 flex max-w-md items-center gap-4 rounded-lg border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-white/20"
    >
      <div
        aria-hidden
        className="h-16 w-16 shrink-0 overflow-hidden rounded transition-transform duration-300 group-hover:scale-105"
        style={
          cover
            ? undefined
            : { backgroundImage: `linear-gradient(160deg, ${album.palette[0]}, ${album.palette[1]})` }
        }
      >
        {cover && <img src={cover} alt="" loading="lazy" className="h-full w-full object-cover" />}
      </div>
      <div className="min-w-0 text-left">
        <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-red-500">
          Disco del giorno
        </p>
        <p className="mt-1 truncate font-display text-lg text-white">{album.title}</p>
        <p className="truncate text-sm text-white/50">
          {band.name} · {album.year}
        </p>
      </div>
    </Link>
  )
}
