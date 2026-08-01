interface PoweredBySpotifyProps {
  spotifyUrl?: string
  className?: string
}

export default function PoweredBySpotify({ spotifyUrl, className = '' }: PoweredBySpotifyProps) {
  const content = (
    <span className={`inline-flex items-center gap-1.5 text-white/50 ${className}`}>
      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="#1ED760" aria-hidden>
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.508 17.34a.75.75 0 0 1-1.032.248c-2.828-1.727-6.388-2.118-10.583-1.16a.75.75 0 1 1-.334-1.463c4.588-1.049 8.523-.597 11.7 1.343a.75.75 0 0 1 .249 1.032zm1.47-3.272a.938.938 0 0 1-1.29.31c-3.238-1.99-8.177-2.566-12.01-1.404a.938.938 0 0 1-.545-1.793c4.378-1.328 9.822-.685 13.535 1.596a.938.938 0 0 1 .31 1.29zm.127-3.41c-3.884-2.307-10.29-2.52-13.999-1.394a1.125 1.125 0 1 1-.653-2.153c4.257-1.29 11.336-1.041 15.804 1.611a1.125 1.125 0 1 1-1.152 1.936z" />
      </svg>
      <span className="font-heading text-xs uppercase tracking-wide">Powered by Spotify</span>
    </span>
  )

  if (!spotifyUrl) return content

  return (
    <a
      href={spotifyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="transition-opacity hover:opacity-80"
      aria-label="Ascolta questo album su Spotify"
    >
      {content}
    </a>
  )
}
