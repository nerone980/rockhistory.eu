import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center">
      <h1 className="font-display text-6xl tracking-tight text-white">404</h1>
      <p className="mt-2 text-white/60">Pagina non trovata.</p>
      <Link to="/" className="mt-6 text-red-400 hover:text-red-300">
        ← Torna alla home
      </Link>
    </div>
  )
}
