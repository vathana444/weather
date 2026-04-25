import axios from 'axios'

const weatherCodes = {
  0: 'Clear sky',
  1: 'Mainly clear',
  2: 'Partly cloudy',
  3: 'Overcast',
  45: 'Fog',
  48: 'Depositing rime fog',
  51: 'Light drizzle',
  53: 'Moderate drizzle',
  55: 'Dense drizzle',
  61: 'Slight rain',
  63: 'Moderate rain',
  65: 'Heavy rain',
  71: 'Slight snow',
  73: 'Moderate snow',
  75: 'Heavy snow',
  80: 'Rain showers',
  81: 'Heavy rain showers',
  82: 'Violent rain showers',
  95: 'Thunderstorm',
}

const geocodingApi = axios.create({
  baseURL: 'https://geocoding-api.open-meteo.com/v1',
})

const forecastApi = axios.create({
  baseURL: 'https://api.open-meteo.com/v1',
})

export async function getWeatherByCity(city) {
  const cleanCity = city.trim()

  if (!cleanCity) {
    throw new Error('Please enter a city name.')
  }

  const location = await getLocation(cleanCity)
  const weather = await getCurrentWeather(location)

  return {
    ...location,
    ...weather,
  }
}

async function getLocation(city) {
  const { data } = await geocodingApi.get('/search', {
    params: {
      name: city,
      count: 1,
      language: 'en',
      format: 'json',
    },
  })

  const location = data.results?.[0]

  if (!location) {
    throw new Error(`No weather location found for "${city}".`)
  }

  return {
    city: location.name,
    country: location.country,
    latitude: location.latitude,
    longitude: location.longitude,
    timezone: location.timezone,
  }
}

async function getCurrentWeather(location) {
  const { data } = await forecastApi.get('/forecast', {
    params: {
      latitude: location.latitude,
      longitude: location.longitude,
      current:
        'temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m',
      timezone: location.timezone,
    },
  })

  const current = data.current

  return {
    temperature: Math.round(current.temperature_2m),
    feelsLike: Math.round(current.apparent_temperature),
    humidity: current.relative_humidity_2m,
    windSpeed: Math.round(current.wind_speed_10m),
    condition: weatherCodes[current.weather_code] ?? 'Unknown weather',
    updatedAt: current.time,
  }
}
