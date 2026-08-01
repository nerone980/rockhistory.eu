import { useState } from 'react'
import SectionLabel from '../components/SectionLabel'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

const SUPPORT_EMAIL = 'support@rockhistory.eu'

type RequestType = 'Suggerimento' | 'Correzione' | 'Altro'

const TYPE_OPTIONS: RequestType[] = ['Suggerimento', 'Correzione', 'Altro']

export default function Support() {
  useDocumentMeta(
    'Supporto e segnalazioni | RockHistory',
    'Segnala un errore, proponi una correzione o inviaci un suggerimento per RockHistory.',
  )

  const [type, setType] = useState<RequestType>('Correzione')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const mailSubject = `[RockHistory] ${type}${subject ? `: ${subject}` : ''}`
    const mailBody = message
    const mailto = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`
    window.location.href = mailto
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-14 sm:px-6">
      <h1 className="font-display text-4xl tracking-tight text-white">Supporto e segnalazioni</h1>
      <p className="mt-3 leading-relaxed text-white/70">
        Hai trovato un errore in una discografia, una copertina sbagliata o vuoi suggerirci una
        band da aggiungere? Scrivici: il modulo qui sotto apre il tuo programma di posta con
        un'email già pronta per{' '}
        <a href={`mailto:${SUPPORT_EMAIL}`} className="text-red-400 hover:text-red-300">
          {SUPPORT_EMAIL}
        </a>
        .
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-5 rounded-lg border border-white/10 bg-white/[0.03] p-6"
      >
        <div className="space-y-2">
          <SectionLabel>Tipo di segnalazione</SectionLabel>
          <div className="flex flex-wrap gap-2">
            {TYPE_OPTIONS.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setType(opt)}
                className={`rounded-full border px-3.5 py-1 font-heading text-xs font-medium uppercase tracking-wide transition-all duration-200 ${
                  type === opt
                    ? 'border-red-400/80 bg-red-500/20 text-red-300'
                    : 'border-white/10 text-white/40 hover:border-white/25 hover:text-white/70'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <SectionLabel>Oggetto (facoltativo)</SectionLabel>
          <input
            type="text"
            aria-label="Oggetto"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Es. Copertina errata per Queen"
            className="w-full rounded-md border border-white/15 bg-black/30 px-3 py-2 text-white placeholder:text-white/30 focus:border-red-400/60 focus:outline-none"
          />
        </div>

        <div className="space-y-2">
          <SectionLabel>Messaggio</SectionLabel>
          <textarea
            required
            aria-label="Messaggio"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Descrivi qui il problema o il suggerimento..."
            className="w-full resize-y rounded-md border border-white/15 bg-black/30 px-3 py-2 text-white placeholder:text-white/30 focus:border-red-400/60 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-red-500 px-4 py-2.5 font-heading text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-red-600"
        >
          Invia email
        </button>
        <p className="text-center text-xs text-white/40">
          Il pulsante apre il tuo client di posta predefinito: nessun dato viene inviato o
          memorizzato da RockHistory.
        </p>
      </form>
    </div>
  )
}
