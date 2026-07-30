import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-black/70 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="font-display text-lg font-extrabold tracking-tight text-white">
          Rock<span className="text-red-500">History</span>
        </Link>
        <span className="hidden text-sm text-white/50 sm:block">1960 → oggi</span>
      </nav>
    </header>
  )
}
