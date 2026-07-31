import { useEffect, useState } from 'react'

const STORAGE_KEY = 'rockhistory:explored'

function readExplored(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return new Set(raw ? (JSON.parse(raw) as string[]) : [])
  } catch {
    return new Set()
  }
}

export function useMarkExplored(slug: string) {
  useEffect(() => {
    if (!slug) return
    const current = readExplored()
    if (!current.has(slug)) {
      current.add(slug)
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...current]))
    }
  }, [slug])
}

export function useExploredCount(): number {
  const [count] = useState(() => readExplored().size)
  return count
}
