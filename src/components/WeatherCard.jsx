export function WeatherCard({ weather }) {
  const updatedAt = new Intl.DateTimeFormat('en', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(weather.updatedAt))

  return (
    <article className="weather-card">
      <div className="weather-main">
        <div>
          <p className="weather-location">
            {weather.city}, {weather.country}
          </p>
          <p className="weather-condition">{weather.condition}</p>
        </div>
        <span className="weather-mark" aria-hidden="true" />
      </div>

      <div className="temperature-row">
        <span className="temperature">{weather.temperature}</span>
        <span className="degree">C</span>
      </div>

      <div className="weather-stats">
        <Stat label="Feels like" value={`${weather.feelsLike} C`} />
        <Stat label="Humidity" value={`${weather.humidity}%`} />
        <Stat label="Wind" value={`${weather.windSpeed} km/h`} />
      </div>

      <p className="updated">Updated {updatedAt}</p>
    </article>
  )
}

function Stat({ label, value }) {
  return (
    <div className="stat">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  )
}
