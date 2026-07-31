import { Link, useNavigate } from 'react-router-dom'
import SearchBar from './SearchBar'
import { bands } from '../data/bands'

export default function Navbar() {
  const navigate = useNavigate()

  function surpriseMe() {
    const random = bands[Math.floor(Math.random() * bands.length)]
    navigate(`/band/${random.slug}`)
  }

  return (
    <header className="sticky top-0 z-20 border-b border-red-900/30 bg-black/75 shadow-[0_1px_0_rgba(192,57,43,0.15)] backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="group flex items-center gap-2">
          <span
            aria-hidden
            className="flex h-7 w-7 items-center justify-center rounded-full border border-red-500/40 bg-gradient-to-br from-red-600/30 to-transparent text-xs transition-transform duration-300 group-hover:rotate-90"
          >
            🎸
          </span>
          <span className="font-display text-xl tracking-wide text-white">
            Rock<span className="text-red-500">History</span>
          </span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          <SearchBar />
          <button
            type="button"
            onClick={surpriseMe}
            aria-label="Sorprendimi: vai a una band a caso"
            title="Sorprendimi"
            className="flex h-8 w-8 items-center justify-center rounded-full text-white/60 transition-colors hover:text-red-400"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="3" />
              <circle cx="8.5" cy="8.5" r="1.2" fill="currentColor" stroke="none" />
              <circle cx="15.5" cy="8.5" r="1.2" fill="currentColor" stroke="none" />
              <circle cx="8.5" cy="15.5" r="1.2" fill="currentColor" stroke="none" />
              <circle cx="15.5" cy="15.5" r="1.2" fill="currentColor" stroke="none" />
              <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
            </svg>
          </button>
          <Link
            to="/preferiti"
            aria-label="I miei preferiti"
            title="Preferiti"
            className="flex h-8 w-8 items-center justify-center rounded-full text-white/60 transition-colors hover:text-red-400"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 21s-6.7-4.35-9.3-8.1C1.2 10.6 1.5 7.6 3.6 5.9c2-1.6 4.8-1.2 6.4.6L12 8.7l2-2.2c1.6-1.8 4.4-2.2 6.4-.6 2.1 1.7 2.4 4.7.9 7-2.6 3.75-9.3 8.1-9.3 8.1z" />
            </svg>
          </Link>
          <Link
            to="/quiz"
            className="hidden font-heading text-sm uppercase tracking-widest text-white/50 transition-colors hover:text-red-400 sm:block"
          >
            Quiz
          </Link>
          <Link
            to="/storia"
            className="hidden font-heading text-sm uppercase tracking-widest text-white/50 transition-colors hover:text-red-400 md:block"
          >
            Storia
          </Link>
          <Link
            to="/timeline"
            className="font-heading text-sm uppercase tracking-widest text-white/50 transition-colors hover:text-red-400"
          >
            Timeline
          </Link>
        </div>
      </nav>
    </header>
  )
}
