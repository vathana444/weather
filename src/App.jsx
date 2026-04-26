import { useState } from 'react'
import './App.css'
import { getWeatherByCity } from './api/weatherApi'
import { EmptyState } from './components/EmptyState'
import { SearchForm } from './components/SearchForm'
import { StatusMessage } from './components/StatusMessage'
import { WeatherCard } from './components/WeatherCard'

function App() {
  const [weather, setWeather] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  async function loadWeather(cityName) {
    setIsLoading(true)
    setError('')

    try {
      const weatherData = await getWeatherByCity(cityName)
      setWeather(weatherData)
    } catch (err) {
      setWeather(null)
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="app-shell">
      <section className="hero-copy" aria-labelledby="app-title">
        <p className="eyebrow">Live weather</p>
        <h1 id="app-title">Plan your day with a cleaner forecast.</h1>
        <p className="intro">
          Search any city and get current conditions, humidity, wind, and feels-like
          temperature from Open-Meteo.
        </p>
        <div className="signal-row" aria-label="Weather highlights">
          <span>Current</span>
          <span>Local time</span>
          <span>No key required</span>
        </div>
      </section>

      <section className="weather-panel">
        <div className="panel-header">
          <p className="panel-kicker">Current forecast</p>
          <h2>City lookup</h2>
        </div>

        <SearchForm onSearch={loadWeather} isLoading={isLoading} />

        {isLoading && <StatusMessage type="loading" text="Loading weather..." />}
        {error && <StatusMessage type="error" text={error} />}
        {!isLoading && !error && weather && <WeatherCard weather={weather} />}
        {!isLoading && !error && !weather && <EmptyState />}
      </section>
    </main>
  )
}

export default App
