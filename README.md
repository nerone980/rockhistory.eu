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

Il workflow `.github/workflows/deploy-aruba.yml` builda il sito e carica il contenuto di `dist/` sull'hosting Aruba via FTPS a ogni push su `main` (o manualmente da GitHub Actions).

Prima di usarlo, configura questi secret nel repository (**Settings → Secrets and variables → Actions**):

- `FTP_SERVER`: host FTP fornito da Aruba (es. `ftpXXX.aruba.it`)
- `FTP_USERNAME`: utenza FTP
- `FTP_PASSWORD`: password dell'utenza FTP

I file vengono caricati nella root dello spazio FTP (`server-dir: ./`). Il workflow non cancella file già presenti sul server che non fanno parte della build (`dangerous-clean-slate: false`); se in futuro serve una sincronizzazione a specchio, va valutato con attenzione perché è un'operazione distruttiva.
