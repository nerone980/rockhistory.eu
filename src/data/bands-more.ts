import type { Band } from '../types'

export const moreBands: Band[] = [
  // ---------- Anni '60 ----------
  {
    slug: 'the-who',
    name: 'The Who',
    formedYear: 1964,
    origin: 'Londra, Inghilterra',
    genres: ['Rock', 'Hard rock', 'Rock opera'],
    members: ['Roger Daltrey', 'Pete Townshend', 'John Entwistle', 'Keith Moon'],
    palette: ['#1a1a2e', '#e74c3c'],
    history:
      'Pionieri del rock opera con "Tommy" e "Quadrophenia", famosi per gli show dal vivo esplosivi e la chitarra distrutta a fine concerto da Pete Townshend.',
    albums: [
      {
        slug: 'whos-next',
        title: "Who's Next",
        year: 1971,
        tagline: 'Sintetizzatori e power chord',
        history: "Nato dalle ceneri del progetto Lifehouse, è considerato uno dei picchi creativi della band.",
        palette: ['#2c3e50', '#e74c3c'],
        tracks: [
          { title: 'Baba O\'Riley', durationSec: 300, isHit: true },
          { title: 'Won\'t Get Fooled Again', durationSec: 511, isHit: true },
          { title: 'Behind Blue Eyes', durationSec: 222, isHit: true },
        ],
      },
    ],
  },
  {
    slug: 'the-doors',
    name: 'The Doors',
    formedYear: 1965,
    disbandedYear: 1973,
    origin: 'Los Angeles, California, USA',
    genres: ['Rock psichedelico', 'Blues rock'],
    members: ['Jim Morrison', 'Ray Manzarek', 'Robby Krieger', 'John Densmore'],
    palette: ['#1a1a1a', '#8e44ad'],
    history:
      'Guidati dal carisma sciamanico di Jim Morrison, mescolano poesia, blues e psichedelia. La morte di Morrison nel 1973 chiude prematuramente una delle carriere più mitizzate del rock.',
    albums: [
      {
        slug: 'the-doors-album',
        title: 'The Doors',
        year: 1967,
        tagline: "L'esordio che consacra Morrison come icona",
        history: 'Contiene il lungo brano "The End" e segna l\'inizio della loro breve ma intensa carriera.',
        palette: ['#1a1a1a', '#c0392b'],
        tracks: [
          { title: 'Light My Fire', durationSec: 427, isHit: true },
          { title: 'Break On Through', durationSec: 145, isHit: true },
          { title: 'The End', durationSec: 690 },
        ],
      },
    ],
  },
  {
    slug: 'jimi-hendrix-experience',
    name: 'The Jimi Hendrix Experience',
    formedYear: 1966,
    disbandedYear: 1969,
    origin: 'Londra, Inghilterra',
    genres: ['Rock psichedelico', 'Blues rock', 'Hard rock'],
    members: ['Jimi Hendrix', 'Noel Redding', 'Mitch Mitchell'],
    palette: ['#8e44ad', '#e67e22'],
    history:
      'Con Jimi Hendrix alla chitarra, ridefinisce cosa sia possibile fare con uno strumento elettrico, tra feedback, distorsione e virtuosismo assoluto, prima della sua morte nel 1970.',
    albums: [
      {
        slug: 'are-you-experienced',
        title: 'Are You Experienced',
        year: 1967,
        tagline: 'La rivoluzione della chitarra elettrica',
        history: 'Album d\'esordio che sconvolge il panorama rock con un uso radicale di distorsione e feedback.',
        palette: ['#8e44ad', '#f39c12'],
        tracks: [
          { title: 'Purple Haze', durationSec: 170, isHit: true },
          { title: 'Hey Joe', durationSec: 210, isHit: true },
          { title: 'Foxy Lady', durationSec: 200 },
        ],
      },
    ],
  },
  {
    slug: 'the-beach-boys',
    name: 'The Beach Boys',
    formedYear: 1961,
    origin: 'Hawthorne, California, USA',
    genres: ['Pop rock', 'Rock psichedelico', 'Surf rock'],
    members: ['Brian Wilson', 'Mike Love', 'Al Jardine', 'Carl Wilson', 'Dennis Wilson'],
    palette: ['#3498db', '#f1c40f'],
    history:
      'Nati cantando il mito californiano del surf, sotto la guida compositiva di Brian Wilson raggiungono vertici di sofisticazione pop con "Pet Sounds", influenzando profondamente i Beatles stessi.',
    albums: [
      {
        slug: 'pet-sounds',
        title: 'Pet Sounds',
        year: 1966,
        tagline: 'Il capolavoro sinfonico del pop',
        history: 'Arrangiamenti orchestrali innovativi e armonie vocali complesse ne fanno un punto di riferimento assoluto della produzione pop.',
        palette: ['#3498db', '#ecf0f1'],
        tracks: [
          { title: 'Wouldn\'t It Be Nice', durationSec: 156, isHit: true },
          { title: 'God Only Knows', durationSec: 172, isHit: true },
          { title: 'Sloop John B', durationSec: 189, isHit: true },
        ],
      },
    ],
  },
  {
    slug: 'creedence-clearwater-revival',
    name: 'Creedence Clearwater Revival',
    formedYear: 1967,
    disbandedYear: 1972,
    origin: 'El Cerrito, California, USA',
    genres: ['Roots rock', 'Blues rock', 'Southern rock'],
    members: ['John Fogerty', 'Tom Fogerty', 'Stu Cook', 'Doug Clifford'],
    palette: ['#7f8c8d', '#27ae60'],
    history:
      'Con un sound roots ispirato al Sud degli Stati Uniti, pur venendo dalla California, diventano una delle band più prolifiche di fine anni Sessanta prima di sciogliersi nel 1972.',
    albums: [
      {
        slug: 'cosmos-factory',
        title: "Cosmo's Factory",
        year: 1970,
        tagline: 'Il picco commerciale della band',
        history: 'Contiene diversi singoli di grande successo e mostra la versatilità stilistica del gruppo.',
        palette: ['#7f8c8d', '#27ae60'],
        tracks: [
          { title: 'Travelin\' Band', durationSec: 129, isHit: true },
          { title: 'Up Around the Bend', durationSec: 160, isHit: true },
          { title: 'Who\'ll Stop the Rain', durationSec: 148, isHit: true },
        ],
      },
    ],
  },
  {
    slug: 'the-kinks',
    name: 'The Kinks',
    formedYear: 1963,
    origin: 'Londra, Inghilterra',
    genres: ['Rock', 'Rock and roll', 'Britpop'],
    members: ['Ray Davies', 'Dave Davies', 'Mick Avory'],
    palette: ['#c0392b', '#2c3e50'],
    history:
      'Precursori dell\'hard rock con il riff distorto di "You Really Got Me", si distinguono poi per la scrittura satirica e osservativa di Ray Davies sulla società inglese.',
    albums: [
      {
        slug: 'kinks-are-the-village-green',
        title: 'The Kinks Are the Village Green Preservation Society',
        year: 1968,
        tagline: 'Un ritratto nostalgico della provincia inglese',
        history: 'Concept album sulla nostalgia per una Inghilterra rurale in via di scomparsa, oggi considerato un capolavoro sottovalutato.',
        palette: ['#c0392b', '#27ae60'],
        tracks: [
          { title: 'Waterloo Sunset', durationSec: 200, isHit: true },
          { title: 'Village Green', durationSec: 159 },
          { title: 'Picture Book', durationSec: 158 },
        ],
      },
    ],
  },
  {
    slug: 'cream',
    name: 'Cream',
    formedYear: 1966,
    disbandedYear: 1968,
    origin: 'Londra, Inghilterra',
    genres: ['Blues rock', 'Hard rock', 'Rock psichedelico'],
    members: ['Eric Clapton', 'Jack Bruce', 'Ginger Baker'],
    palette: ['#8e44ad', '#2c3e50'],
    history:
      'Considerato il primo supergruppo rock, unisce il virtuosismo chitarristico di Eric Clapton alla sezione ritmica di Bruce e Baker, ponendo le basi dell\'hard rock in appena due anni di attività.',
    albums: [
      {
        slug: 'disraeli-gears',
        title: 'Disraeli Gears',
        year: 1967,
        tagline: 'Psichedelia e blues elettrico',
        history: 'Con la celebre copertina psichedelica, contiene "Sunshine of Your Love", tra i riff più iconici del rock.',
        palette: ['#8e44ad', '#e67e22'],
        tracks: [
          { title: 'Sunshine of Your Love', durationSec: 246, isHit: true },
          { title: 'Strange Brew', durationSec: 172, isHit: true },
        ],
      },
    ],
  },
  {
    slug: 'the-velvet-underground',
    name: 'The Velvet Underground',
    formedYear: 1964,
    disbandedYear: 1973,
    origin: 'New York City, New York, USA',
    genres: ['Rock sperimentale', 'Proto-punk', 'Art rock'],
    members: ['Lou Reed', 'John Cale', 'Sterling Morrison', 'Maureen Tucker'],
    palette: ['#1a1a1a', '#f1c40f'],
    history:
      'Nonostante vendite modeste, la loro fusione di rock, avanguardia e testi crudi su New York (con il sostegno di Andy Warhol) influenza generazioni di musicisti punk e alternative.',
    albums: [
      {
        slug: 'velvet-underground-and-nico',
        title: 'The Velvet Underground & Nico',
        year: 1967,
        tagline: 'La copertina della banana di Andy Warhol',
        history: 'Prodotto da Andy Warhol con la cantante Nico ospite, è oggi considerato tra gli album più influenti della storia del rock.',
        palette: ['#f1c40f', '#1a1a1a'],
        tracks: [
          { title: 'Sunday Morning', durationSec: 167, isHit: true },
          { title: 'Heroin', durationSec: 447 },
          { title: 'I\'m Waiting for the Man', durationSec: 258 },
        ],
      },
    ],
  },

  // ---------- Anni '70 ----------
  {
    slug: 'deep-purple',
    name: 'Deep Purple',
    formedYear: 1968,
    origin: 'Hertford, Inghilterra',
    genres: ['Hard rock', 'Heavy metal'],
    members: ['Ian Gillan', 'Ritchie Blackmore', 'Jon Lord', 'Roger Glover', 'Ian Paice'],
    palette: ['#2c3e50', '#8e44ad'],
    history:
      'Tra i padri fondatori dell\'hard rock insieme a Led Zeppelin e Black Sabbath, celebri per il riff di "Smoke on the Water" e per il volume assordante dei loro concerti.',
    albums: [
      {
        slug: 'machine-head',
        title: 'Machine Head',
        year: 1972,
        tagline: 'Il riff più famoso della storia del rock',
        history: 'Registrato a Montreux, racconta nel testo di "Smoke on the Water" l\'incendio del casinò che ne ispirò la scrittura.',
        palette: ['#2c3e50', '#8e44ad'],
        tracks: [
          { title: 'Smoke on the Water', durationSec: 340, isHit: true },
          { title: 'Highway Star', durationSec: 368, isHit: true },
          { title: 'Space Truckin\'', durationSec: 257 },
        ],
      },
    ],
  },
  {
    slug: 'black-sabbath',
    name: 'Black Sabbath',
    formedYear: 1968,
    origin: 'Birmingham, Inghilterra',
    genres: ['Heavy metal', 'Doom metal', 'Hard rock'],
    members: ['Ozzy Osbourne', 'Tony Iommi', 'Geezer Butler', 'Bill Ward'],
    palette: ['#0a0a0a', '#7f0000'],
    history:
      'Considerati gli inventori dell\'heavy metal, con riff pesanti e cupi ispirati al mondo operaio di Birmingham e a un immaginario horror/occulto mai visto prima nel rock.',
    albums: [
      {
        slug: 'paranoid',
        title: 'Paranoid',
        year: 1970,
        tagline: 'La nascita del metal',
        history: 'Secondo album della band, definisce il suono e l\'estetica dell\'heavy metal per i decenni successivi.',
        palette: ['#0a0a0a', '#7f0000'],
        tracks: [
          { title: 'Paranoid', durationSec: 170, isHit: true },
          { title: 'Iron Man', durationSec: 358, isHit: true },
          { title: 'War Pigs', durationSec: 479, isHit: true },
        ],
      },
    ],
  },
  {
    slug: 'aerosmith',
    name: 'Aerosmith',
    formedYear: 1970,
    origin: 'Boston, Massachusetts, USA',
    genres: ['Hard rock', 'Blues rock'],
    members: ['Steven Tyler', 'Joe Perry', 'Tom Hamilton', 'Joey Kramer', 'Brad Whitford'],
    palette: ['#c0392b', '#1a1a1a'],
    history:
      'Soprannominati "the Bad Boys from Boston", diventano una delle rock band americane più longeve, capaci di rilanciarsi commercialmente più volte nel corso di cinque decenni.',
    albums: [
      {
        slug: 'toys-in-the-attic',
        title: 'Toys in the Attic',
        year: 1975,
        tagline: 'Il disco che li consacra',
        history: 'Contiene alcuni dei loro brani più celebri e segna il picco della loro fase classica anni Settanta.',
        palette: ['#c0392b', '#1a1a1a'],
        tracks: [
          { title: 'Walk This Way', durationSec: 325, isHit: true },
          { title: 'Sweet Emotion', durationSec: 274, isHit: true },
        ],
      },
    ],
  },
  {
    slug: 'lynyrd-skynyrd',
    name: 'Lynyrd Skynyrd',
    formedYear: 1964,
    origin: 'Jacksonville, Florida, USA',
    genres: ['Southern rock', 'Hard rock'],
    members: ['Ronnie Van Zant', 'Gary Rossington', 'Allen Collins'],
    palette: ['#8b6b3d', '#c0392b'],
    history:
      'Simbolo del southern rock, la band viene colpita da una tragedia nel 1977 quando un incidente aereo uccide il cantante Ronnie Van Zant e altri membri, poco dopo l\'apice del successo.',
    albums: [
      {
        slug: 'second-helping',
        title: 'Second Helping',
        year: 1974,
        tagline: 'Il simbolo del rock del Sud',
        history: 'Contiene "Sweet Home Alabama", risposta alle critiche di Neil Young al Sud degli Stati Uniti, diventata inno southern rock.',
        palette: ['#8b6b3d', '#c0392b'],
        tracks: [
          { title: 'Sweet Home Alabama', durationSec: 283, isHit: true },
          { title: 'Don\'t Ask Me No Questions', durationSec: 224 },
        ],
      },
    ],
  },
  {
    slug: 'eagles',
    name: 'Eagles',
    formedYear: 1971,
    origin: 'Los Angeles, California, USA',
    genres: ['Rock', 'Country rock'],
    members: ['Don Henley', 'Glenn Frey', 'Joe Walsh', 'Timothy B. Schmit'],
    palette: ['#e67e22', '#2c3e50'],
    history:
      'Fondono country e rock californiano in un sound levigato che li rende una delle band più vendute di sempre, nonostante tensioni interne che portarono a uno scioglimento durato 14 anni.',
    albums: [
      {
        slug: 'hotel-california',
        title: 'Hotel California',
        year: 1976,
        tagline: 'Il sogno californiano diventa disillusione',
        history: 'Concept sulla facciata scintillante e il lato oscuro del sogno americano, con uno dei soli di chitarra più celebri della storia.',
        palette: ['#e67e22', '#2c3e50'],
        tracks: [
          { title: 'Hotel California', durationSec: 391, isHit: true },
          { title: 'New Kid in Town', durationSec: 302, isHit: true },
          { title: 'Life in the Fast Lane', durationSec: 286 },
        ],
      },
    ],
  },
  {
    slug: 'fleetwood-mac',
    name: 'Fleetwood Mac',
    formedYear: 1967,
    origin: 'Londra, Inghilterra',
    genres: ['Rock', 'Pop rock', 'Blues rock'],
    members: ['Mick Fleetwood', 'John McVie', 'Christine McVie', 'Lindsey Buckingham', 'Stevie Nicks'],
    palette: ['#2c3e50', '#95a5a6'],
    history:
      'Nati come blues band britannica, si trasformano radicalmente con l\'arrivo di Buckingham e Nicks in una delle formazioni pop-rock più celebri, trasformando le proprie crisi sentimentali interne in materiale artistico.',
    albums: [
      {
        slug: 'rumours',
        title: 'Rumours',
        year: 1977,
        tagline: 'Le crisi sentimentali diventano un capolavoro pop',
        history: 'Scritto durante rotture di coppia interne alla band, è uno degli album più venduti di sempre per la qualità delle canzoni.',
        palette: ['#2c3e50', '#f1c40f'],
        tracks: [
          { title: 'Go Your Own Way', durationSec: 219, isHit: true },
          { title: 'Dreams', durationSec: 257, isHit: true },
          { title: 'The Chain', durationSec: 271 },
        ],
      },
    ],
  },
  {
    slug: 'genesis',
    name: 'Genesis',
    formedYear: 1967,
    origin: 'Godalming, Inghilterra',
    genres: ['Rock progressivo', 'Pop rock'],
    members: ['Phil Collins', 'Mike Rutherford', 'Tony Banks', 'Peter Gabriel'],
    palette: ['#2c3e50', '#e67e22'],
    history:
      'Dopo l\'uscita di Peter Gabriel nel 1975, passano da un progressive rock teatrale e concettuale a un pop-rock di grande successo commerciale con Phil Collins alla voce.',
    albums: [
      {
        slug: 'selling-england-by-the-pound',
        title: 'Selling England by the Pound',
        year: 1973,
        tagline: 'Il capolavoro progressive con Peter Gabriel',
        history: 'Considerato l\'apice della fase progressive della band, ricco di suite elaborate e testi allegorici sulla società inglese.',
        palette: ['#2c3e50', '#27ae60'],
        tracks: [
          { title: 'Dancing with the Moonlit Knight', durationSec: 483 },
          { title: 'Firth of Fifth', durationSec: 573, isHit: true },
        ],
      },
    ],
  },
  {
    slug: 'yes',
    name: 'Yes',
    formedYear: 1968,
    origin: 'Londra, Inghilterra',
    genres: ['Rock progressivo'],
    members: ['Jon Anderson', 'Steve Howe', 'Chris Squire', 'Rick Wakeman', 'Alan White'],
    palette: ['#16a085', '#2c3e50'],
    history:
      'Tra le band simbolo del rock progressivo, celebri per composizioni lunghe e complesse, virtuosismo strumentale e la grafica psichedelica delle copertine firmate Roger Dean.',
    albums: [
      {
        slug: 'close-to-the-edge',
        title: 'Close to the Edge',
        year: 1972,
        tagline: 'Il vertice compositivo del progressive',
        history: 'Composto da sole tre lunghe suite, è considerato uno dei dischi più ambiziosi del genere.',
        palette: ['#16a085', '#2c3e50'],
        tracks: [
          { title: 'Close to the Edge', durationSec: 1124, isHit: true },
          { title: 'And You and I', durationSec: 634 },
        ],
      },
    ],
  },
  {
    slug: 'rush',
    name: 'Rush',
    formedYear: 1968,
    disbandedYear: 2018,
    origin: 'Toronto, Canada',
    genres: ['Rock progressivo', 'Hard rock'],
    members: ['Geddy Lee', 'Alex Lifeson', 'Neil Peart'],
    palette: ['#1a1a1a', '#c0392b'],
    history:
      'Trio canadese noto per il virtuosismo tecnico e i testi filosofici di Neil Peart, capaci di fondere progressive rock e hard rock in un sound identificabile in pochissime note.',
    albums: [
      {
        slug: 'moving-pictures',
        title: 'Moving Pictures',
        year: 1981,
        tagline: 'Il loro album più celebre',
        history: 'Bilancia complessità progressive e immediatezza pop, diventando il loro maggior successo commerciale.',
        palette: ['#1a1a1a', '#c0392b'],
        tracks: [
          { title: 'Tom Sawyer', durationSec: 276, isHit: true },
          { title: 'Limelight', durationSec: 259, isHit: true },
        ],
      },
    ],
  },
  {
    slug: 'kiss',
    name: 'Kiss',
    formedYear: 1973,
    origin: 'New York City, New York, USA',
    genres: ['Hard rock', 'Glam rock'],
    members: ['Gene Simmons', 'Paul Stanley', 'Ace Frehley', 'Peter Criss'],
    palette: ['#0a0a0a', '#e74c3c'],
    history:
      'Con il trucco a maschera e uno show scenico teatrale fatto di fuoco e sangue finto, i Kiss costruiscono un brand tanto quanto una band, diventando un fenomeno di marketing oltre che musicale.',
    albums: [
      {
        slug: 'destroyer',
        title: 'Destroyer',
        year: 1976,
        tagline: 'Lo show diventa disco',
        history: 'Con una produzione più ambiziosa del solito, consolida la loro fama internazionale.',
        palette: ['#0a0a0a', '#e74c3c'],
        tracks: [
          { title: 'Detroit Rock City', durationSec: 279, isHit: true },
          { title: 'Beth', durationSec: 173, isHit: true },
        ],
      },
    ],
  },
  {
    slug: 'alice-cooper',
    name: 'Alice Cooper',
    formedYear: 1964,
    origin: 'Phoenix, Arizona, USA',
    genres: ['Hard rock', 'Shock rock'],
    members: ['Alice Cooper', 'Michael Bruce', 'Dennis Dunaway'],
    palette: ['#1a1a1a', '#95a5a6'],
    history:
      'Pioniere dello shock rock, con trucco horror e spettacoli teatrali macabri (ghigliottine, serpenti), influenza profondamente l\'estetica del rock e metal successivo.',
    albums: [
      {
        slug: 'billion-dollar-babies',
        title: 'Billion Dollar Babies',
        year: 1973,
        tagline: 'Il picco dello shock rock',
        history: 'Il loro album di maggior successo commerciale, consolida l\'estetica horror-glam del gruppo.',
        palette: ['#1a1a1a', '#95a5a6'],
        tracks: [
          { title: "School's Out", durationSec: 197, isHit: true },
          { title: 'No More Mr. Nice Guy', durationSec: 174, isHit: true },
        ],
      },
    ],
  },
  {
    slug: 'ramones',
    name: 'Ramones',
    formedYear: 1974,
    disbandedYear: 1996,
    origin: 'New York City, New York, USA',
    genres: ['Punk rock'],
    members: ['Joey Ramone', 'Johnny Ramone', 'Dee Dee Ramone', 'Tommy Ramone'],
    palette: ['#1a1a1a', '#c0392b'],
    history:
      'Con canzoni brevi, veloci ed essenziali, i Ramones inventano di fatto il punk rock moderno, influenzando innumerevoli band successive nonostante un successo commerciale sempre limitato in vita.',
    albums: [
      {
        slug: 'ramones-album',
        title: 'Ramones',
        year: 1976,
        tagline: "L'album che inventa il punk",
        history: 'Registrato in pochi giorni con un budget minimo, ridefinisce cosa possa essere un disco rock: veloce, diretto, senza fronzoli.',
        palette: ['#1a1a1a', '#c0392b'],
        tracks: [
          { title: 'Blitzkrieg Bop', durationSec: 132, isHit: true },
          { title: 'Judy Is a Punk', durationSec: 92 },
        ],
      },
    ],
  },
  {
    slug: 'sex-pistols',
    name: 'Sex Pistols',
    formedYear: 1975,
    disbandedYear: 1978,
    origin: 'Londra, Inghilterra',
    genres: ['Punk rock'],
    members: ['Johnny Rotten', 'Steve Jones', 'Glen Matlock', 'Sid Vicious', 'Paul Cook'],
    palette: ['#f1c40f', '#1a1a1a'],
    history:
      'Simbolo della rivolta punk britannica, dura appena tre anni ma scatena uno scandalo mediatico enorme e ridefinisce il rapporto tra musica, provocazione e classe sociale.',
    albums: [
      {
        slug: 'never-mind-the-bollocks',
        title: "Never Mind the Bollocks, Here's the Sex Pistols",
        year: 1977,
        tagline: 'Il manifesto del punk britannico',
        history: 'Unico album in studio della formazione originale, diventa il disco simbolo dell\'intero movimento punk.',
        palette: ['#f1c40f', '#1a1a1a'],
        tracks: [
          { title: 'Anarchy in the U.K.', durationSec: 213, isHit: true },
          { title: 'God Save the Queen', durationSec: 200, isHit: true },
        ],
      },
    ],
  },
  {
    slug: 'the-clash',
    name: 'The Clash',
    formedYear: 1976,
    disbandedYear: 1986,
    origin: 'Londra, Inghilterra',
    genres: ['Punk rock', 'Rock alternativo'],
    members: ['Joe Strummer', 'Mick Jones', 'Paul Simonon', 'Topper Headon'],
    palette: ['#1a1a1a', '#c0392b'],
    history:
      'Definiti "l\'unica band che conta" dalla critica, ampliano il punk includendo reggae, ska e rockabilly, con testi fortemente politici e impegnati.',
    albums: [
      {
        slug: 'london-calling',
        title: 'London Calling',
        year: 1979,
        tagline: 'Il punk si apre al mondo',
        history: 'Doppio album che fonde punk, reggae e rock and roll, spesso citato tra i migliori dischi di sempre.',
        palette: ['#1a1a1a', '#e74c3c'],
        tracks: [
          { title: 'London Calling', durationSec: 199, isHit: true },
          { title: 'Train in Vain', durationSec: 186, isHit: true },
        ],
      },
    ],
  },
  {
    slug: 'zz-top',
    name: 'ZZ Top',
    formedYear: 1969,
    origin: 'Houston, Texas, USA',
    genres: ['Blues rock', 'Hard rock'],
    members: ['Billy Gibbons', 'Dusty Hill', 'Frank Beard'],
    palette: ['#8b6b3d', '#1a1a1a'],
    history:
      'Trio texano dalle barbe lunghissime (tranne il batterista, ironicamente di cognome Beard), fondono blues rock ruvido e, negli anni Ottanta, synth-rock di grande successo MTV.',
    albums: [
      {
        slug: 'eliminator',
        title: 'Eliminator',
        year: 1983,
        tagline: 'Il blues incontra i synth',
        history: 'Mescola blues rock e sonorità sintetiche anni Ottanta, diventando il loro album più venduto grazie ai video su MTV.',
        palette: ['#8b6b3d', '#1a1a1a'],
        tracks: [
          { title: 'Legs', durationSec: 291, isHit: true },
          { title: 'Sharp Dressed Man', durationSec: 257, isHit: true },
        ],
      },
    ],
  },
  {
    slug: 'thin-lizzy',
    name: 'Thin Lizzy',
    formedYear: 1969,
    disbandedYear: 1983,
    origin: 'Dublino, Irlanda',
    genres: ['Hard rock'],
    members: ['Phil Lynott', 'Scott Gorham', 'Brian Downey'],
    palette: ['#2c3e50', '#27ae60'],
    history:
      'Guidati dal bassista e cantante Phil Lynott, portano l\'hard rock irlandese al successo internazionale con le celebri armonie a due chitarre.',
    albums: [
      {
        slug: 'jailbreak',
        title: 'Jailbreak',
        year: 1976,
        tagline: 'Il loro maggiore successo internazionale',
        history: 'Contiene "The Boys Are Back in Town", tra gli inni rock più suonati alla radio di sempre.',
        palette: ['#2c3e50', '#27ae60'],
        tracks: [
          { title: 'The Boys Are Back in Town', durationSec: 260, isHit: true },
          { title: 'Jailbreak', durationSec: 224 },
        ],
      },
    ],
  },

  {
    slug: 'talking-heads',
    name: 'Talking Heads',
    formedYear: 1975,
    disbandedYear: 1991,
    origin: 'New York City, New York, USA',
    genres: ['Art rock', 'New wave', 'Post-punk'],
    members: ['David Byrne', 'Tina Weymouth', 'Chris Frantz', 'Jerry Harrison'],
    palette: ['#1a1a1a', '#e67e22'],
    history:
      'Nati nella scena punk/new wave del CBGB newyorkese, sotto la guida artistica eccentrica di David Byrne fondono art rock, funk e world music in un sound intellettuale e imprevedibile.',
    albums: [
      {
        slug: 'remain-in-light',
        title: 'Remain in Light',
        year: 1980,
        tagline: 'Il rock incontra i poliritmi africani',
        history: 'Prodotto con Brian Eno, unisce funk, world music e sperimentazione, considerato uno dei loro dischi più influenti.',
        palette: ['#1a1a1a', '#e67e22'],
        tracks: [
          { title: 'Once in a Lifetime', durationSec: 258, isHit: true },
          { title: 'Born Under Punches', durationSec: 316 },
        ],
      },
    ],
  },

  // ---------- Anni '80 ----------
  {
    slug: 'iron-maiden',
    name: 'Iron Maiden',
    formedYear: 1975,
    origin: 'Londra, Inghilterra',
    genres: ['Heavy metal'],
    members: ['Bruce Dickinson', 'Steve Harris', 'Dave Murray', 'Adrian Smith', 'Nicko McBrain'],
    palette: ['#0a0a0a', '#e67e22'],
    history:
      'Guidati dal bassista Steve Harris e dalla voce operistica di Bruce Dickinson, diventano una delle band metal più influenti al mondo grazie a composizioni epiche e alla mascotte Eddie.',
    albums: [
      {
        slug: 'the-number-of-the-beast',
        title: 'The Number of the Beast',
        year: 1982,
        tagline: 'Il disco che consacra Bruce Dickinson',
        history: 'Primo album con Dickinson alla voce, definisce il sound epico e narrativo tipico della band.',
        palette: ['#0a0a0a', '#e67e22'],
        tracks: [
          { title: 'Run to the Hills', durationSec: 232, isHit: true },
          { title: 'The Number of the Beast', durationSec: 292, isHit: true },
        ],
      },
    ],
  },
  {
    slug: 'judas-priest',
    name: 'Judas Priest',
    formedYear: 1969,
    origin: 'Birmingham, Inghilterra',
    genres: ['Heavy metal'],
    members: ['Rob Halford', 'Glenn Tipton', 'K.K. Downing', 'Ian Hill'],
    palette: ['#1a1a1a', '#95a5a6'],
    history:
      'Con l\'estetica in pelle e borchie di Rob Halford, contribuiscono a definire l\'iconografia visiva dell\'heavy metal insieme al suono a doppia chitarra solista.',
    albums: [
      {
        slug: 'british-steel',
        title: 'British Steel',
        year: 1980,
        tagline: "L'acciaio britannico dell'heavy metal",
        history: 'Uno degli album fondamentali della New Wave of British Heavy Metal.',
        palette: ['#1a1a1a', '#95a5a6'],
        tracks: [
          { title: 'Breaking the Law', durationSec: 157, isHit: true },
          { title: 'Living After Midnight', durationSec: 202, isHit: true },
        ],
      },
    ],
  },
  {
    slug: 'guns-n-roses',
    name: "Guns N' Roses",
    formedYear: 1985,
    origin: 'Los Angeles, California, USA',
    genres: ['Hard rock', 'Glam metal'],
    members: ['Axl Rose', 'Slash', 'Duff McKagan', 'Izzy Stradlin'],
    palette: ['#1a1a1a', '#c0392b'],
    history:
      'Emersi dalla scena hair metal di Los Angeles con un\'attitudine più sporca e pericolosa, diventano rapidamente una delle rock band più grandi del mondo, tra eccessi e tensioni interne leggendarie.',
    albums: [
      {
        slug: 'appetite-for-destruction',
        title: 'Appetite for Destruction',
        year: 1987,
        tagline: 'Il debutto più venduto della storia USA',
        history: 'Album d\'esordio diventato uno dei più venduti di sempre negli Stati Uniti, grazie a "Sweet Child O\' Mine".',
        palette: ['#1a1a1a', '#c0392b'],
        tracks: [
          { title: "Sweet Child O' Mine", durationSec: 356, isHit: true },
          { title: 'Paradise City', durationSec: 407, isHit: true },
          { title: 'Welcome to the Jungle', durationSec: 273, isHit: true },
        ],
      },
    ],
  },
  {
    slug: 'bon-jovi',
    name: 'Bon Jovi',
    formedYear: 1983,
    origin: 'Sayreville, New Jersey, USA',
    genres: ['Hard rock', 'Glam metal', 'Arena rock'],
    members: ['Jon Bon Jovi', 'Richie Sambora', 'Tico Torres', 'David Bryan'],
    palette: ['#2c3e50', '#e74c3c'],
    history:
      'Simbolo dell\'arena rock anni Ottanta, uniscono melodie pop irresistibili a un\'immagine hard rock, diventando una delle band più vendute della decade.',
    albums: [
      {
        slug: 'slippery-when-wet',
        title: 'Slippery When Wet',
        year: 1986,
        tagline: 'Il picco commerciale della band',
        history: 'Trasforma Bon Jovi in fenomeno globale grazie a inni radiofonici come "Livin\' on a Prayer".',
        palette: ['#2c3e50', '#e74c3c'],
        tracks: [
          { title: "Livin' on a Prayer", durationSec: 249, isHit: true },
          { title: "You Give Love a Bad Name", durationSec: 224, isHit: true },
        ],
      },
    ],
  },
  {
    slug: 'def-leppard',
    name: 'Def Leppard',
    formedYear: 1977,
    origin: 'Sheffield, Inghilterra',
    genres: ['Hard rock', 'Glam metal'],
    members: ['Joe Elliott', 'Rick Savage', 'Phil Collen', 'Rick Allen'],
    palette: ['#1a1a1a', '#3498db'],
    history:
      'Nonostante la perdita di un braccio del batterista Rick Allen in un incidente d\'auto, la band prosegue e raggiunge il picco di popolarità con un sound hard rock levigato per la radio.',
    albums: [
      {
        slug: 'hysteria',
        title: 'Hysteria',
        year: 1987,
        tagline: 'Hard rock su misura per la radio',
        history: 'Produzione meticolosa durata anni, genera sette singoli di successo, un record per l\'epoca.',
        palette: ['#1a1a1a', '#3498db'],
        tracks: [
          { title: 'Pour Some Sugar on Me', durationSec: 268, isHit: true },
          { title: 'Love Bites', durationSec: 296, isHit: true },
        ],
      },
    ],
  },
  {
    slug: 'motorhead',
    name: 'Motörhead',
    formedYear: 1975,
    disbandedYear: 2015,
    origin: 'Londra, Inghilterra',
    genres: ['Heavy metal', 'Punk rock'],
    members: ['Lemmy Kilmister', "Fast\" Eddie Clarke", 'Phil "Philthy Animal" Taylor'],
    palette: ['#0a0a0a', '#c0392b'],
    history:
      'Guidati dal leggendario Lemmy, fondono la velocità del punk con la potenza dell\'heavy metal, definendo un suono talmente estremo da influenzare direttamente la nascita del thrash metal.',
    albums: [
      {
        slug: 'ace-of-spades',
        title: 'Ace of Spades',
        year: 1980,
        tagline: 'Il manifesto sonoro di Lemmy',
        history: 'La title track diventa uno degli inni metal più riconoscibili di sempre.',
        palette: ['#0a0a0a', '#c0392b'],
        tracks: [
          { title: 'Ace of Spades', durationSec: 168, isHit: true },
          { title: '(We Are) The Road Crew', durationSec: 187 },
        ],
      },
    ],
  },
  {
    slug: 'scorpions',
    name: 'Scorpions',
    formedYear: 1965,
    origin: 'Hannover, Germania',
    genres: ['Hard rock', 'Heavy metal'],
    members: ['Klaus Meine', 'Rudolf Schenker', 'Matthias Jabs'],
    palette: ['#1a1a1a', '#f1c40f'],
    history:
      'Band tedesca simbolo dell\'hard rock europeo, diventano celebri a livello mondiale negli anni Ottanta, con "Wind of Change" che diventa colonna sonora simbolica della caduta del Muro di Berlino.',
    albums: [
      {
        slug: 'love-at-first-sting',
        title: 'Love at First Sting',
        year: 1984,
        tagline: 'Il successo internazionale hard rock',
        history: 'Consolida la loro fama globale grazie a un sound hard rock diretto e melodico.',
        palette: ['#1a1a1a', '#f1c40f'],
        tracks: [
          { title: 'Rock You Like a Hurricane', durationSec: 251, isHit: true },
          { title: 'Still Loving You', durationSec: 396, isHit: true },
        ],
      },
    ],
  },
  {
    slug: 'dire-straits',
    name: 'Dire Straits',
    formedYear: 1977,
    disbandedYear: 1995,
    origin: 'Londra, Inghilterra',
    genres: ['Rock', 'Blues rock'],
    members: ['Mark Knopfler', 'David Knopfler', 'John Illsley', 'Pick Withers'],
    palette: ['#2c3e50', '#95a5a6'],
    history:
      'Guidati dal fingerpicking distintivo di Mark Knopfler, propongono un rock elegante e misurato, agli antipodi dell\'estetica punk coeva, ottenendo un successo planetario negli anni Ottanta.',
    albums: [
      {
        slug: 'brothers-in-arms',
        title: 'Brothers in Arms',
        year: 1985,
        tagline: 'Uno dei primi grandi successi in CD',
        history: 'Tra i primi album a vendere milioni di copie nel nuovo formato CD, grazie anche al video di "Money for Nothing".',
        palette: ['#2c3e50', '#95a5a6'],
        tracks: [
          { title: 'Money for Nothing', durationSec: 512, isHit: true },
          { title: 'Walk of Life', durationSec: 246, isHit: true },
        ],
      },
    ],
  },
  {
    slug: 'u2',
    name: 'U2',
    formedYear: 1976,
    origin: 'Dublino, Irlanda',
    genres: ['Rock', 'Post-punk', 'Arena rock'],
    members: ['Bono', 'The Edge', 'Adam Clayton', 'Larry Mullen Jr.'],
    palette: ['#1a1a1a', '#e74c3c'],
    history:
      'Da band post-punk irlandese a uno dei gruppi più grandi al mondo, uniscono un impegno sociale/politico dichiarato a uno dei suoni di chitarra (grazie a The Edge) più riconoscibili del rock moderno.',
    albums: [
      {
        slug: 'the-joshua-tree',
        title: 'The Joshua Tree',
        year: 1987,
        tagline: 'Lo sguardo irlandese sull\'America',
        history: 'Consacra la band a livello mondiale, esplorando mito e contraddizioni dell\'America attraverso un sound epico.',
        palette: ['#8b6b3d', '#1a1a1a'],
        tracks: [
          { title: "With or Without You", durationSec: 298, isHit: true },
          { title: "Where the Streets Have No Name", durationSec: 337, isHit: true },
        ],
      },
    ],
  },
  {
    slug: 'the-police',
    name: 'The Police',
    formedYear: 1977,
    disbandedYear: 1986,
    origin: 'Londra, Inghilterra',
    genres: ['Rock', 'Reggae rock', 'New wave'],
    members: ['Sting', 'Andy Summers', 'Stewart Copeland'],
    palette: ['#f1c40f', '#1a1a1a'],
    history:
      'Trio che fonde punk, reggae e jazz in un sound distintivo, diventando una delle band di maggior successo di fine anni Settanta/inizio Ottanta prima dello scioglimento al picco della fama.',
    albums: [
      {
        slug: 'synchronicity',
        title: 'Synchronicity',
        year: 1983,
        tagline: 'L\'ultimo capitolo prima dello scioglimento',
        history: 'Ultimo album in studio della band, contiene "Every Breath You Take", tra le canzoni più trasmesse della storia radiofonica.',
        palette: ['#f1c40f', '#1a1a1a'],
        tracks: [
          { title: 'Every Breath You Take', durationSec: 253, isHit: true },
          { title: 'King of Pain', durationSec: 302 },
        ],
      },
    ],
  },
  {
    slug: 'rem',
    name: 'R.E.M.',
    formedYear: 1980,
    disbandedYear: 2011,
    origin: 'Athens, Georgia, USA',
    genres: ['Rock alternativo', 'Jangle pop'],
    members: ['Michael Stipe', 'Peter Buck', 'Mike Mills', 'Bill Berry'],
    palette: ['#27ae60', '#2c3e50'],
    history:
      'Pionieri del college rock e poi dell\'alternative rock mainstream, con la voce criptica di Michael Stipe e le chitarre jangle di Peter Buck aprono la strada al successo commerciale della musica indipendente.',
    albums: [
      {
        slug: 'automatic-for-the-people',
        title: 'Automatic for the People',
        year: 1992,
        tagline: 'Malinconia e introspezione mainstream',
        history: 'Album più intimo e acustico, tra i più acclamati della loro carriera.',
        palette: ['#27ae60', '#2c3e50'],
        tracks: [
          { title: 'Everybody Hurts', durationSec: 320, isHit: true },
          { title: 'Man on the Moon', durationSec: 320, isHit: true },
        ],
      },
    ],
  },
  {
    slug: 'the-cure',
    name: 'The Cure',
    formedYear: 1976,
    origin: 'Crawley, Inghilterra',
    genres: ['Post-punk', 'Rock gotico', 'New wave'],
    members: ['Robert Smith', 'Simon Gallup', 'Roger O\'Donnell'],
    palette: ['#1a1a1a', '#8e44ad'],
    history:
      'Con l\'iconico trucco pallido e i capelli scompigliati di Robert Smith, diventano tra le band simbolo del rock gotico/post-punk, capaci però anche di scrivere pop malinconico di grande successo.',
    albums: [
      {
        slug: 'disintegration',
        title: 'Disintegration',
        year: 1989,
        tagline: 'Malinconia elettronica ai vertici',
        history: 'Considerato il loro capolavoro, un disco denso e atmosferico su ansia e perdita.',
        palette: ['#1a1a1a', '#8e44ad'],
        tracks: [
          { title: 'Lovesong', durationSec: 205, isHit: true },
          { title: 'Pictures of You', durationSec: 434 },
        ],
      },
    ],
  },
  {
    slug: 'megadeth',
    name: 'Megadeth',
    formedYear: 1983,
    origin: 'Los Angeles, California, USA',
    genres: ['Thrash metal'],
    members: ['Dave Mustaine', 'David Ellefson'],
    palette: ['#1a1a1a', '#7f8c8d'],
    history:
      'Fondati da Dave Mustaine dopo l\'espulsione dai Metallica, diventano uno dei "quattro grandi" del thrash metal, con un approccio più tecnico e testi politicamente taglienti.',
    albums: [
      {
        slug: 'rust-in-peace',
        title: 'Rust in Peace',
        year: 1990,
        tagline: 'Tecnica thrash ai vertici assoluti',
        history: 'Considerato uno dei dischi thrash metal più tecnicamente accomplished mai realizzati.',
        palette: ['#1a1a1a', '#7f8c8d'],
        tracks: [
          { title: 'Holy Wars... The Punishment Due', durationSec: 391, isHit: true },
          { title: 'Hangar 18', durationSec: 340, isHit: true },
        ],
      },
    ],
  },
  {
    slug: 'slayer',
    name: 'Slayer',
    formedYear: 1981,
    disbandedYear: 2019,
    origin: 'Huntington Park, California, USA',
    genres: ['Thrash metal'],
    members: ['Tom Araya', 'Kerry King', 'Jeff Hanneman'],
    palette: ['#0a0a0a', '#c0392b'],
    history:
      'I più estremi tra i "quattro grandi" del thrash, con velocità, aggressività e testi crudi su guerra e violenza, diventano un pilastro fondativo anche del death ed extreme metal successivo.',
    albums: [
      {
        slug: 'reign-in-blood',
        title: 'Reign in Blood',
        year: 1986,
        tagline: 'Il disco thrash più estremo della sua epoca',
        history: 'Ventinove minuti di violenza sonora senza compromessi, considerato un pilastro assoluto del thrash metal.',
        palette: ['#0a0a0a', '#c0392b'],
        tracks: [
          { title: 'Angel of Death', durationSec: 305, isHit: true },
          { title: 'Raining Blood', durationSec: 261, isHit: true },
        ],
      },
    ],
  },
  {
    slug: 'motley-crue',
    name: 'Mötley Crüe',
    formedYear: 1981,
    origin: 'Los Angeles, California, USA',
    genres: ['Glam metal', 'Hard rock'],
    members: ['Vince Neil', 'Nikki Sixx', 'Mick Mars', 'Tommy Lee'],
    palette: ['#1a1a1a', '#e74c3c'],
    history:
      'Simbolo per eccellenza degli eccessi glam metal sulla Sunset Strip di Los Angeles, tra scandali, dipendenze e uno stile di vita raccontato poi nell\'autobiografia "The Dirt".',
    albums: [
      {
        slug: 'shout-at-the-devil',
        title: 'Shout at the Devil',
        year: 1983,
        tagline: 'Glam metal ad alto volume',
        history: 'Consolida la loro immagine provocatoria e il sound glam metal aggressivo.',
        palette: ['#1a1a1a', '#e74c3c'],
        tracks: [
          { title: 'Shout at the Devil', durationSec: 205, isHit: true },
          { title: 'Looks That Kill', durationSec: 202, isHit: true },
        ],
      },
    ],
  },
  {
    slug: 'van-halen',
    name: 'Van Halen',
    formedYear: 1972,
    disbandedYear: 2020,
    origin: 'Pasadena, California, USA',
    genres: ['Hard rock', 'Glam metal'],
    members: ['David Lee Roth', 'Eddie Van Halen', 'Michael Anthony', 'Alex Van Halen'],
    palette: ['#1a1a1a', '#f1c40f'],
    history:
      'Il virtuosismo chitarristico rivoluzionario di Eddie Van Halen (tecnica del tapping) e il carisma da showman di David Lee Roth li rendono una delle rock band più influenti e divertenti degli anni Ottanta.',
    albums: [
      {
        slug: '1984-album',
        title: '1984',
        year: 1984,
        tagline: 'Il rock incontra i synth con "Jump"',
        history: 'Con il synth di "Jump" porta la band a un successo pop mai raggiunto prima.',
        palette: ['#1a1a1a', '#f1c40f'],
        tracks: [
          { title: 'Jump', durationSec: 241, isHit: true },
          { title: 'Panama', durationSec: 216, isHit: true },
        ],
      },
    ],
  },

  // ---------- Anni '90 ----------
  {
    slug: 'pearl-jam',
    name: 'Pearl Jam',
    formedYear: 1990,
    origin: 'Seattle, Washington, USA',
    genres: ['Grunge', 'Rock alternativo'],
    members: ['Eddie Vedder', 'Mike McCready', 'Stone Gossard', 'Jeff Ament', 'Matt Cameron'],
    palette: ['#2c3e50', '#8b6b3d'],
    history:
      'Tra le band di punta della scena grunge di Seattle, con la voce profonda di Eddie Vedder, riescono a costruire una carriera longeva ben oltre il declino del grunge come fenomeno di massa.',
    albums: [
      {
        slug: 'ten',
        title: 'Ten',
        year: 1991,
        tagline: "L'esordio che li lancia a livello mondiale",
        history: 'Uscito nello stesso periodo di "Nevermind", contribuisce a portare il grunge al grande pubblico.',
        palette: ['#2c3e50', '#8b6b3d'],
        tracks: [
          { title: 'Alive', durationSec: 341, isHit: true },
          { title: 'Jeremy', durationSec: 318, isHit: true },
          { title: 'Even Flow', durationSec: 316, isHit: true },
        ],
      },
    ],
  },
  {
    slug: 'soundgarden',
    name: 'Soundgarden',
    formedYear: 1984,
    disbandedYear: 2017,
    origin: 'Seattle, Washington, USA',
    genres: ['Grunge', 'Heavy metal'],
    members: ['Chris Cornell', 'Kim Thayil', 'Ben Shepherd', 'Matt Cameron'],
    palette: ['#2c3e50', '#7f8c8d'],
    history:
      'Con la potente voce di Chris Cornell e un sound che fonde metal e grunge, sono tra i pionieri della scena di Seattle, sciolti dopo la scomparsa del cantante nel 2017.',
    albums: [
      {
        slug: 'superunknown',
        title: 'Superunknown',
        year: 1994,
        tagline: 'Il grunge incontra il metal progressivo',
        history: 'Il loro album di maggior successo, unisce pesantezza metal e melodie psichedeliche.',
        palette: ['#2c3e50', '#7f8c8d'],
        tracks: [
          { title: 'Black Hole Sun', durationSec: 320, isHit: true },
          { title: 'Spoonman', durationSec: 250, isHit: true },
        ],
      },
    ],
  },
  {
    slug: 'alice-in-chains',
    name: 'Alice in Chains',
    formedYear: 1987,
    origin: 'Seattle, Washington, USA',
    genres: ['Grunge', 'Heavy metal'],
    members: ['Layne Staley', 'Jerry Cantrell', 'Mike Inez', 'Sean Kinney'],
    palette: ['#1a1a1a', '#7f0000'],
    history:
      'Con armonie vocali cupe tra Layne Staley e Jerry Cantrell, propongono un grunge più metallico e oscuro, segnato dalla lotta di Staley contro la dipendenza fino alla sua morte nel 2002.',
    albums: [
      {
        slug: 'dirt',
        title: 'Dirt',
        year: 1992,
        tagline: 'Un disco durissimo sulla dipendenza',
        history: 'Racconta senza filtri la dipendenza da eroina, diventando uno dei dischi più crudi del grunge.',
        palette: ['#1a1a1a', '#7f0000'],
        tracks: [
          { title: 'Would?', durationSec: 206, isHit: true },
          { title: 'Rooster', durationSec: 391, isHit: true },
        ],
      },
    ],
  },
  {
    slug: 'stone-temple-pilots',
    name: 'Stone Temple Pilots',
    formedYear: 1989,
    origin: 'San Diego, California, USA',
    genres: ['Grunge', 'Rock alternativo'],
    members: ['Scott Weiland', 'Dean DeLeo', 'Robert DeLeo', 'Eric Kretz'],
    palette: ['#2c3e50', '#8b6b3d'],
    history:
      'Spesso etichettati come "seguaci" del grunge di Seattle nonostante venissero dalla California, costruiscono una carriera di successo grazie al carisma vocale di Scott Weiland.',
    albums: [
      {
        slug: 'core',
        title: 'Core',
        year: 1992,
        tagline: "L'esordio da multiplatino",
        history: 'Vende milioni di copie nonostante le critiche iniziali, lanciando la band a livello internazionale.',
        palette: ['#2c3e50', '#8b6b3d'],
        tracks: [
          { title: 'Plush', durationSec: 314, isHit: true },
          { title: 'Creep', durationSec: 333 },
        ],
      },
    ],
  },
  {
    slug: 'oasis',
    name: 'Oasis',
    formedYear: 1991,
    disbandedYear: 2009,
    origin: 'Manchester, Inghilterra',
    genres: ['Britpop', 'Rock alternativo'],
    members: ['Liam Gallagher', 'Noel Gallagher', 'Paul Arthurs', 'Paul McGuigan'],
    palette: ['#c0392b', '#1a1a1a'],
    history:
      'Guidati dai litigiosi fratelli Gallagher, diventano il simbolo del Britpop anni Novanta, capaci di riempire gli stadi britannici come pochi altri nella storia recente.',
    albums: [
      {
        slug: 'whats-the-story-morning-glory',
        title: "(What's the Story) Morning Glory?",
        year: 1995,
        tagline: 'Il picco del Britpop',
        history: 'Uno degli album più venduti nella storia britannica, contiene "Wonderwall".',
        palette: ['#c0392b', '#1a1a1a'],
        tracks: [
          { title: 'Wonderwall', durationSec: 258, isHit: true },
          { title: "Don't Look Back in Anger", durationSec: 285, isHit: true },
          { title: 'Champagne Supernova', durationSec: 447 },
        ],
      },
    ],
  },
  {
    slug: 'blur',
    name: 'Blur',
    formedYear: 1988,
    origin: 'Londra, Inghilterra',
    genres: ['Britpop', 'Rock alternativo'],
    members: ['Damon Albarn', 'Graham Coxon', 'Alex James', 'Dave Rowntree'],
    palette: ['#3498db', '#1a1a1a'],
    history:
      'Rivali storici degli Oasis nella "guerra del Britpop" del 1995, propongono un sound più ecclettico e ironico, riflettendo la vita di provincia e città inglesi.',
    albums: [
      {
        slug: 'parklife',
        title: 'Parklife',
        year: 1994,
        tagline: 'Il ritratto ironico della vita inglese',
        history: 'Consacra la band come simbolo della "Cool Britannia" a metà anni Novanta.',
        palette: ['#3498db', '#1a1a1a'],
        tracks: [
          { title: 'Girls & Boys', durationSec: 292, isHit: true },
          { title: 'Parklife', durationSec: 231, isHit: true },
        ],
      },
    ],
  },
  {
    slug: 'red-hot-chili-peppers',
    name: 'Red Hot Chili Peppers',
    formedYear: 1982,
    origin: 'Los Angeles, California, USA',
    genres: ['Funk rock', 'Rock alternativo'],
    members: ['Anthony Kiedis', 'Flea', 'John Frusciante', 'Chad Smith'],
    palette: ['#c0392b', '#f1c40f'],
    history:
      'Fondono funk, punk e rock in un sound energico ed esplicito, diventando una delle rock band più longeve e vendute grazie anche ai ritorni e partenze del chitarrista John Frusciante.',
    albums: [
      {
        slug: 'blood-sugar-sex-magik',
        title: 'Blood Sugar Sex Magik',
        year: 1991,
        tagline: 'La svolta verso il successo globale',
        history: 'Prodotto da Rick Rubin, li porta dal culto underground al successo mainstream.',
        palette: ['#c0392b', '#f1c40f'],
        tracks: [
          { title: 'Under the Bridge', durationSec: 264, isHit: true },
          { title: 'Give It Away', durationSec: 282, isHit: true },
        ],
      },
    ],
  },
  {
    slug: 'smashing-pumpkins',
    name: 'The Smashing Pumpkins',
    formedYear: 1988,
    origin: 'Chicago, Illinois, USA',
    genres: ['Rock alternativo', 'Rock gotico'],
    members: ['Billy Corgan', 'James Iha', "D'arcy Wretzky", 'Jimmy Chamberlin'],
    palette: ['#1a1a1a', '#8e44ad'],
    history:
      'Guidati dalla visione ossessiva di Billy Corgan, mescolano shoegaze, metal e pop in produzioni ambiziose e monumentali, diventando tra le band alternative più importanti degli anni Novanta.',
    albums: [
      {
        slug: 'mellon-collie',
        title: 'Mellon Collie and the Infinite Sadness',
        year: 1995,
        tagline: 'Un doppio album monumentale',
        history: 'Ambizioso doppio disco che spazia tra generi diversi, consolidando lo status della band.',
        palette: ['#1a1a1a', '#8e44ad'],
        tracks: [
          { title: '1979', durationSec: 250, isHit: true },
          { title: 'Bullet with Butterfly Wings', durationSec: 262, isHit: true },
        ],
      },
    ],
  },
  {
    slug: 'rage-against-the-machine',
    name: 'Rage Against the Machine',
    formedYear: 1991,
    origin: 'Los Angeles, California, USA',
    genres: ['Rap metal', 'Rock alternativo'],
    members: ['Zack de la Rocha', 'Tom Morello', 'Tim Commerford', 'Brad Wilk'],
    palette: ['#1a1a1a', '#c0392b'],
    history:
      'Fondono rap, funk e metal con testi apertamente rivoluzionari e politici, diventando la band di riferimento del rock impegnato di fine millennio grazie anche al chitarrismo sperimentale di Tom Morello.',
    albums: [
      {
        slug: 'rage-against-the-machine-album',
        title: 'Rage Against the Machine',
        year: 1992,
        tagline: 'Rabbia politica e groove metal',
        history: 'Album d\'esordio che fonde rap e metal con un messaggio politico esplicito.',
        palette: ['#1a1a1a', '#c0392b'],
        tracks: [
          { title: 'Killing in the Name', durationSec: 313, isHit: true },
          { title: 'Bullet in the Head', durationSec: 344 },
        ],
      },
    ],
  },
  {
    slug: 'green-day',
    name: 'Green Day',
    formedYear: 1986,
    origin: 'Berkeley, California, USA',
    genres: ['Punk rock', 'Pop punk'],
    members: ['Billie Joe Armstrong', 'Mike Dirnt', 'Tré Cool'],
    palette: ['#1a1a1a', '#27ae60'],
    history:
      'Portano il punk rock dagli scantinati indipendenti alle classifiche mainstream, riportando poi il genere all\'attenzione con il concept politico "American Idiot" nel 2004.',
    albums: [
      {
        slug: 'dookie',
        title: 'Dookie',
        year: 1994,
        tagline: 'Il punk conquista MTV',
        history: 'Porta il pop punk al grande pubblico, vincendo un Grammy e vendendo milioni di copie.',
        palette: ['#1a1a1a', '#27ae60'],
        tracks: [
          { title: 'Basket Case', durationSec: 181, isHit: true },
          { title: 'When I Come Around', durationSec: 176, isHit: true },
        ],
      },
    ],
  },
  {
    slug: 'weezer',
    name: 'Weezer',
    formedYear: 1992,
    origin: 'Los Angeles, California, USA',
    genres: ['Rock alternativo', 'Power pop'],
    members: ['Rivers Cuomo', 'Patrick Wilson', 'Brian Bell', 'Scott Shriner'],
    palette: ['#3498db', '#1a1a1a'],
    history:
      'Con la scrittura nerd-pop di Rivers Cuomo, ridefiniscono il power pop anni Novanta mescolando distorsione hard rock e melodie irresistibili.',
    albums: [
      {
        slug: 'weezer-blue-album',
        title: 'Weezer (Blue Album)',
        year: 1994,
        tagline: 'Il power pop nerd conquista tutti',
        history: 'Album d\'esordio diventato un classico del rock alternativo anni Novanta.',
        palette: ['#3498db', '#1a1a1a'],
        tracks: [
          { title: 'Buddy Holly', durationSec: 159, isHit: true },
          { title: 'Say It Ain\'t So', durationSec: 254, isHit: true },
        ],
      },
    ],
  },
  {
    slug: 'nine-inch-nails',
    name: 'Nine Inch Nails',
    formedYear: 1988,
    origin: 'Cleveland, Ohio, USA',
    genres: ['Industrial rock', 'Rock alternativo'],
    members: ['Trent Reznor'],
    palette: ['#0a0a0a', '#c0392b'],
    history:
      'Progetto quasi interamente solista di Trent Reznor, porta l\'industrial rock nel mainstream fondendo elettronica aggressiva, rumore e melodie pop oscure.',
    albums: [
      {
        slug: 'the-downward-spiral',
        title: 'The Downward Spiral',
        year: 1994,
        tagline: 'Il concept album sull\'autodistruzione',
        history: 'Concept oscuro su dipendenza e autodistruzione, considerato un capolavoro dell\'industrial rock.',
        palette: ['#0a0a0a', '#c0392b'],
        tracks: [
          { title: 'Closer', durationSec: 387, isHit: true },
          { title: 'Hurt', durationSec: 375, isHit: true },
        ],
      },
    ],
  },
  {
    slug: 'faith-no-more',
    name: 'Faith No More',
    formedYear: 1979,
    origin: 'San Francisco, California, USA',
    genres: ['Rock alternativo', 'Funk metal'],
    members: ['Mike Patton', 'Billy Gould', 'Jon Hudson', 'Mike Bordin'],
    palette: ['#2c3e50', '#e67e22'],
    history:
      'Con la versatilità vocale eccezionale di Mike Patton, mescolano funk, metal, pop e avanguardia in modo imprevedibile, influenzando l\'intera scena alternative/nu metal successiva.',
    albums: [
      {
        slug: 'the-real-thing',
        title: 'The Real Thing',
        year: 1989,
        tagline: 'Il debutto di Mike Patton alla voce',
        history: 'Primo album con Mike Patton, porta la band al successo internazionale.',
        palette: ['#2c3e50', '#e67e22'],
        tracks: [
          { title: 'Epic', durationSec: 293, isHit: true },
          { title: 'Falling to Pieces', durationSec: 316 },
        ],
      },
    ],
  },
  {
    slug: 'bush',
    name: 'Bush',
    formedYear: 1992,
    origin: 'Londra, Inghilterra',
    genres: ['Post-grunge', 'Rock alternativo'],
    members: ['Gavin Rossdale', 'Chris Traynor', 'Corey Britz'],
    palette: ['#2c3e50', '#7f8c8d'],
    history:
      'Band britannica che porta un sound ispirato al grunge americano al successo commerciale negli Stati Uniti, nonostante scetticismo iniziale della critica del Regno Unito.',
    albums: [
      {
        slug: 'sixteen-stone',
        title: 'Sixteen Stone',
        year: 1994,
        tagline: 'Il grunge visto dal Regno Unito',
        history: 'Multiplatino negli USA, li rende una delle band post-grunge di maggior successo commerciale.',
        palette: ['#2c3e50', '#7f8c8d'],
        tracks: [
          { title: 'Glycerine', durationSec: 253, isHit: true },
          { title: 'Everything Zen', durationSec: 324 },
        ],
      },
    ],
  },
  {
    slug: 'korn',
    name: 'Korn',
    formedYear: 1993,
    origin: 'Bakersfield, California, USA',
    genres: ['Nu metal'],
    members: ['Jonathan Davis', 'Head', 'Munky', 'Fieldy', 'Ray Luzier'],
    palette: ['#0a0a0a', '#7f0000'],
    history:
      'Considerati i padri fondatori del nu metal, con le chitarre a sette corde accordate basse e i testi tormentati di Jonathan Davis su traumi infantili, aprono la strada a un intero movimento.',
    albums: [
      {
        slug: 'korn-follow-the-leader',
        title: 'Follow the Leader',
        year: 1998,
        tagline: 'Il nu metal esplode nel mainstream',
        history: 'Porta il nu metal in cima alle classifiche, con un sound aggressivo e groove-oriented.',
        palette: ['#0a0a0a', '#7f0000'],
        tracks: [
          { title: 'Got the Life', durationSec: 232, isHit: true },
          { title: 'Freak on a Leash', durationSec: 245, isHit: true },
        ],
      },
    ],
  },
  {
    slug: 'system-of-a-down',
    name: 'System of a Down',
    formedYear: 1994,
    origin: 'Glendale, California, USA',
    genres: ['Nu metal', 'Metal alternativo'],
    members: ['Serj Tankian', 'Daron Malakian', 'Shavo Odadjian', 'John Dolmayan'],
    palette: ['#1a1a1a', '#e67e22'],
    history:
      'Di origini armene, uniscono metal aggressivo, melodie mediorientali e testi politicamente taglienti in un sound imprevedibile e riconoscibilissimo.',
    albums: [
      {
        slug: 'toxicity',
        title: 'Toxicity',
        year: 2001,
        tagline: 'Metal imprevedibile e politico',
        history: 'Debutta al numero uno delle classifiche USA nella settimana dell\'11 settembre 2001, diventando il loro disco più celebre.',
        palette: ['#1a1a1a', '#e67e22'],
        tracks: [
          { title: 'Chop Suey!', durationSec: 210, isHit: true },
          { title: 'Toxicity', durationSec: 219, isHit: true },
        ],
      },
    ],
  },

  // ---------- Anni 2000 ----------
  {
    slug: 'linkin-park',
    name: 'Linkin Park',
    formedYear: 1996,
    origin: 'Agoura Hills, California, USA',
    genres: ['Nu metal', 'Rock alternativo'],
    members: ['Chester Bennington', 'Mike Shinoda', 'Brad Delson', 'Joe Hahn'],
    palette: ['#1a1a1a', '#3498db'],
    history:
      'Fondono rap, elettronica e nu metal in un sound accessibile e melodico, diventando una delle rock band più vendute dei primi anni 2000, fino alla scomparsa di Chester Bennington nel 2017.',
    albums: [
      {
        slug: 'hybrid-theory',
        title: 'Hybrid Theory',
        year: 2000,
        tagline: 'Il nu metal per il grande pubblico',
        history: 'Uno degli album di debutto più venduti di sempre, definisce il sound rap-rock dei primi 2000.',
        palette: ['#1a1a1a', '#3498db'],
        tracks: [
          { title: 'In the End', durationSec: 216, isHit: true },
          { title: 'Crawling', durationSec: 211, isHit: true },
        ],
      },
    ],
  },
  {
    slug: 'the-white-stripes',
    name: 'The White Stripes',
    formedYear: 1997,
    disbandedYear: 2011,
    origin: 'Detroit, Michigan, USA',
    genres: ['Garage rock', 'Blues rock'],
    members: ['Jack White', 'Meg White'],
    palette: ['#c0392b', '#ecf0f1'],
    history:
      'Duo minimalista (chitarra e batteria) che guida il revival garage rock dei primi anni 2000, con un\'estetica visiva rigorosamente bianco-rossa-nera.',
    albums: [
      {
        slug: 'elephant',
        title: 'Elephant',
        year: 2003,
        tagline: 'Il garage rock revival al suo apice',
        history: 'Registrato analogicamente con strumentazione vintage, contiene "Seven Nation Army", tra i riff più iconici del decennio.',
        palette: ['#c0392b', '#ecf0f1'],
        tracks: [
          { title: 'Seven Nation Army', durationSec: 231, isHit: true },
          { title: 'The Hardest Button to Button', durationSec: 213 },
        ],
      },
    ],
  },
  {
    slug: 'the-strokes',
    name: 'The Strokes',
    formedYear: 1998,
    origin: 'New York City, New York, USA',
    genres: ['Garage rock', 'Indie rock'],
    members: ['Julian Casablancas', 'Nick Valensi', 'Albert Hammond Jr.', 'Nikolai Fraiture', 'Fabrizio Moretti'],
    palette: ['#1a1a1a', '#e67e22'],
    history:
      'Con un\'estetica volutamente lo-fi e un\'attitudine da rock and roll classico riletta in chiave 2000, riaccendono l\'interesse mainstream per il rock indipendente newyorkese.',
    albums: [
      {
        slug: 'is-this-it',
        title: 'Is This It',
        year: 2001,
        tagline: 'Il ritorno del rock and roll essenziale',
        history: 'Album d\'esordio che rilancia il garage rock come fenomeno globale nei primi anni 2000.',
        palette: ['#1a1a1a', '#e67e22'],
        tracks: [
          { title: 'Last Nite', durationSec: 193, isHit: true },
          { title: 'Someday', durationSec: 175, isHit: true },
        ],
      },
    ],
  },
  {
    slug: 'arctic-monkeys',
    name: 'Arctic Monkeys',
    formedYear: 2002,
    origin: 'Sheffield, Inghilterra',
    genres: ['Indie rock', 'Garage rock'],
    members: ['Alex Turner', 'Matt Helders', 'Jamie Cook', 'Nick O\'Malley'],
    palette: ['#2c3e50', '#f1c40f'],
    history:
      'Diventati famosi grazie al passaparola online prima ancora di un contratto discografico, raccontano con ironia la vita notturna della provincia inglese, evolvendo poi verso sonorità più sofisticate.',
    albums: [
      {
        slug: 'whatever-people-say-i-am',
        title: "Whatever People Say I Am, That's What I'm Not",
        year: 2006,
        tagline: 'Il debutto più veloce nella storia UK',
        history: 'Diventa l\'album d\'esordio più venduto nella prima settimana nella storia della classifica britannica.',
        palette: ['#2c3e50', '#f1c40f'],
        tracks: [
          { title: "I Bet You Look Good on the Dancefloor", durationSec: 175, isHit: true },
          { title: 'When the Sun Goes Down', durationSec: 206, isHit: true },
        ],
      },
    ],
  },
  {
    slug: 'coldplay',
    name: 'Coldplay',
    formedYear: 1996,
    origin: 'Londra, Inghilterra',
    genres: ['Rock alternativo', 'Pop rock'],
    members: ['Chris Martin', 'Jonny Buckland', 'Guy Berryman', 'Will Champion'],
    palette: ['#f1c40f', '#2c3e50'],
    history:
      'Da band alternative rock a fenomeno pop-rock stadio globale, con la voce emotiva di Chris Martin e uno stile che negli anni si apre sempre più a elettronica e pop.',
    albums: [
      {
        slug: 'a-rush-of-blood-to-the-head',
        title: 'A Rush of Blood to the Head',
        year: 2002,
        tagline: 'Il salto verso il successo globale',
        history: 'Consolida il loro status internazionale con brani intensi ed emotivi.',
        palette: ['#f1c40f', '#2c3e50'],
        tracks: [
          { title: 'Clocks', durationSec: 307, isHit: true },
          { title: 'The Scientist', durationSec: 309, isHit: true },
        ],
      },
    ],
  },
  {
    slug: 'muse',
    name: 'Muse',
    formedYear: 1994,
    origin: 'Teignmouth, Inghilterra',
    genres: ['Rock alternativo', 'Rock progressivo'],
    members: ['Matt Bellamy', 'Chris Wolstenholme', 'Dominic Howard'],
    palette: ['#1a1a1a', '#3498db'],
    history:
      'Con arrangiamenti ambiziosi che spaziano da rock sinfonico a elettronica futuristica, e la voce/chitarra virtuosistica di Matt Bellamy, costruiscono spettacoli dal vivo grandiosi.',
    albums: [
      {
        slug: 'black-holes-and-revelations',
        title: 'Black Holes and Revelations',
        year: 2006,
        tagline: 'Rock sinfonico e fantascienza',
        history: 'Consolida il loro sound ambizioso tra elettronica, rock e influenze orchestrali.',
        palette: ['#1a1a1a', '#3498db'],
        tracks: [
          { title: 'Starlight', durationSec: 240, isHit: true },
          { title: 'Supermassive Black Hole', durationSec: 215, isHit: true },
        ],
      },
    ],
  },
  {
    slug: 'kings-of-leon',
    name: 'Kings of Leon',
    formedYear: 1999,
    origin: 'Nashville, Tennessee, USA',
    genres: ['Rock alternativo', 'Southern rock'],
    members: ['Caleb Followill', 'Nathan Followill', 'Jared Followill', 'Matthew Followill'],
    palette: ['#8b6b3d', '#1a1a1a'],
    history:
      'Formati da tre fratelli e un cugino, evolvono da un southern rock ruvido a un sound arena rock più levigato che li porta al successo mondiale.',
    albums: [
      {
        slug: 'only-by-the-night',
        title: 'Only by the Night',
        year: 2008,
        tagline: 'Il salto verso il successo globale',
        history: 'Contiene "Use Somebody" e "Sex on Fire", portando la band al successo internazionale.',
        palette: ['#8b6b3d', '#1a1a1a'],
        tracks: [
          { title: 'Sex on Fire', durationSec: 203, isHit: true },
          { title: 'Use Somebody', durationSec: 231, isHit: true },
        ],
      },
    ],
  },
  {
    slug: 'franz-ferdinand',
    name: 'Franz Ferdinand',
    formedYear: 2002,
    origin: 'Glasgow, Scozia',
    genres: ['Indie rock', 'Post-punk revival'],
    members: ['Alex Kapranos', 'Nick McCarthy', 'Bob Hardy', 'Paul Thomson'],
    palette: ['#c0392b', '#1a1a1a'],
    history:
      'Con un sound angolare e ballabile ispirato al post-punk anni Settanta, diventano tra i protagonisti del revival indie/dance-rock di metà anni 2000.',
    albums: [
      {
        slug: 'franz-ferdinand-album',
        title: 'Franz Ferdinand',
        year: 2004,
        tagline: 'Il post-punk torna in pista da ballo',
        history: 'Album d\'esordio che li rende protagonisti immediati della scena indie rock britannica.',
        palette: ['#c0392b', '#1a1a1a'],
        tracks: [
          { title: 'Take Me Out', durationSec: 237, isHit: true },
          { title: 'Do You Want To', durationSec: 210 },
        ],
      },
    ],
  },
  {
    slug: 'queens-of-the-stone-age',
    name: 'Queens of the Stone Age',
    formedYear: 1996,
    origin: 'Palm Desert, California, USA',
    genres: ['Stoner rock', 'Rock alternativo'],
    members: ['Josh Homme', 'Troy Van Leeuwen', 'Michael Shuman', 'Jon Theodore'],
    palette: ['#e67e22', '#1a1a1a'],
    history:
      'Guidati da Josh Homme, evolvono lo stoner rock del deserto californiano in un sound più vario e sperimentale, restando un punto di riferimento del rock alternativo per oltre due decenni.',
    albums: [
      {
        slug: 'songs-for-the-deaf',
        title: 'Songs for the Deaf',
        year: 2002,
        tagline: 'Il concept sul viaggio nel deserto',
        history: 'Concept ambientato durante un viaggio radiofonico nel deserto, tra i loro dischi più celebrati.',
        palette: ['#e67e22', '#1a1a1a'],
        tracks: [
          { title: 'No One Knows', durationSec: 286, isHit: true },
          { title: 'Go with the Flow', durationSec: 190 },
        ],
      },
    ],
  },
  {
    slug: 'evanescence',
    name: 'Evanescence',
    formedYear: 1995,
    origin: 'Little Rock, Arkansas, USA',
    genres: ['Rock gotico', 'Metal alternativo'],
    members: ['Amy Lee', 'Tim McCord', 'Troy McLawhorn'],
    palette: ['#1a1a1a', '#8e44ad'],
    history:
      'Con la voce operistica di Amy Lee su un sound gotico/metal orchestrale, portano un\'estetica dark inaspettatamente nelle classifiche pop di inizio 2000.',
    albums: [
      {
        slug: 'fallen',
        title: 'Fallen',
        year: 2003,
        tagline: 'Il gotico conquista le classifiche pop',
        history: 'Contiene "Bring Me to Life", portando il rock gotico a un successo commerciale enorme.',
        palette: ['#1a1a1a', '#8e44ad'],
        tracks: [
          { title: 'Bring Me to Life', durationSec: 235, isHit: true },
          { title: 'My Immortal', durationSec: 264, isHit: true },
        ],
      },
    ],
  },
  {
    slug: 'my-chemical-romance',
    name: 'My Chemical Romance',
    formedYear: 2001,
    origin: 'Newark, New Jersey, USA',
    genres: ['Emo', 'Rock alternativo', 'Pop punk'],
    members: ['Gerard Way', 'Ray Toro', 'Mikey Way', 'Frank Iero'],
    palette: ['#1a1a1a', '#c0392b'],
    history:
      'Simbolo della scena emo di metà anni 2000, con teatralità scenica e temi su morte e identità, culminano nel concept rock opera "The Black Parade".',
    albums: [
      {
        slug: 'the-black-parade',
        title: 'The Black Parade',
        year: 2006,
        tagline: 'Rock opera sulla morte e l\'identità',
        history: 'Concept album ambizioso ispirato a Pink Floyd e Queen, diventa il loro disco più celebre.',
        palette: ['#1a1a1a', '#c0392b'],
        tracks: [
          { title: 'Welcome to the Black Parade', durationSec: 311, isHit: true },
          { title: "I'm Not Okay (I Promise)", durationSec: 199, isHit: true },
        ],
      },
    ],
  },
  {
    slug: 'paramore',
    name: 'Paramore',
    formedYear: 2004,
    origin: 'Franklin, Tennessee, USA',
    genres: ['Pop punk', 'Rock alternativo'],
    members: ['Hayley Williams', 'Taylor York', 'Zac Farro'],
    palette: ['#e67e22', '#1a1a1a'],
    history:
      'Guidati dal carisma vocale di Hayley Williams, diventano una delle band pop punk più durature, capaci di evolvere il proprio sound restando rilevanti oltre un decennio.',
    albums: [
      {
        slug: 'riot',
        title: 'RIOT!',
        year: 2007,
        tagline: 'Il pop punk conquista una nuova generazione',
        history: 'Consacra la band a livello internazionale grazie a "Misery Business".',
        palette: ['#e67e22', '#1a1a1a'],
        tracks: [
          { title: 'Misery Business', durationSec: 217, isHit: true },
          { title: 'Crushcrushcrush', durationSec: 213 },
        ],
      },
    ],
  },
  {
    slug: 'the-killers',
    name: 'The Killers',
    formedYear: 2001,
    origin: 'Las Vegas, Nevada, USA',
    genres: ['Rock alternativo', 'New wave revival'],
    members: ['Brandon Flowers', 'Ronnie Vannucci Jr.'],
    palette: ['#8e44ad', '#1a1a1a'],
    history:
      'Fondono il new wave anni Ottanta con il rock alternativo dei 2000, diventando uno dei gruppi da stadio più affidabili del rock moderno grazie a inni immediati come "Mr. Brightside".',
    albums: [
      {
        slug: 'hot-fuss',
        title: 'Hot Fuss',
        year: 2004,
        tagline: 'Il new wave torna protagonista',
        history: 'Album d\'esordio che li lancia a livello mondiale grazie a un sound synth-rock irresistibile.',
        palette: ['#8e44ad', '#1a1a1a'],
        tracks: [
          { title: 'Mr. Brightside', durationSec: 222, isHit: true },
          { title: 'Somebody Told Me', durationSec: 197, isHit: true },
        ],
      },
    ],
  },
  {
    slug: 'interpol',
    name: 'Interpol',
    formedYear: 1997,
    origin: 'New York City, New York, USA',
    genres: ['Post-punk revival', 'Indie rock'],
    members: ['Paul Banks', 'Daniel Kessler', 'Sam Fogarino'],
    palette: ['#1a1a1a', '#2c3e50'],
    history:
      'Con un\'estetica elegante e cupa ispirata a Joy Division, diventano tra i protagonisti del post-punk revival newyorkese dei primi 2000.',
    albums: [
      {
        slug: 'turn-on-the-bright-lights',
        title: 'Turn On the Bright Lights',
        year: 2002,
        tagline: 'Il post-punk revival di New York',
        history: 'Album d\'esordio molto acclamato, definisce l\'estetica cupa ed elegante della band.',
        palette: ['#1a1a1a', '#2c3e50'],
        tracks: [
          { title: 'Obstacle 1', durationSec: 250, isHit: true },
          { title: 'PDA', durationSec: 267 },
        ],
      },
    ],
  },
  {
    slug: 'death-cab-for-cutie',
    name: 'Death Cab for Cutie',
    formedYear: 1997,
    origin: 'Bellingham, Washington, USA',
    genres: ['Indie rock', 'Emo'],
    members: ['Ben Gibbard', 'Nick Harmer', 'Jason McGerr'],
    palette: ['#3498db', '#2c3e50'],
    history:
      'Con la scrittura intimista di Ben Gibbard, diventano una delle band indie rock più amate dei 2000, portando sensibilità emo-indipendente a un pubblico più ampio.',
    albums: [
      {
        slug: 'transatlanticism',
        title: 'Transatlanticism',
        year: 2003,
        tagline: 'Il capolavoro indie rock intimista',
        history: 'Consolida il loro status nella scena indie, con testi malinconici e arrangiamenti curati.',
        palette: ['#3498db', '#2c3e50'],
        tracks: [
          { title: 'The Sound of Settling', durationSec: 168, isHit: true },
          { title: 'Transatlanticism', durationSec: 467 },
        ],
      },
    ],
  },
  {
    slug: 'modest-mouse',
    name: 'Modest Mouse',
    formedYear: 1992,
    origin: 'Issaquah, Washington, USA',
    genres: ['Indie rock', 'Rock alternativo'],
    members: ['Isaac Brock', 'Jeremiah Green', 'Eric Judy'],
    palette: ['#27ae60', '#2c3e50'],
    history:
      'Con la scrittura eccentrica e nevrotica di Isaac Brock, passano da culto indie rock anni Novanta a successo mainstream inatteso a metà 2000.',
    albums: [
      {
        slug: 'good-news-for-people-who-love-bad-news',
        title: 'Good News for People Who Love Bad News',
        year: 2004,
        tagline: 'Il successo mainstream inatteso',
        history: 'Contiene "Float On", il loro maggior successo radiofonico e commerciale.',
        palette: ['#27ae60', '#2c3e50'],
        tracks: [
          { title: 'Float On', durationSec: 209, isHit: true },
          { title: 'Ocean Breathes Salty', durationSec: 227 },
        ],
      },
    ],
  },

  // ---------- 2010s-2020s ----------
  {
    slug: 'imagine-dragons',
    name: 'Imagine Dragons',
    formedYear: 2008,
    origin: 'Las Vegas, Nevada, USA',
    genres: ['Rock alternativo', 'Pop rock'],
    members: ['Dan Reynolds', 'Wayne Sermon', 'Ben McKee', 'Daniel Platzman'],
    palette: ['#c0392b', '#1a1a1a'],
    history:
      'Con un sound che unisce rock alternativo, elettronica e ritornelli da stadio immediati, diventano una delle rock band di maggior successo commerciale degli anni 2010.',
    albums: [
      {
        slug: 'night-visions',
        title: 'Night Visions',
        year: 2012,
        tagline: 'Il rock da classifica pop degli anni 2010',
        history: 'Contiene "Radioactive", tra i brani rock più trasmessi del decennio.',
        palette: ['#c0392b', '#1a1a1a'],
        tracks: [
          { title: 'Radioactive', durationSec: 187, isHit: true },
          { title: 'Demons', durationSec: 174, isHit: true },
        ],
      },
    ],
  },
  {
    slug: 'twenty-one-pilots',
    name: 'Twenty One Pilots',
    formedYear: 2009,
    origin: 'Columbus, Ohio, USA',
    genres: ['Rock alternativo', 'Pop rap'],
    members: ['Tyler Joseph', 'Josh Dun'],
    palette: ['#1a1a1a', '#e74c3c'],
    history:
      'Duo che mescola rock, rap, elettronica e reggae in modo imprevedibile, con testi su ansia e salute mentale che li rendono estremamente popolari tra il pubblico più giovane.',
    albums: [
      {
        slug: 'blurryface',
        title: 'Blurryface',
        year: 2015,
        tagline: 'Ansia e generi mescolati senza confini',
        history: 'Concept sull\'insicurezza personificata, li porta al successo commerciale globale.',
        palette: ['#1a1a1a', '#e74c3c'],
        tracks: [
          { title: 'Stressed Out', durationSec: 202, isHit: true },
          { title: 'Ride', durationSec: 214, isHit: true },
        ],
      },
    ],
  },
  {
    slug: 'greta-van-fleet',
    name: 'Greta Van Fleet',
    formedYear: 2012,
    origin: 'Frankenmuth, Michigan, USA',
    genres: ['Hard rock', 'Blues rock'],
    members: ['Josh Kiszka', 'Jake Kiszka', 'Sam Kiszka', 'Danny Wagner'],
    palette: ['#e67e22', '#1a1a1a'],
    history:
      'Giovanissimi fratelli (più un amico) del Michigan che riportano in auge sonorità hard rock/blues fortemente ispirate a Led Zeppelin, dividendo la critica ma conquistando un largo pubblico.',
    albums: [
      {
        slug: 'anthem-of-the-peaceful-army',
        title: 'Anthem of the Peaceful Army',
        year: 2018,
        tagline: 'Il revival del classic rock anni Settanta',
        history: 'Vince il Grammy come miglior album rock, confermando il loro revival di sonorità classic rock.',
        palette: ['#e67e22', '#1a1a1a'],
        tracks: [
          { title: 'When the Curtain Falls', durationSec: 262, isHit: true },
          { title: 'The Cold Wind', durationSec: 250 },
        ],
      },
    ],
  },
  {
    slug: 'royal-blood',
    name: 'Royal Blood',
    formedYear: 2013,
    origin: 'Brighton, Inghilterra',
    genres: ['Hard rock', 'Rock alternativo'],
    members: ['Mike Kerr', 'Ben Thatcher'],
    palette: ['#2c3e50', '#3498db'],
    history:
      'Duo basso-batteria che, grazie a un basso pesantemente processato per suonare come una chitarra distorta, produce un hard rock potente con una formazione minimale.',
    albums: [
      {
        slug: 'royal-blood-album',
        title: 'Royal Blood',
        year: 2014,
        tagline: 'Hard rock esplosivo in due soli strumenti',
        history: 'Album d\'esordio con cui debuttano al numero uno della classifica britannica.',
        palette: ['#2c3e50', '#3498db'],
        tracks: [
          { title: 'Figure It Out', durationSec: 172, isHit: true },
          { title: 'Little Monster', durationSec: 174, isHit: true },
        ],
      },
    ],
  },
  {
    slug: 'the-1975',
    name: 'The 1975',
    formedYear: 2002,
    origin: 'Manchester, Inghilterra',
    genres: ['Rock alternativo', 'Pop rock'],
    members: ['Matty Healy', 'Adam Hann', 'Ross MacDonald', 'George Daniel'],
    palette: ['#1a1a1a', '#e74c3c'],
    history:
      'Con un sound eclettico che spazia da synth-pop a rock, guidati dalla scrittura ironica e autoriflessiva di Matty Healy, diventano tra le band più rilevanti del rock/pop 2010.',
    albums: [
      {
        slug: 'the-1975-album',
        title: 'The 1975',
        year: 2013,
        tagline: 'Un debutto eclettico e ambizioso',
        history: 'Album d\'esordio che mescola generi diversi, lanciando la band a livello internazionale.',
        palette: ['#1a1a1a', '#e74c3c'],
        tracks: [
          { title: 'Chocolate', durationSec: 245, isHit: true },
          { title: 'Sex', durationSec: 231 },
        ],
      },
    ],
  },
  {
    slug: 'wolf-alice',
    name: 'Wolf Alice',
    formedYear: 2010,
    origin: 'Londra, Inghilterra',
    genres: ['Rock alternativo', 'Indie rock'],
    members: ['Ellie Rowsell', 'Joff Oddie', 'Theo Ellis', 'Joel Amey'],
    palette: ['#8e44ad', '#2c3e50'],
    history:
      'Con la voce versatile di Ellie Rowsell capace di passare da sussurri delicati a urla grunge, spaziano tra indie folk, grunge e shoegaze in modo fluido.',
    albums: [
      {
        slug: 'visions-of-a-life',
        title: 'Visions of a Life',
        year: 2017,
        tagline: 'Grunge e indie folk senza confini',
        history: 'Vince il Mercury Prize, consolidando la loro fama nel Regno Unito.',
        palette: ['#8e44ad', '#2c3e50'],
        tracks: [
          { title: 'Don\'t Delete the Kisses', durationSec: 328, isHit: true },
          { title: 'Yuk Foo', durationSec: 146 },
        ],
      },
    ],
  },
  {
    slug: 'idles',
    name: 'IDLES',
    formedYear: 2009,
    origin: 'Bristol, Inghilterra',
    genres: ['Post-punk', 'Punk rock'],
    members: ['Joe Talbot', 'Mark Bowen', 'Lee Kiernan', 'Adam Devonshire', 'Jon Beavis'],
    palette: ['#1a1a1a', '#e74c3c'],
    history:
      'Con un post-punk viscerale e testi apertamente politici su mascolinità, classe sociale e salute mentale, diventano tra le voci più rilevanti del rock britannico contemporaneo.',
    albums: [
      {
        slug: 'joy-as-an-act-of-resistance',
        title: 'Joy as an Act of Resistance',
        year: 2018,
        tagline: 'Post-punk politico e catartico',
        history: 'Consolida la loro reputazione di band più incisiva del post-punk britannico contemporaneo.',
        palette: ['#1a1a1a', '#e74c3c'],
        tracks: [
          { title: 'Danny Nedelko', durationSec: 214, isHit: true },
          { title: 'Never Fight a Man with a Perm', durationSec: 174 },
        ],
      },
    ],
  },
  {
    slug: 'fontaines-dc',
    name: 'Fontaines D.C.',
    formedYear: 2017,
    origin: 'Dublino, Irlanda',
    genres: ['Post-punk', 'Rock alternativo'],
    members: ['Grian Chatten', 'Carlos O\'Connell', 'Conor Curley', 'Conor Deegan III', 'Tom Coll'],
    palette: ['#2c3e50', '#95a5a6'],
    history:
      'Band irlandese nata da un collettivo di poesia a Dublino, propone un post-punk letterario e ipnotico, tra le rivelazioni più acclamate del rock europeo recente.',
    albums: [
      {
        slug: 'dogrel',
        title: 'Dogrel',
        year: 2019,
        tagline: 'Poesia post-punk da Dublino',
        history: 'Album d\'esordio acclamato dalla critica, ispirato alla vita quotidiana di Dublino.',
        palette: ['#2c3e50', '#95a5a6'],
        tracks: [
          { title: 'Big', durationSec: 132, isHit: true },
          { title: "Boys in the Better Land", durationSec: 189 },
        ],
      },
    ],
  },
  {
    slug: 'turnstile',
    name: 'Turnstile',
    formedYear: 2010,
    origin: 'Baltimora, Maryland, USA',
    genres: ['Hardcore punk', 'Rock alternativo'],
    members: ['Brendan Yates', 'Pat McCrory', 'Franz Lyons', 'Daniel Fang'],
    palette: ['#1a1a1a', '#f1c40f'],
    history:
      'Partendo dalla scena hardcore punk, aprono il genere a melodie pop, groove funk ed elementi psichedelici, ampliando enormemente il proprio pubblico oltre la nicchia hardcore.',
    albums: [
      {
        slug: 'glow-on',
        title: 'Glow On',
        year: 2021,
        tagline: "L'hardcore si apre al mainstream",
        history: 'Acclamato dalla critica come uno dei migliori dischi rock del 2021, amplia enormemente il loro pubblico.',
        palette: ['#1a1a1a', '#f1c40f'],
        tracks: [
          { title: 'Blackout', durationSec: 194, isHit: true },
          { title: 'Mystery', durationSec: 138, isHit: true },
        ],
      },
    ],
  },
  {
    slug: 'maneskin',
    name: 'Måneskin',
    formedYear: 2016,
    origin: 'Roma, Italia',
    genres: ['Glam rock', 'Rock alternativo'],
    members: ['Damiano David', 'Victoria De Angelis', 'Thomas Raggi', 'Ethan Torchio'],
    palette: ['#c0392b', '#1a1a1a'],
    history:
      'Nati come band di strada a Roma, esplodono a livello internazionale dopo la vittoria dell\'Eurovision 2021, portando un glam rock energico e provocatorio a un pubblico globale.',
    albums: [
      {
        slug: 'teatro-d-ira-vol-i',
        title: "Teatro d'ira - Vol. I",
        year: 2021,
        tagline: 'Il glam rock italiano conquista il mondo',
        history: 'Contiene "Zitti e buoni", vincitore di Sanremo ed Eurovision, che lancia la band a livello mondiale.',
        palette: ['#c0392b', '#1a1a1a'],
        tracks: [
          { title: 'Zitti e buoni', durationSec: 190, isHit: true },
          { title: 'I Wanna Be Your Slave', durationSec: 174, isHit: true },
        ],
      },
    ],
  },
  {
    slug: 'ghost',
    name: 'Ghost',
    formedYear: 2006,
    origin: 'Linköping, Svezia',
    genres: ['Heavy metal', 'Hard rock'],
    members: ['Tobias Forge'],
    palette: ['#1a1a1a', '#95a5a6'],
    history:
      'Con il frontman mascherato da "Papa Emeritus" e coristi anonimi in tonaca, uniscono teatralità occulta e melodie hard rock/pop estremamente orecchiabili.',
    albums: [
      {
        slug: 'meliora',
        title: 'Meliora',
        year: 2015,
        tagline: 'Teatralità occulta e melodie pop',
        history: 'Consolida il loro successo internazionale con un sound hard rock più accessibile.',
        palette: ['#1a1a1a', '#95a5a6'],
        tracks: [
          { title: 'Cirice', durationSec: 328, isHit: true },
          { title: 'Mummy Dust', durationSec: 249 },
        ],
      },
    ],
  },
  {
    slug: 'sleep-token',
    name: 'Sleep Token',
    formedYear: 2016,
    origin: 'Londra, Inghilterra',
    genres: ['Metal alternativo', 'Rock progressivo'],
    members: ['Vessel'],
    palette: ['#1a1a1a', '#3498db'],
    history:
      'Collettivo anonimo e mascherato che fonde metal, R&B e pop in modo del tutto originale, diventando un fenomeno virale e uno dei nomi più discussi della scena rock/metal recente.',
    albums: [
      {
        slug: 'take-me-back-to-eden',
        title: 'Take Me Back to Eden',
        year: 2023,
        tagline: 'Metal e R&B senza precedenti',
        history: 'Consacra la band come fenomeno globale grazie a un sound imprevedibile e a una forte identità visiva anonima.',
        palette: ['#1a1a1a', '#3498db'],
        tracks: [
          { title: 'The Summoning', durationSec: 246, isHit: true },
          { title: 'Chokehold', durationSec: 231, isHit: true },
        ],
      },
    ],
  },
  {
    slug: 'tame-impala',
    name: 'Tame Impala',
    formedYear: 2007,
    origin: 'Perth, Australia',
    genres: ['Rock psichedelico', 'Pop psichedelico'],
    members: ['Kevin Parker'],
    palette: ['#8e44ad', '#e67e22'],
    history:
      'Progetto quasi interamente solista di Kevin Parker, riporta il rock psichedelico al centro della scena pop/rock contemporanea con produzioni curatissime.',
    albums: [
      {
        slug: 'currents',
        title: 'Currents',
        year: 2015,
        tagline: 'Psichedelia e synth-pop moderno',
        history: 'Segna una svolta verso sonorità più dance ed elettroniche, ampliando enormemente il pubblico della band.',
        palette: ['#8e44ad', '#e67e22'],
        tracks: [
          { title: "The Less I Know the Better", durationSec: 216, isHit: true },
          { title: 'Let It Happen', durationSec: 468 },
        ],
      },
    ],
  },
  {
    slug: 'the-war-on-drugs',
    name: 'The War on Drugs',
    formedYear: 2005,
    origin: 'Philadelphia, Pennsylvania, USA',
    genres: ['Rock alternativo', 'Heartland rock'],
    members: ['Adam Granduciel', 'David Hartley'],
    palette: ['#2c3e50', '#e67e22'],
    history:
      'Fondono heartland rock in stile Springsteen/Dylan con texture sonore atmosferiche e sintetiche, diventando una delle band più acclamate dalla critica rock recente.',
    albums: [
      {
        slug: 'lost-in-the-dream',
        title: 'Lost in the Dream',
        year: 2014,
        tagline: 'Heartland rock atmosferico',
        history: 'Acclamato dalla critica come uno dei migliori album rock del decennio.',
        palette: ['#2c3e50', '#e67e22'],
        tracks: [
          { title: 'Red Eyes', durationSec: 240, isHit: true },
          { title: 'Under the Pressure', durationSec: 508 },
        ],
      },
    ],
  },
  {
    slug: 'foals',
    name: 'Foals',
    formedYear: 2005,
    origin: 'Oxford, Inghilterra',
    genres: ['Rock alternativo', 'Math rock'],
    members: ['Yannis Philippakis', 'Jimmy Smith', 'Jack Bevan'],
    palette: ['#16a085', '#1a1a1a'],
    history:
      'Nati nella scena math rock di Oxford, evolvono verso un rock alternativo sempre più diretto e ad alta energia, restando una delle band più influenti del rock britannico 2010.',
    albums: [
      {
        slug: 'holy-fire',
        title: 'Holy Fire',
        year: 2013,
        tagline: 'Math rock che diventa arena rock',
        history: 'Segna la loro definitiva consacrazione internazionale con un sound più diretto e potente.',
        palette: ['#16a085', '#1a1a1a'],
        tracks: [
          { title: 'My Number', durationSec: 251, isHit: true },
          { title: 'Inhaler', durationSec: 273, isHit: true },
        ],
      },
    ],
  },
  {
    slug: 'bring-me-the-horizon',
    name: 'Bring Me the Horizon',
    formedYear: 2004,
    origin: 'Sheffield, Inghilterra',
    genres: ['Metalcore', 'Rock alternativo'],
    members: ['Oli Sykes', 'Lee Malia', 'Matt Kean', 'Jordan Fish'],
    palette: ['#1a1a1a', '#e74c3c'],
    history:
      'Partiti dal deathcore più estremo, si reinventano album dopo album fino a un sound alternative/elettronico di grande accessibilità, senza mai perdere credibilità nella scena metal.',
    albums: [
      {
        slug: 'sempiternal',
        title: 'Sempiternal',
        year: 2013,
        tagline: 'Il metalcore si apre all\'elettronica',
        history: 'Segna la svolta verso un sound più melodico ed elettronico, ampliando notevolmente il loro pubblico.',
        palette: ['#1a1a1a', '#e74c3c'],
        tracks: [
          { title: 'Can You Feel My Heart', durationSec: 245, isHit: true },
          { title: 'Sleepwalking', durationSec: 216, isHit: true },
        ],
      },
    ],
  },
  {
    slug: 'nothing-but-thieves',
    name: 'Nothing But Thieves',
    formedYear: 2012,
    origin: 'Southend-on-Sea, Inghilterra',
    genres: ['Rock alternativo'],
    members: ['Conor Mason', 'Joe Langridge-Brown', 'Dominic Craik', 'Philip Blake', 'James Price'],
    palette: ['#2c3e50', '#c0392b'],
    history:
      'Con la voce dal falsetto distintivo di Conor Mason, propongono un rock alternativo raffinato che spazia da ballate intense a momenti più aggressivi.',
    albums: [
      {
        slug: 'nothing-but-thieves-album',
        title: 'Nothing But Thieves',
        year: 2015,
        tagline: 'Rock alternativo elegante e diretto',
        history: 'Album d\'esordio che li consacra come una delle rock band più promettenti del Regno Unito.',
        palette: ['#2c3e50', '#c0392b'],
        tracks: [
          { title: 'Trip Switch', durationSec: 223, isHit: true },
          { title: 'Ban All the Music', durationSec: 216 },
        ],
      },
    ],
  },
]
