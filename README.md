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

I contenuti (band, discografia, tracklist) vivono in `src/data/bands.ts`, tipizzati in `src/types.ts`. Per aggiungere una band o un disco è sufficiente estendere l'array `bands`.

## Deploy automatico su Aruba

Il workflow `.github/workflows/deploy-aruba.yml` builda il sito e carica il contenuto di `dist/` sull'hosting Aruba via FTP a ogni push su `main` (o manualmente da GitHub Actions).

Prima di usarlo, configura questi secret nel repository (**Settings → Secrets and variables → Actions**):

- `FTP_SERVER`: host FTP fornito da Aruba (es. `ftpXXX.aruba.it`)
- `FTP_USERNAME`: utenza FTP
- `FTP_PASSWORD`: password dell'utenza FTP

I file vengono caricati nella root dello spazio FTP tramite `lftp mirror --reverse` (preferito alla action `FTP-Deploy-Action`, che su alcuni server fallisce nel creare nuove sottocartelle). Il comando non usa `--delete`, quindi non cancella file già presenti sul server che non fanno parte della build; se in futuro serve una sincronizzazione a specchio completa, va valutato con attenzione perché è un'operazione distruttiva.

Nota: il protocollo usato è FTP semplice, non cifrato — scelta esplicita per compatibilità con l'hosting Aruba. Le credenziali restano al sicuro nei secret di GitHub Actions e non compaiono nei log, ma il traffico FTP verso il server non è cifrato.
