import { useState } from 'react'

export function SearchForm({ onSearch, isLoading }) {
  const [inputValue, setInputValue] = useState('')
  const suggestedCities = ['Phnom Penh', 'Tokyo', 'London']

  function handleSubmit(event) {
    event.preventDefault()
    onSearch(inputValue)
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label htmlFor="city">City name</label>
      <div className="search-row">
        <input
          id="city"
          type="text"
          value={inputValue}
          placeholder="Try Phnom Penh, Tokyo, London"
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Searching' : 'Search'}
        </button>
      </div>
      <div className="city-suggestions" aria-label="Suggested cities">
        {suggestedCities.map((city) => (
          <button
            key={city}
            type="button"
            onClick={() => {
              setInputValue(city)
              onSearch(city)
            }}
            disabled={isLoading}
          >
            {city}
          </button>
        ))}
      </div>
    </form>
  )
}
