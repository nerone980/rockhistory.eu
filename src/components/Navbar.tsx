import { Link } from 'react-router-dom'

export default function Navbar() {
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
        <Link
          to="/timeline"
          className="font-heading text-sm uppercase tracking-widest text-white/50 transition-colors hover:text-red-400"
        >
          Timeline
        </Link>
      </nav>
    </header>
  )
}
