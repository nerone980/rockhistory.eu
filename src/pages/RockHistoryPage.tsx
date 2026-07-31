import SectionLabel from '../components/SectionLabel'
import GenreEvolutionChart from '../components/GenreEvolutionChart'
import { bands } from '../data/bands'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

interface Era {
  period: string
  title: string
  body: string
}

const ERAS: Era[] = [
  {
    period: 'Anni \'40-\'50',
    title: 'Le radici: blues, R&B e country',
    body:
      'Prima ancora che esistesse il termine "rock", le sue fondamenta si posano nel rhythm and blues e nel blues elettrico afroamericano (Muddy Waters, Howlin\' Wolf), nel gospel e nel boogie-woogie, incrociati con il country e il western swing bianco del Sud degli Stati Uniti. È da questa fusione di tradizioni nere e bianche, spesso segregate nei juke-box e nelle radio dell\'epoca, che nasce il linguaggio ritmico e armonico su cui poggerà tutto il rock a venire.',
  },
  {
    period: '1954-1959',
    title: 'La nascita del rock and roll',
    body:
      'Con Chuck Berry, Little Richard, Elvis Presley e Jerry Lee Lewis il rhythm and blues si trasforma in un fenomeno di massa rivolto ai giovani bianchi e neri insieme: chitarra elettrica, backbeat marcato, testi su auto, balli e ribellione adolescenziale. Il rock and roll diventa la prima vera musica generazionale, con tutto lo scandalo morale (e razziale) che questo comporta nell\'America del dopoguerra.',
  },
  {
    period: 'Primi anni \'60',
    title: 'La British Invasion',
    body:
      'Un gruppo di giovani inglesi cresciuti a pane e dischi di blues americani importati — Beatles, Rolling Stones, Kinks, Who — reinterpreta il rock and roll con una sensibilità pop e una scrittura sempre più sofisticata, riesportandolo poi negli Stati Uniti stessi a partire dal 1964. È l\'inizio della "British Invasion": da qui in avanti il rock diventa un dialogo continuo fra le due sponde dell\'Atlantico.',
  },
  {
    period: 'Metà-fine anni \'60',
    title: 'Psichedelia e controcultura',
    body:
      'L\'LSD, il movimento hippie e la contestazione della guerra in Vietnam spingono la musica verso territori più sperimentali: distorsioni, feedback, strutture non convenzionali. Jimi Hendrix ridefinisce cosa può fare una chitarra elettrica, i Doors portano poesia e oscurità sul palco, Beatles e Pink Floyd trasformano lo studio di registrazione in uno strumento creativo. Woodstock (1969) ne diventa il simbolo collettivo.',
  },
  {
    period: 'Fine \'60-\'70',
    title: 'Hard rock e le origini del metal',
    body:
      'Riff più pesanti, volumi più alti, un\'estetica più cupa: Led Zeppelin, Deep Purple e Black Sabbath spingono il blues rock verso un suono massiccio che getta le basi dell\'heavy metal. Non è un caso che i tre gruppi nascano tutti in Inghilterra tra industria pesante e working class: il metal nasce anche come colonna sonora del disagio operaio.',
  },
  {
    period: 'Anni \'70',
    title: 'Progressive e art rock',
    body:
      'Sull\'altro fronte, King Crimson, Genesis, Yes e Pink Floyd portano nel rock ambizioni da musica colta: suite lunghe, cambi di tempo, strumentazione classica ed elettronica, concept album. È il decennio in cui il rock si prende sul serio come forma d\'arte, per il meglio e per il peggio (e il punk arriverà proprio a reagire a questo eccesso).',
  },
  {
    period: 'Metà-fine anni \'70',
    title: 'Il punk e la reazione',
    body:
      'Contro i virtuosismi del progressive e lo star-system del rock arena, Ramones, Sex Pistols e The Clash propongono un ritorno a canzoni brevi, veloci, suonate con tre accordi e tanta rabbia. Il punk è tanto un suono quanto un\'etica DIY ("chiunque può formare una band"), che aprirà la strada a decenni di rock indipendente.',
  },
  {
    period: 'Fine \'70-\'80',
    title: 'New wave, post-punk e glam/arena rock',
    body:
      'L\'energia punk si ramifica: da un lato il post-punk e la new wave (sintetizzatori, atmosfere fredde, influenza sull\'elettronica pop), dall\'altro un rock da stadio più patinato — glam e arena rock — pensato per riempire i palazzetti. Sono gli anni in cui MTV nasce e cambia per sempre il modo in cui il rock viene consumato: non solo ascoltato, ma guardato.',
  },
  {
    period: 'Anni \'80',
    title: 'Hair metal e la maturità dell\'heavy metal',
    body:
      'L\'heavy metal si biforca: da un lato l\'hard rock patinato e melodico dell\'hair metal (Bon Jovi, Def Leppard, Mötley Crüe), tutto acconciature cotonate e ballate power; dall\'altro un metal sempre più veloce e aggressivo — thrash metal su tutti — che pone le basi per l\'estremismo sonoro dei decenni successivi.',
  },
  {
    period: 'Anni \'90',
    title: 'Grunge e alternative rock',
    body:
      'Da Seattle, Nirvana, Pearl Jam, Soundgarden e Alice in Chains spazzano via l\'estetica patinata degli anni Ottanta con un suono sporco, testi introspettivi e un atteggiamento volutamente anti-glamour. Il grunge porta il rock indipendente nel mainstream globale, aprendo la strada a un decennio di alternative rock eterogeneo.',
  },
  {
    period: 'Fine \'90-2000',
    title: 'Nu metal, post-grunge e pop punk',
    body:
      'Il rock si ibrida ulteriormente: il nu metal (Korn, System of a Down, Linkin Park) fonde metal, hip hop ed elettronica; il post-grunge leviga le asperità del decennio precedente per la radio mainstream; il pop punk (Green Day, poi Paramore, My Chemical Romance) porta l\'energia punk a un pubblico adolescenziale su scala di massa.',
  },
  {
    period: 'Anni 2000',
    title: 'Indie rock e post-punk revival',
    body:
      'Come reazione al nu metal e al pop patinato, una nuova ondata di gruppi — The Strokes, The White Stripes, Franz Ferdinand, Arctic Monkeys — recupera chitarre grezze, ritmiche spigolose e un\'estetica volutamente minimale, riportando in auge l\'immaginario del garage rock e del post-punk delle origini.',
  },
  {
    period: '2010-oggi',
    title: 'Il rock contemporaneo: frammentazione e nuove fusioni',
    body:
      'Negli ultimi quindici anni il rock smette di avere un unico centro: convive con il revival hard rock/blues (Greta Van Fleet), l\'hardcore che flirta con il pop (Turnstile), il metal teatrale (Ghost), sonorità che fondono progressive ed elettronica atmosferica (Sleep Token), e mille altre declinazioni locali. Più che un genere unico, oggi il rock è un insieme di dialetti che continuano a contaminarsi a vicenda — esattamente come succedeva già negli anni Cinquanta tra blues e country.',
  },
]

export default function RockHistoryPage() {
  useDocumentMeta(
    'La storia del rock: origini, influenze ed evoluzione | RockHistory',
    'Un racconto dettagliato di sessant\'anni di storia del rock: dalle radici blues e R&B alle mille declinazioni di oggi, con un grafico dell\'evoluzione dei generi decennio per decennio.',
  )

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <section className="mb-14 text-center">
        <p className="mb-3 font-heading text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
          Origini, influenze, evoluzione
        </p>
        <h1 className="font-display text-4xl leading-[0.95] tracking-tight text-white sm:text-6xl">
          La storia del <span className="text-red-500">rock</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base text-white/60 sm:text-lg">
          Sessant'anni di contaminazioni: dal blues e dal country degli anni Quaranta alle mille
          declinazioni del rock contemporaneo, genere dopo genere.
        </p>
      </section>

      <div className="space-y-10">
        {ERAS.map((era) => (
          <section key={era.title} className="space-y-2">
            <p className="font-heading text-xs font-semibold uppercase tracking-wide text-red-400/80">
              {era.period}
            </p>
            <h2 className="font-display text-2xl tracking-tight text-white sm:text-3xl">{era.title}</h2>
            <p className="leading-relaxed text-white/75">{era.body}</p>
          </section>
        ))}
      </div>

      <section className="mt-16">
        <SectionLabel>Come sono evolute le band nel catalogo</SectionLabel>
        <p className="mt-2 leading-relaxed text-white/70">
          Il grafico mostra, decennio per decennio, quante delle {bands.length} band raccontate su
          RockHistory si sono formate e a quale famiglia di genere appartiene principalmente
          ciascuna. Si vede chiaramente come il "rock classico" e le radici hard rock/progressive
          dominino gli anni Sessanta e Settanta, per poi lasciare spazio, decennio dopo decennio, a
          un ventaglio sempre più ampio e frammentato di sottogeneri.
        </p>
        <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.02] p-4 sm:p-6">
          <GenreEvolutionChart />
        </div>
      </section>
    </div>
  )
}
