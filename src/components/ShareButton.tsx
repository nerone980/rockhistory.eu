import { useState } from 'react'

export default function ShareButton({ title, className = '' }: { title: string; className?: string }) {
  const [copied, setCopied] = useState(false)

  async function handleShare() {
    const url = window.location.href
    if (navigator.share) {
      try {
        await navigator.share({ title, url })
      } catch {
        // Condivisione annullata dall'utente: nessuna azione necessaria.
      }
      return
    }
    await navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      className={`inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 font-heading text-xs uppercase tracking-wide text-white/60 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.6" y1="10.6" x2="15.4" y2="6.4" />
        <line x1="8.6" y1="13.4" x2="15.4" y2="17.6" />
      </svg>
      {copied ? 'Link copiato!' : 'Condividi'}
    </button>
  )
}
