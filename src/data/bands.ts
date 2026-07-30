import type { Band } from '../types'
import { moreBands } from './bands-more'

export const coreBands: Band[] = [
  {
    slug: 'the-beatles',
    name: 'The Beatles',
    formedYear: 1960,
    disbandedYear: 1970,
    origin: 'Liverpool, Inghilterra',
    genres: ['Rock', 'Pop rock', 'Psichedelia'],
    members: ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'],
    palette: ['#c0392b', '#f39c12'],
    history:
      'Formatasi a Liverpool nel 1960 come evoluzione dei Quarrymen, la band raggiunge la fama mondiale nel 1963 con la "Beatlemania" scatenata nel Regno Unito e, dal 1964, negli Stati Uniti. Nel giro di un decennio i quattro di Liverpool ridefiniscono il pop e il rock: dagli esordi beat di "Please Please Me" all\'apertura psichedelica di "Revolver" e "Sgt. Pepper\'s Lonely Hearts Club Band", fino alla maturità compositiva di "Abbey Road". Lo scioglimento arriva nel 1970, ma l\'influenza del gruppo su armonia, produzione discografica e cultura pop resta ineguagliata.',
    albums: [
      {
        slug: 'please-please-me',
        title: 'Please Please Me',
        year: 1963,
        tagline: "L'esordio che accende la Beatlemania",
        history:
          'Registrato quasi interamente in un solo giorno di sessione, il primo album porta in studio l\'energia dei loro concerti dal vivo, mescolando cover R&B e composizioni originali di Lennon-McCartney.',
        palette: ['#c0392b', '#e74c3c'],
        tracks: [
          { title: 'I Saw Her Standing There', durationSec: 176, isHit: true },
          { title: 'Misery', durationSec: 108 },
          { title: 'Twist and Shout', durationSec: 155, isHit: true },
          { title: 'Please Please Me', durationSec: 120, isHit: true },
          { title: 'Love Me Do', durationSec: 143, isHit: true },
        ],
      },
      {
        slug: 'revolver',
        title: 'Revolver',
        year: 1966,
        tagline: 'La svolta psichedelica e sperimentale',
        history:
          'Con "Revolver" i Beatles abbandonano il palco per lo studio di registrazione, sperimentando nastri al contrario, orchestrazioni indiane e nuove tecniche di produzione insieme a George Martin.',
        palette: ['#8e44ad', '#2c3e50'],
        tracks: [
          { title: 'Taxman', durationSec: 159 },
          { title: 'Eleanor Rigby', durationSec: 127, isHit: true },
          { title: 'Yellow Submarine', durationSec: 158, isHit: true },
          { title: 'Here, There and Everywhere', durationSec: 145 },
          { title: 'Tomorrow Never Knows', durationSec: 177 },
        ],
      },
      {
        slug: 'abbey-road',
        title: 'Abbey Road',
        year: 1969,
        tagline: "L'ultimo capolavoro registrato insieme",
        history:
          'Nonostante le crescenti tensioni interne, il gruppo firma uno degli album meglio prodotti della storia del rock, celebre per il medley sul lato B e per la copertina diventata icona globale.',
        palette: ['#2c3e50', '#95a5a6'],
        tracks: [
          { title: 'Come Together', durationSec: 259, isHit: true },
          { title: 'Something', durationSec: 182, isHit: true },
          { title: 'Here Comes the Sun', durationSec: 185, isHit: true },
          { title: 'Golden Slumbers', durationSec: 91 },
          { title: 'The End', durationSec: 141 },
        ],
      },
    ],
  },
  {
    slug: 'the-rolling-stones',
    name: 'The Rolling Stones',
    formedYear: 1962,
    origin: 'Londra, Inghilterra',
    genres: ['Rock', 'Blues rock', 'Hard rock'],
    members: ['Mick Jagger', 'Keith Richards', 'Charlie Watts', 'Ronnie Wood'],
    palette: ['#c0392b', '#1a1a1a'],
    history:
      'Nati dalla passione condivisa per il blues americano, i Rolling Stones diventano in pochi anni l\'alter ego più ruvido dei Beatles. Con Mick Jagger e Keith Richards come motore compositivo, la band attraversa oltre sei decenni senza mai fermarsi, passando dal blues rock delle origini all\'hard rock di "Exile on Main St." fino ai tour stadio degli anni 2020, guadagnandosi l\'appellativo di "la più grande rock and roll band del mondo".',
    albums: [
      {
        slug: 'let-it-bleed',
        title: 'Let It Bleed',
        year: 1969,
        tagline: 'Il blues si fa oscuro e maturo',
        history:
          'Pubblicato nell\'anno della morte di Brian Jones, l\'album segna la transizione verso la formazione con Mick Taylor e consolida il suono ruvido e blues della band a cavallo tra i due decenni.',
        palette: ['#7f0000', '#1a1a1a'],
        tracks: [
          { title: 'Gimme Shelter', durationSec: 271, isHit: true },
          { title: 'Love in Vain', durationSec: 254 },
          { title: 'You Can\'t Always Get What You Want', durationSec: 268, isHit: true },
          { title: 'Midnight Rambler', durationSec: 409 },
        ],
      },
      {
        slug: 'sticky-fingers',
        title: 'Sticky Fingers',
        year: 1971,
        tagline: 'La copertina con la zip firmata Andy Warhol',
        history:
          'Primo disco pubblicato con l\'etichetta propria della band e con il celebre logo "lingua e labbra", contiene alcune delle canzoni più suonate dal vivo nella storia del gruppo.',
        palette: ['#c0392b', '#ecf0f1'],
        tracks: [
          { title: 'Brown Sugar', durationSec: 229, isHit: true },
          { title: 'Wild Horses', durationSec: 343, isHit: true },
          { title: 'Bitch', durationSec: 224 },
          { title: 'Dead Flowers', durationSec: 244 },
        ],
      },
    ],
  },
  {
    slug: 'led-zeppelin',
    name: 'Led Zeppelin',
    formedYear: 1968,
    disbandedYear: 1980,
    origin: 'Londra, Inghilterra',
    genres: ['Hard rock', 'Blues rock', 'Folk rock'],
    members: ['Robert Plant', 'Jimmy Page', 'John Paul Jones', 'John Bonham'],
    palette: ['#1a1a2e', '#e67e22'],
    history:
      'Fondati da Jimmy Page dopo lo scioglimento degli Yardbirds, i Led Zeppelin fondono blues, folk britannico e un\'aggressività chitarristica che pone le basi dell\'hard rock e, indirettamente, dell\'heavy metal. Senza mai pubblicare un vero singolo nel Regno Unito, costruiscono il loro successo su album concepiti come opere intere e su tour leggendari, fino allo scioglimento nel 1980 in seguito alla morte del batterista John Bonham.',
    albums: [
      {
        slug: 'led-zeppelin-iv',
        title: 'Led Zeppelin IV',
        year: 1971,
        tagline: 'Il disco senza titolo che consacra la leggenda',
        history:
          'Pubblicato senza alcun testo in copertina né titolo ufficiale, l\'album contiene "Stairway to Heaven", brano diventato uno dei simboli assoluti del rock classico.',
        palette: ['#1a1a2e', '#8b6b3d'],
        tracks: [
          { title: 'Black Dog', durationSec: 296, isHit: true },
          { title: 'Rock and Roll', durationSec: 220, isHit: true },
          { title: 'Stairway to Heaven', durationSec: 482, isHit: true },
          { title: 'When the Levee Breaks', durationSec: 429 },
        ],
      },
      {
        slug: 'physical-graffiti',
        title: 'Physical Graffiti',
        year: 1975,
        tagline: 'Un doppio album senza confini stilistici',
        history:
          'Doppio LP che spazia dal funk all\'epica orientaleggiante, considerato il punto più alto della loro ambizione compositiva e della title track strumentale "Kashmir".',
        palette: ['#2c2c2c', '#e67e22'],
        tracks: [
          { title: 'Kashmir', durationSec: 517, isHit: true },
          { title: 'Trampled Under Foot', durationSec: 335, isHit: true },
          { title: 'Houses of the Holy', durationSec: 220 },
          { title: 'In My Time of Dying', durationSec: 667 },
        ],
      },
    ],
  },
  {
    slug: 'pink-floyd',
    name: 'Pink Floyd',
    formedYear: 1965,
    disbandedYear: 1995,
    origin: 'Londra, Inghilterra',
    genres: ['Rock progressivo', 'Rock psichedelico', 'Art rock'],
    members: ['David Gilmour', 'Roger Waters', 'Nick Mason', 'Richard Wright'],
    palette: ['#0f0f2d', '#e84393'],
    history:
      'Nati nella scena psichedelica londinese sotto la guida di Syd Barrett, i Pink Floyd si trasformano dopo il suo allontanamento in una delle band più ambiziose del rock progressivo. Concept album, effetti sonori all\'avanguardia e spettacoli dal vivo monumentali li portano a vendere centinaia di milioni di dischi, nonostante le crescenti tensioni interne culminate nell\'addio di Roger Waters a metà anni Ottanta.',
    albums: [
      {
        slug: 'the-dark-side-of-the-moon',
        title: 'The Dark Side of the Moon',
        year: 1973,
        tagline: 'Il concept album sulla mente umana',
        history:
          'Concept album su tempo, denaro, follia e mortalità, resta per anni tra i dischi più venduti di sempre grazie a una produzione innovativa firmata Alan Parsons e a un flusso sonoro continuo tra i brani.',
        palette: ['#1a1a2e', '#8e44ad'],
        tracks: [
          { title: 'Time', durationSec: 421, isHit: true },
          { title: 'Money', durationSec: 382, isHit: true },
          { title: 'Us and Them', durationSec: 462 },
          { title: 'Brain Damage', durationSec: 226 },
        ],
      },
      {
        slug: 'the-wall',
        title: 'The Wall',
        year: 1979,
        tagline: 'Un muro di isolamento diventato rock opera',
        history:
          'Doppio concept album ideato da Roger Waters sull\'alienazione e l\'isolamento, diventa anche un film e uno spettacolo teatrale, restando uno dei simboli del rock progressivo.',
        palette: ['#1a1a1a', '#c0392b'],
        tracks: [
          { title: 'Another Brick in the Wall, Pt. 2', durationSec: 238, isHit: true },
          { title: 'Comfortably Numb', durationSec: 382, isHit: true },
          { title: 'Hey You', durationSec: 279 },
          { title: 'Mother', durationSec: 336 },
        ],
      },
    ],
  },
  {
    slug: 'queen',
    name: 'Queen',
    formedYear: 1970,
    origin: 'Londra, Inghilterra',
    genres: ['Rock', 'Glam rock', 'Arena rock'],
    members: ['Freddie Mercury', 'Brian May', 'Roger Taylor', 'John Deacon'],
    palette: ['#2c3e50', '#f1c40f'],
    history:
      'Guidati dal carisma scenico di Freddie Mercury e dal virtuosismo chitarristico di Brian May, i Queen costruiscono un sound eclettico che mescola opera, glam e hard rock. La consacrazione arriva con "Bohemian Rhapsody" nel 1975, seguita da un decennio di successi planetari e da esibizioni dal vivo entrate nella storia, come quella al Live Aid del 1985. La morte di Mercury nel 1991 chiude l\'era d\'oro della band, che continua comunque a esibirsi con nuovi collaboratori.',
    albums: [
      {
        slug: 'a-night-at-the-opera',
        title: 'A Night at the Opera',
        year: 1975,
        tagline: 'Il capolavoro barocco del rock',
        history:
          'All\'epoca l\'album più costoso mai prodotto, unisce hard rock, music-hall e passaggi operistici attorno al capolavoro "Bohemian Rhapsody", scritta da Mercury.',
        palette: ['#2c3e50', '#f1c40f'],
        tracks: [
          { title: 'Bohemian Rhapsody', durationSec: 355, isHit: true },
          { title: "You're My Best Friend", durationSec: 172, isHit: true },
          { title: "Love of My Life", durationSec: 219 },
          { title: "Death on Two Legs", durationSec: 223 },
        ],
      },
      {
        slug: 'the-game',
        title: 'The Game',
        year: 1980,
        tagline: 'La svolta verso funk e rockabilly',
        history:
          'Primo album della band a usare il sintetizzatore, mescola rockabilly e funk regalando due dei loro maggiori successi statunitensi.',
        palette: ['#1a1a1a', '#e74c3c'],
        tracks: [
          { title: 'Another One Bites the Dust', durationSec: 215, isHit: true },
          { title: 'Crazy Little Thing Called Love', durationSec: 163, isHit: true },
          { title: 'Play the Game', durationSec: 210 },
        ],
      },
    ],
  },
  {
    slug: 'ac-dc',
    name: 'AC/DC',
    formedYear: 1973,
    origin: 'Sydney, Australia',
    genres: ['Hard rock', 'Rock and roll'],
    members: ['Angus Young', 'Malcolm Young', 'Brian Johnson', 'Phil Rudd'],
    palette: ['#0a0a0a', '#f1c40f'],
    history:
      'Fondati dai fratelli Angus e Malcolm Young, gli AC/DC costruiscono la loro identità su riff essenziali, energia dal vivo e un rock and roll senza fronzoli. La morte improvvisa del cantante Bon Scott nel 1980 avrebbe potuto segnare la fine del gruppo, ma l\'arrivo di Brian Johnson porta l\'album successivo, "Back in Black", a diventare uno dei dischi più venduti di tutti i tempi.',
    albums: [
      {
        slug: 'highway-to-hell',
        title: 'Highway to Hell',
        year: 1979,
        tagline: "L'ultimo disco con Bon Scott",
        history:
          'Prodotto da Robert John "Mutt" Lange, segna la consacrazione internazionale della band e resta l\'ultimo album inciso con Bon Scott alla voce prima della sua scomparsa.',
        palette: ['#0a0a0a', '#e74c3c'],
        tracks: [
          { title: 'Highway to Hell', durationSec: 208, isHit: true },
          { title: 'Girls Got Rhythm', durationSec: 213 },
          { title: "Touch Too Much", durationSec: 264 },
        ],
      },
      {
        slug: 'back-in-black',
        title: 'Back in Black',
        year: 1980,
        tagline: 'Il tributo che diventa uno dei dischi più venduti al mondo',
        history:
          'Scritto in memoria di Bon Scott con il nuovo cantante Brian Johnson, diventa un fenomeno commerciale mondiale e conferma il gruppo tra i giganti dell\'hard rock.',
        palette: ['#0a0a0a', '#f1c40f'],
        tracks: [
          { title: 'Hells Bells', durationSec: 312, isHit: true },
          { title: 'Back in Black', durationSec: 255, isHit: true },
          { title: "You Shook Me All Night Long", durationSec: 210, isHit: true },
        ],
      },
    ],
  },
  {
    slug: 'nirvana',
    name: 'Nirvana',
    formedYear: 1987,
    disbandedYear: 1994,
    origin: 'Aberdeen, Washington, USA',
    genres: ['Grunge', 'Alternative rock', 'Punk rock'],
    members: ['Kurt Cobain', 'Krist Novoselic', 'Dave Grohl'],
    palette: ['#1a1a1a', '#7f8c8d'],
    history:
      'Nati nella scena underground di Seattle, i Nirvana portano il grunge dalle etichette indipendenti alla ribalta mondiale in appena un paio d\'anni. Con la voce sofferta e i testi introspettivi di Kurt Cobain, il gruppo diventa portavoce involontario di una generazione, prima che la morte di Cobain nel 1994 ponga fine bruscamente a una delle carriere più influenti del rock alternativo.',
    albums: [
      {
        slug: 'nevermind',
        title: 'Nevermind',
        year: 1991,
        tagline: 'Il disco che porta il grunge nel mainstream',
        history:
          'Con la produzione di Butch Vig, "Nevermind" scala le classifiche mondiali trainato da "Smells Like Teen Spirit" e cambia per sempre il panorama del rock dei primi anni Novanta.',
        palette: ['#3498db', '#1a1a1a'],
        tracks: [
          { title: 'Smells Like Teen Spirit', durationSec: 301, isHit: true },
          { title: 'Come as You Are', durationSec: 219, isHit: true },
          { title: 'Lithium', durationSec: 257, isHit: true },
          { title: 'In Bloom', durationSec: 254 },
        ],
      },
      {
        slug: 'in-utero',
        title: 'In Utero',
        year: 1993,
        tagline: 'Il ritorno alle radici più ruvide',
        history:
          'Prodotto con Steve Albini per allontanarsi dal suono levigato di "Nevermind", propone un sound più grezzo e diretto, specchio delle tensioni personali di Cobain.',
        palette: ['#2c3e50', '#c0392b'],
        tracks: [
          { title: 'Heart-Shaped Box', durationSec: 281, isHit: true },
          { title: 'All Apologies', durationSec: 231, isHit: true },
          { title: 'Rape Me', durationSec: 168 },
        ],
      },
    ],
  },
  {
    slug: 'metallica',
    name: 'Metallica',
    formedYear: 1981,
    origin: 'Los Angeles, California, USA',
    genres: ['Thrash metal', 'Heavy metal'],
    members: ['James Hetfield', 'Lars Ulrich', 'Kirk Hammett', 'Robert Trujillo'],
    palette: ['#0a0a0a', '#95a5a6'],
    history:
      'Fondati da James Hetfield e Lars Ulrich, i Metallica diventano il punto di riferimento del thrash metal insieme a Megadeth, Slayer e Anthrax. Dopo la tragica morte del bassista Cliff Burton nel 1986, la band continua a crescere fino a raggiungere il grande pubblico con l\'album omonimo del 1991, senza mai abbandonare del tutto le radici più estreme.',
    albums: [
      {
        slug: 'master-of-puppets',
        title: 'Master of Puppets',
        year: 1986,
        tagline: 'Il capolavoro del thrash metal',
        history:
          'Ultimo album registrato con il bassista Cliff Burton, è considerato uno dei dischi più importanti del thrash metal per complessità compositiva e intensità.',
        palette: ['#1a1a1a', '#7f8c8d'],
        tracks: [
          { title: 'Battery', durationSec: 312, isHit: true },
          { title: 'Master of Puppets', durationSec: 515, isHit: true },
          { title: 'Welcome Home (Sanitarium)', durationSec: 386 },
        ],
      },
      {
        slug: 'metallica-black-album',
        title: 'Metallica (The Black Album)',
        year: 1991,
        tagline: 'Il salto verso il grande pubblico',
        history:
          'Con la produzione di Bob Rock, il gruppo semplifica gli arrangiamenti senza perdere intensità, diventando una delle band metal più vendute della storia.',
        palette: ['#0a0a0a', '#0a0a0a'],
        tracks: [
          { title: 'Enter Sandman', durationSec: 331, isHit: true },
          { title: 'Nothing Else Matters', durationSec: 388, isHit: true },
          { title: 'Sad but True', durationSec: 324 },
        ],
      },
    ],
  },
  {
    slug: 'radiohead',
    name: 'Radiohead',
    formedYear: 1985,
    origin: 'Abingdon, Inghilterra',
    genres: ['Alternative rock', 'Art rock', 'Electronic'],
    members: ['Thom Yorke', 'Jonny Greenwood', 'Colin Greenwood', 'Ed O\'Brien', 'Philip Selway'],
    palette: ['#1a1a2e', '#00b894'],
    history:
      'Da band alternative rock guitar-oriented con il successo di "Creep", i Radiohead si reinventano album dopo album, abbracciando elettronica, jazz e sperimentazione sonora. Con "OK Computer" e "Kid A" ridefiniscono cosa possa essere un disco rock alle soglie del nuovo millennio, influenzando profondamente la musica alternativa dei decenni successivi.',
    albums: [
      {
        slug: 'ok-computer',
        title: 'OK Computer',
        year: 1997,
        tagline: 'Il rock si confronta con l\'alienazione digitale',
        history:
          'Concept sull\'ansia da modernità e alienazione tecnologica, è considerato uno degli album più influenti degli anni Novanta per atmosfere e struttura non convenzionale.',
        palette: ['#1a1a2e', '#00b894'],
        tracks: [
          { title: 'Paranoid Android', durationSec: 383, isHit: true },
          { title: 'Karma Police', durationSec: 261, isHit: true },
          { title: 'No Surprises', durationSec: 229, isHit: true },
        ],
      },
      {
        slug: 'kid-a',
        title: 'Kid A',
        year: 2000,
        tagline: 'Il rock incontra l\'elettronica',
        history:
          'Abbandonando quasi del tutto le chitarre tradizionali, l\'album abbraccia synth ed elettronica sperimentale, dividendo la critica al momento dell\'uscita e diventando poi un punto di riferimento.',
        palette: ['#2c3e50', '#e74c3c'],
        tracks: [
          { title: 'Everything in Its Right Place', durationSec: 251 },
          { title: 'Idioteque', durationSec: 320, isHit: true },
          { title: 'How to Disappear Completely', durationSec: 340 },
        ],
      },
    ],
  },
  {
    slug: 'foo-fighters',
    name: 'Foo Fighters',
    formedYear: 1994,
    origin: 'Seattle, Washington, USA',
    genres: ['Alternative rock', 'Hard rock', 'Post-grunge'],
    members: ['Dave Grohl', 'Nate Mendel', 'Pat Smear', 'Chris Shiflett', 'Rami Jaffee'],
    palette: ['#c0392b', '#1a1a1a'],
    history:
      'Nati come progetto solista di Dave Grohl dopo lo scioglimento dei Nirvana, i Foo Fighters diventano rapidamente una delle rock band più popolari e longeve dal vivo, capaci di riempire gli stadi di tutto il mondo per oltre venticinque anni con un sound che unisce melodia pop ed energia hard rock.',
    albums: [
      {
        slug: 'the-colour-and-the-shape',
        title: 'The Colour and the Shape',
        year: 1997,
        tagline: 'Il disco che consacra la band',
        history:
          'Secondo album e primo concepito come vera band, contiene alcuni dei brani più iconici del gruppo ed è il punto di svolta rispetto all\'esordio solista di Grohl.',
        palette: ['#c0392b', '#1a1a1a'],
        tracks: [
          { title: 'Everlong', durationSec: 250, isHit: true },
          { title: 'My Hero', durationSec: 260, isHit: true },
          { title: 'Monkey Wrench', durationSec: 231, isHit: true },
        ],
      },
      {
        slug: 'echoes-silence-patience-and-grace',
        title: 'Echoes, Silence, Patience & Grace',
        year: 2007,
        tagline: 'Grammy per il miglior album rock',
        history:
          'Alterna brani acustici e momenti hard rock, valendo alla band il Grammy Award per il miglior album rock e confermandone la maturità compositiva.',
        palette: ['#2c3e50', '#c0392b'],
        tracks: [
          { title: 'The Pretender', durationSec: 269, isHit: true },
          { title: 'Long Road to Ruin', durationSec: 232, isHit: true },
          { title: 'Statues', durationSec: 244 },
        ],
      },
    ],
  },
]

export const bands: Band[] = [...coreBands, ...moreBands]

export function getBandBySlug(slug: string): Band | undefined {
  return bands.find((b) => b.slug === slug)
}

export function getAlbum(bandSlug: string, albumSlug: string) {
  const band = getBandBySlug(bandSlug)
  const album = band?.albums.find((a) => a.slug === albumSlug)
  return { band, album }
}
