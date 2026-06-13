import "./CurrentWeather.css"
import Card from "./Card";

type Props = {
    city: string;
    date: string;
    time: string;
    temperature: number;
    windSpeed: number;
    onFavorite: () => void;
}

export default function CurrentWeather({
    city,
    date,
    time,
    temperature,
    windSpeed,
    onFavorite,
}: Props) {
    return (
        <Card title={city} className="currentWeatherCard">
            <div className="card__header">
                <button className="favoriteButton" onClick={onFavorite}>
                    ★
                </button>
                <p>{date} {time}</p>
            </div>
            <div className="card__body">
                <p className="temperature__p">{temperature}°</p>
                <p>{windSpeed} km/h</p>
            </div>
        </Card>
    )
}
