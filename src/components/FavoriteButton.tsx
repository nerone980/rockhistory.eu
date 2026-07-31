import type { MouseEvent } from 'react'

export default function FavoriteButton({
  active,
  onToggle,
  className = '',
}: {
  active: boolean
  onToggle: () => void
  className?: string
}) {
  function handleClick(e: MouseEvent) {
    e.preventDefault()
    e.stopPropagation()
    onToggle()
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={active ? 'Rimuovi dai preferiti' : 'Aggiungi ai preferiti'}
      aria-pressed={active}
      className={`z-10 flex h-7 w-7 items-center justify-center rounded-full bg-black/50 backdrop-blur transition-colors hover:bg-black/70 ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        className={`h-4 w-4 ${active ? 'fill-red-500 text-red-500' : 'fill-none text-white/70'}`}
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 21s-6.7-4.35-9.3-8.1C1.2 10.6 1.5 7.6 3.6 5.9c2-1.6 4.8-1.2 6.4.6L12 8.7l2-2.2c1.6-1.8 4.4-2.2 6.4-.6 2.1 1.7 2.4 4.7.9 7-2.6 3.75-9.3 8.1-9.3 8.1z" />
      </svg>
    </button>
  )
}
