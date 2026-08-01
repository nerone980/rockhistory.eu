import { useDocumentMeta } from '../hooks/useDocumentMeta'

export default function Privacy() {
  useDocumentMeta(
    'Informativa privacy | RockHistory',
    'RockHistory non utilizza cookie di profilazione né servizi di tracciamento di terze parti.',
  )

  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="font-display text-4xl tracking-tight text-white">Informativa privacy</h1>
      <p className="mt-2 text-sm text-white/40">Ultimo aggiornamento: {new Date().getFullYear()}</p>

      <div className="mt-8 space-y-6 leading-relaxed text-white/80">
        <section>
          <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
            Nessun cookie
          </h2>
          <p className="mt-2">
            RockHistory non installa cookie di profilazione, cookie statistici né cookie di
            terze parti. Non utilizziamo servizi di analytics (come Google Analytics), pixel
            pubblicitari o strumenti di tracciamento di alcun tipo. Non essendoci cookie non
            tecnici da gestire, questo sito non mostra un banner di consenso: non ce n'è bisogno.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
            Nessun dato raccolto
          </h2>
          <p className="mt-2">
            Il sito è statico: non ci sono account utente o database che raccolgono dati
            personali dei visitatori. Il modulo di contatto nella pagina "Supporto" non invia né
            memorizza alcun dato sui nostri server: si limita ad aprire il client di posta del
            visitatore con un'email precompilata verso support@rockhistory.eu. Anche i font
            utilizzati sono ospitati direttamente su questo dominio (non caricati da Google Fonts
            o altri servizi esterni), quindi nessun dato — nemmeno il tuo indirizzo IP — viene
            condiviso con terze parti durante la navigazione.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
            Log del server
          </h2>
          <p className="mt-2">
            Come qualsiasi server web, l'hosting che ospita il sito può registrare log tecnici
            standard delle richieste (indirizzo IP, data e ora, pagina richiesta) per finalità di
            sicurezza e funzionamento del servizio, secondo le pratiche standard del fornitore di
            hosting. Questi log non vengono usati da RockHistory per profilazione o marketing.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
            Contenuti
          </h2>
          <p className="mt-2">
            I testi sulla storia di band e album sono contenuti editoriali a scopo informativo.
            Le eventuali immagini di copertine o foto pubblicate restano di proprietà dei
            rispettivi autori/etichette discografiche.
          </p>
        </section>
      </div>
    </div>
  )
}
