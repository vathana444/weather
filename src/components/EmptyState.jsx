export function EmptyState() {
  return (
    <div className="empty-state">
      <span className="empty-icon" aria-hidden="true" />
      <div>
        <h3>Ready for a forecast</h3>
        <p>Search for a city to see current weather data.</p>
      </div>
    </div>
  )
}
