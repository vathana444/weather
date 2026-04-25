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
      <section className="weather-panel">
        <div className="panel-header">
          <p className="eyebrow">Current forecast</p>
          <h1>Check current weather</h1>
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
