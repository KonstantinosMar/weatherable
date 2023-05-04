import './Loading.scss'
const Loading = () => {
    return (
        <div className="city-item loading">
            <div className="info">
                <p className="temp">--°C</p>
                <p className="weather">Loading...</p>
                <p className="city">&nbsp;</p>
                <p className="coords">&nbsp;</p>
            </div>
            <div className="icon-wrapper"></div>
        </div>
    )
}

export default Loading