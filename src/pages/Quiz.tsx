import { useState } from 'react'
import { Link } from 'react-router-dom'
import { bands } from '../data/bands'
import type { Band } from '../types'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

function pickQuestion(): { answer: Band; options: Band[] } {
  const answer = bands[Math.floor(Math.random() * bands.length)]
  const pool = bands.filter((b) => b.slug !== answer.slug)
  const wrong: Band[] = []
  while (wrong.length < 3 && pool.length > 0) {
    const idx = Math.floor(Math.random() * pool.length)
    wrong.push(pool.splice(idx, 1)[0])
  }
  const options = [answer, ...wrong].sort(() => Math.random() - 0.5)
  return { answer, options }
}

export default function Quiz() {
  useDocumentMeta(
    'Indovina la band | RockHistory',
    'Metti alla prova la tua conoscenza del rock: indovina la band da genere, decennio e formazione.',
  )

  const [question, setQuestion] = useState(pickQuestion)
  const [selected, setSelected] = useState<string | null>(null)
  const [score, setScore] = useState(0)
  const [asked, setAsked] = useState(0)

  const { answer } = question

  function selectAnswer(slug: string) {
    if (selected) return
    setSelected(slug)
    setAsked((n) => n + 1)
    if (slug === answer.slug) setScore((s) => s + 1)
  }

  function next() {
    setQuestion(pickQuestion())
    setSelected(null)
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-14 sm:px-6">
      <p className="mb-3 text-center font-heading text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
        Quiz
      </p>
      <h1 className="text-center font-display text-4xl tracking-tight text-white sm:text-5xl">
        Indovina la band
      </h1>
      <p className="mt-4 text-center text-white/60">
        Punteggio: {score} / {asked}
      </p>

      <div className="mt-10 rounded-lg border border-white/10 bg-white/[0.03] p-6">
        <p className="text-white/80">
          Formata nel <strong className="text-white">{answer.formedYear}</strong> a{' '}
          <strong className="text-white">{answer.origin}</strong>.
        </p>
        <p className="mt-2 text-white/80">
          Generi: <strong className="text-white">{answer.genres.join(', ')}</strong>
        </p>
        <p className="mt-2 text-white/80">
          Formazione: <strong className="text-white">{answer.members.join(', ')}</strong>
        </p>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {question.options.map((option) => {
            const isCorrect = option.slug === answer.slug
            const isSelected = selected === option.slug
            const showResult = selected !== null
            return (
              <button
                key={option.slug}
                type="button"
                onClick={() => selectAnswer(option.slug)}
                disabled={showResult}
                className={`rounded-lg border px-4 py-3 text-left font-heading text-sm uppercase tracking-wide transition-colors ${
                  showResult && isCorrect
                    ? 'border-green-500 bg-green-500/10 text-green-400'
                    : showResult && isSelected
                      ? 'border-red-500 bg-red-500/10 text-red-400'
                      : 'border-white/15 text-white/70 hover:border-white/30'
                }`}
              >
                {option.name}
              </button>
            )
          })}
        </div>

        {selected && (
          <div className="mt-6 flex items-center justify-between gap-3">
            <Link
              to={`/band/${answer.slug}`}
              className="text-sm text-white/50 underline decoration-white/30 underline-offset-2 hover:text-white/80"
            >
              Vedi la scheda di {answer.name} →
            </Link>
            <button
              type="button"
              onClick={next}
              className="shrink-0 rounded-full bg-red-500 px-5 py-2 font-heading text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-red-400"
            >
              Prossima
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
