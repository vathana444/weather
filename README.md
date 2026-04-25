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

## API

This project uses the free Open-Meteo APIs:

- Geocoding API for finding city coordinates
- Forecast API for current weather
