import useFetchWeather from "../../hooks/useWeatherFetch"
import './Item.scss'
import images from "../../assets/images/weather-icons"
import Loading from "../loading/Loading"
import {memo} from "react";

const Item = memo(({city}) => {
    const {isLoading, errorMsg, weather} = useFetchWeather(city)
    const lat = weather?.coord?.lat > 0 ? '° N' : '° S'
    const lon = weather?.coord?.lon > 0 ? '° E' : '° W'

    return (
        <div>
            {isLoading && <Loading />}
            {errorMsg && <div className="city-item message">{errorMsg}</div>}
            {weather.name && (
                <div className="city-item">
                    <div className="info">
                        <p className="temp">{parseInt(weather.main.temp)}°C</p>
                        <p className="weather">{weather.weather[0].description}</p>
                        <p className="city">{weather.name}, {weather.sys.country}</p>
                        <p className="coords">{weather.coord.lat + lat}, {weather.coord.lon + lon}</p>
                    </div>
                    <div className="icon-wrapper">
                        <img src={images[weather.weather[0].icon]} alt=""/>
                    </div>
                </div>
            )}
        </div>
    )
})

export default Item
