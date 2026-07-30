# RockHistory

Sito dedicato alla storia del rock dal 1960 a oggi: locandine delle band, storia del gruppo e, per ogni disco, tracklist con le hit evidenziate e la storia dell'album.

## Stack

- React + TypeScript
- Vite
- Tailwind CSS v4
- React Router

## Sviluppo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Struttura dati

I contenuti (band, discografia, tracklist) sono tipizzati in `src/types.ts` e vivono in due file, uniti nell'array `bands` esportato da `src/data/bands.ts`:

- `src/data/bands.ts` → `coreBands`: le prime 10 band storiche
- `src/data/bands-more.ts` → `moreBands`: le restanti ~90, fino a un totale di 100 band dal 1960 a oggi

Per aggiungere una band o un disco è sufficiente estendere uno dei due array (indifferentemente quale, sono concatenati).

## Deploy automatico su Aruba

Il workflow `.github/workflows/deploy-aruba.yml` builda il sito (`npm ci && npm run build`) e carica il contenuto di `dist/` sull'hosting Aruba via FTP (action `SamKirkland/FTP-Deploy-Action`) a ogni push su `main`.

Prima di usarlo, configura questi secret nel repository (**Settings → Secrets and variables → Actions**):

- `FTP_SERVER`: host FTP fornito da Aruba (es. `ftpXXX.aruba.it`)
- `FTP_USERNAME`: utenza FTP
- `FTP_PASSWORD`: password dell'utenza FTP

I file vengono caricati in `server-dir: /www.rockhistory.eu/` — la cartella che Aruba associa a questo dominio in un piano hosting multi-dominio (non la root FTP). Se cambi dominio o piano hosting, verifica il percorso corretto nel pannello Aruba prima di modificarlo.

Il file `public/.htaccess` (copiato automaticamente in `dist/` a ogni build) abilita il routing client-side della SPA su Apache: senza queste regole, aprire direttamente una sotto-rotta (es. `/band/the-beatles`) o la root del sito darebbe 404.

## Immagini reali (foto band, copertine dischi)

Per usare foto/copertine reali al posto della locandina generata via CSS:

1. Aggiungi il file immagine in `public/images/bands/<slug-band>.jpg` (foto band) o `public/images/albums/<slug-band>/<slug-album>.jpg` (copertina disco)
2. In `src/data/bands.ts`, imposta `photoImage: '/images/bands/<slug-band>.jpg'` sulla band, oppure `coverImage: '/images/albums/<slug-band>/<slug-album>.jpg'` sull'album

Se il campo non è impostato, si usa automaticamente la locandina stilizzata. Attenzione: foto di band e copertine sono materiale protetto da copyright — verifica di avere i diritti/una licenza prima di pubblicarle su un sito pubblico.

## Privacy e cookie

Il sito non usa cookie di profilazione, analytics o servizi di terze parti. Anche i font (Anton, Oswald) sono ospitati localmente in `public/fonts/` invece che caricati da Google Fonts, per non condividere l'IP dei visitatori con terze parti. Non essendoci cookie non tecnici, non è presente (né necessario) un banner di consenso: solo un avviso informativo in footer che rimanda a `/privacy`.

Per rigenerare i file font locali (es. per cambiare font o pesi): scaricare i `.woff2` dal subset "latin" della relativa famiglia da Google Fonts e sostituire i file in `public/fonts/`, aggiornando i riferimenti `@font-face` in `src/index.css`.

## SEO

- Title e meta description sono impostati dinamicamente per ogni pagina (home, band, disco) tramite l'hook `src/hooks/useDocumentMeta.ts`.
- `public/sitemap.xml` viene rigenerata automaticamente ad ogni build (script `npm run generate-sitemap`, eseguito come `prebuild`) leggendo tutte le band e gli album da `src/data/bands.ts`.
- `public/robots.txt` consente l'indicizzazione e punta alla sitemap.
