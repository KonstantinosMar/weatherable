import { useState, useEffect } from "react"

const useFetchWeather = (city) => {
    const [isLoading, setIsLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")
    const [weather, setWeather] = useState({})

    useEffect(() => {
        const API_KEY = "2b9db91f8d8493f3374df65ee36118ce"
        const GEOCODING_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`
        const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric`

        const fetchData = async () => {
            try {
                setIsLoading(true)
                const geocodingResponse = await fetch(GEOCODING_URL)
                if (geocodingResponse.ok) {
                    const geocodingResults = await geocodingResponse.json()
                    if (!geocodingResults.length) {
                        throw new Error(`No results found for ${city}`)
                    }
                    const { lat, lon } = geocodingResults[0]
                    const weatherResponse = await fetch(`${WEATHER_URL}&lat=${lat}&lon=${lon}`)
                    if (weatherResponse.ok) {
                        const weatherResults = await weatherResponse.json()
                        setWeather(weatherResults)
                    } else {
                        throw new Error(`Error ${weatherResponse.status}: ${weatherResponse.statusText}`)
                    }
                } else {
                    throw new Error(`Error ${geocodingResponse.status}: ${geocodingResponse.statusText}`)
                }
            } catch (error) {
                setErrorMsg(error.message)
            } finally {
                setIsLoading(false)
            }
        }

        fetchData()
    }, [city])

    return { isLoading, errorMsg, weather }
}

export default useFetchWeather
