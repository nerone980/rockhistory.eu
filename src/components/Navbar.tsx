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

        <div className="flex flex-wrap items-center justify-end gap-x-2 gap-y-1 sm:gap-x-3">
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
            aria-label="Quiz"
            title="Quiz"
            className="flex h-8 items-center gap-1.5 rounded-full px-2 text-white/60 transition-colors hover:text-red-400"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="9" />
              <text x="12" y="16.5" textAnchor="middle" fontSize="11" fontWeight="bold" fill="currentColor" stroke="none">
                ?
              </text>
            </svg>
            <span className="hidden font-heading text-sm uppercase tracking-wide sm:inline">Quiz</span>
          </Link>
          <Link
            to="/storia"
            aria-label="Storia del rock"
            title="Storia"
            className="flex h-8 items-center gap-1.5 rounded-full px-2 text-white/60 transition-colors hover:text-red-400"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="13" r="8" />
              <path d="M12 9v4l3 2" />
              <path d="M9 2h6" />
            </svg>
            <span className="hidden font-heading text-sm uppercase tracking-wide sm:inline">Storia</span>
          </Link>
          <Link
            to="/timeline"
            aria-label="Timeline"
            title="Timeline"
            className="flex h-8 items-center gap-1.5 rounded-full px-2 text-white/60 transition-colors hover:text-red-400"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="6" y1="3" x2="6" y2="21" />
              <line x1="6" y1="7" x2="14" y2="7" />
              <line x1="6" y1="13" x2="14" y2="13" />
              <line x1="6" y1="19" x2="14" y2="19" />
            </svg>
            <span className="hidden font-heading text-sm uppercase tracking-wide sm:inline">Timeline</span>
          </Link>
          <Link
            to="/supporto"
            aria-label="Supporto"
            title="Supporto"
            className="flex h-8 items-center gap-1.5 rounded-full px-2 text-white/60 transition-colors hover:text-red-400"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
            <span className="hidden font-heading text-sm uppercase tracking-wide sm:inline">Supporto</span>
          </Link>
        </div>
      </nav>
    </header>
  )
}
