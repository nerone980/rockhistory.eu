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
