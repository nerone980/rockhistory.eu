import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'rockhistory:favorites'

function readFavorites(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return new Set(raw ? (JSON.parse(raw) as string[]) : [])
  } catch {
    return new Set()
  }
}

function writeFavorites(favorites: Set<string>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...favorites]))
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<Set<string>>(() => readFavorites())

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) setFavorites(readFavorites())
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const toggleFavorite = useCallback((slug: string) => {
    setFavorites((prev) => {
      const next = new Set(prev)
      if (next.has(slug)) next.delete(slug)
      else next.add(slug)
      writeFavorites(next)
      return next
    })
  }, [])

  const isFavorite = useCallback((slug: string) => favorites.has(slug), [favorites])

  return { favorites, toggleFavorite, isFavorite }
}
