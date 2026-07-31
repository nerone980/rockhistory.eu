import { useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { bands } from '../data/bands'

interface SearchResult {
  type: 'band' | 'album'
  label: string
  sublabel: string
  path: string
}

export default function SearchBar() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  const results = useMemo<SearchResult[]>(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    const matches: SearchResult[] = []
    for (const band of bands) {
      if (matches.length >= 8) break
      if (band.name.toLowerCase().includes(q)) {
        matches.push({ type: 'band', label: band.name, sublabel: band.genres[0], path: `/band/${band.slug}` })
      }
      for (const album of band.albums) {
        if (matches.length >= 8) break
        if (album.title.toLowerCase().includes(q)) {
          matches.push({
            type: 'album',
            label: album.title,
            sublabel: band.name,
            path: `/band/${band.slug}/album/${album.slug}`,
          })
        }
      }
    }
    return matches
  }, [query])

  function openSearch() {
    setOpen(true)
    requestAnimationFrame(() => inputRef.current?.focus())
  }

  function closeSearch() {
    setOpen(false)
    setQuery('')
  }

  function goTo(path: string) {
    navigate(path)
    closeSearch()
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={openSearch}
        aria-label="Cerca band o album"
        className="flex h-8 w-8 items-center justify-center rounded-full text-white/60 transition-colors hover:text-red-400"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-30" onClick={closeSearch} />
          <div className="absolute right-0 top-full z-40 mt-2 w-72 rounded-lg border border-white/10 bg-black/95 p-2 shadow-2xl backdrop-blur sm:w-80">
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Escape' && closeSearch()}
              placeholder="Cerca band o album..."
              className="w-full rounded border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none placeholder:text-white/30 focus:border-red-500/50"
            />
            {results.length > 0 && (
              <ul className="mt-2 max-h-80 overflow-y-auto">
                {results.map((r) => (
                  <li key={r.path}>
                    <button
                      type="button"
                      onClick={() => goTo(r.path)}
                      className="flex w-full flex-col items-start rounded px-3 py-2 text-left transition-colors hover:bg-white/10"
                    >
                      <span className="text-sm text-white">{r.label}</span>
                      <span className="font-heading text-xs uppercase tracking-wide text-white/40">
                        {r.type === 'band' ? r.sublabel : `Album · ${r.sublabel}`}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
            {query.trim() && results.length === 0 && (
              <p className="px-3 py-4 text-center text-sm text-white/40">Nessun risultato</p>
            )}
          </div>
        </>
      )}
    </div>
  )
}
