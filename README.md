# Weather App

A small React + Vite weather app that uses Axios to fetch current weather data from the Open-Meteo API.

## Project Flow

The app is split into simple parts so the code is easy to follow:

- `src/App.jsx` controls the main state: loading, error, and weather result.
- `src/components/SearchForm.jsx` handles the city search form.
- `src/api/weatherApi.js` uses Axios to call the geocoding and forecast APIs.
- `src/components/WeatherCard.jsx` displays the weather data.
- `src/components/StatusMessage.jsx` and `src/components/EmptyState.jsx` show simple UI states.

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to GitHub Pages

If your site shows a blank page on GitHub Pages, it usually means Pages is serving the source `index.html` instead of the built `dist` output.

Use this deployment flow to publish the compiled app:

```bash
npm install
npm run deploy
```

Then in GitHub:

1. Open **Settings → Pages**.
2. Set **Source** to **GitHub Actions**.
3. Open **Actions** and run/verify the **Deploy to GitHub Pages** workflow succeeded.

The workflow publishes the Vite production build from `dist`, so GitHub Pages serves bundled JS/CSS instead of `/src/main.jsx`.

## API

This project uses the free Open-Meteo APIs:

- Geocoding API for finding city coordinates
- Forecast API for current weather
