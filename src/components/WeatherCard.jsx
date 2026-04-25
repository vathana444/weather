export function WeatherCard({ weather }) {
  return (
    <article className="weather-card">
      <div>
        <p className="weather-location">
          {weather.city}, {weather.country}
        </p>
        <p className="weather-condition">{weather.condition}</p>
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

      <p className="updated">Updated: {weather.updatedAt}</p>
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
