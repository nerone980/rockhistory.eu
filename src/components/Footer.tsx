import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="relative z-10 mt-16 border-t border-white/10 px-4 py-6 text-center text-xs text-white/40 sm:px-6">
      <p>
        Questo sito non utilizza cookie di profilazione né servizi di tracciamento di terze parti.{' '}
        <Link to="/privacy" className="underline decoration-white/30 underline-offset-2 hover:text-white/70">
          Informativa privacy
        </Link>
      </p>
    </footer>
  )
}
