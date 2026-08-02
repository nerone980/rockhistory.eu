import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SearchBar from './SearchBar'
import { bands } from '../data/bands'

interface NavItem {
  to: string
  label: string
  icon: React.ReactNode
}

const navItems: NavItem[] = [
  {
    to: '/quiz',
    label: 'Quiz',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <text x="12" y="16.5" textAnchor="middle" fontSize="11" fontWeight="bold" fill="currentColor" stroke="none">
          ?
        </text>
      </svg>
    ),
  },
  {
    to: '/storia',
    label: 'Storia',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="13" r="8" />
        <path d="M12 9v4l3 2" />
        <path d="M9 2h6" />
      </svg>
    ),
  },
  {
    to: '/timeline',
    label: 'Timeline',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="6" y1="3" x2="6" y2="21" />
        <line x1="6" y1="7" x2="14" y2="7" />
        <line x1="6" y1="13" x2="14" y2="13" />
        <line x1="6" y1="19" x2="14" y2="19" />
      </svg>
    ),
  },
  {
    to: '/supporto',
    label: 'Supporto',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
]

export default function Navbar() {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  function surpriseMe() {
    const random = bands[Math.floor(Math.random() * bands.length)]
    navigate(`/band/${random.slug}`)
    setMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-20 border-b border-red-900/30 bg-black/75 shadow-[0_1px_0_rgba(192,57,43,0.15)] backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="group flex items-center gap-2" onClick={() => setMenuOpen(false)}>
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

        <div className="flex items-center gap-x-2 sm:gap-x-3">
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
            onClick={() => setMenuOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-full text-white/60 transition-colors hover:text-red-400"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 21s-6.7-4.35-9.3-8.1C1.2 10.6 1.5 7.6 3.6 5.9c2-1.6 4.8-1.2 6.4.6L12 8.7l2-2.2c1.6-1.8 4.4-2.2 6.4-.6 2.1 1.7 2.4 4.7.9 7-2.6 3.75-9.3 8.1-9.3 8.1z" />
            </svg>
          </Link>

          {/* Desktop: link con icona + testo sulla stessa riga della navbar */}
          <div className="hidden items-center gap-x-3 sm:flex">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                aria-label={item.label}
                title={item.label}
                className="flex h-8 items-center gap-1.5 rounded-full px-2 text-white/60 transition-colors hover:text-red-400"
              >
                {item.icon}
                <span className="font-heading text-sm uppercase tracking-wide">{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile: gli stessi link stanno in un pannello a comparsa (troppi per
              stare su una riga senza andare a capo e disallinearsi). */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Chiudi il menu' : 'Apri il menu'}
            aria-expanded={menuOpen}
            className="flex h-8 w-8 items-center justify-center rounded-full text-white/60 transition-colors hover:text-red-400 sm:hidden"
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-red-900/20 px-4 pb-3 pt-2 sm:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 rounded-md px-2 py-2.5 text-white/70 transition-colors hover:bg-white/5 hover:text-red-400"
              >
                {item.icon}
                <span className="font-heading text-sm uppercase tracking-wide">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
