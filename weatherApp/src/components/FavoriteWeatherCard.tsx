import Card from "./Card";
import type { FavoriteCity } from "../services/favoriteStorage";
import type { WeatherData } from "../services/weatherAPI";
import "./FavoriteWeatherCard.css"
import RemoveIcon from "../../public/svg/remove.svg"

type Props = {
    favorite: FavoriteCity;
    weather: WeatherData;
    onRemove: () => void;
};

export default function FavoriteWeatherCard({ favorite, weather, onRemove }: Props) {
    return (
        <Card title={favorite.name} className="favoriteWeatherCard">
            <button className="favoriteWeatherCard__remove" onClick={onRemove}>
                <img src={RemoveIcon} alt="Ta bort" />
            </button>
            <div className="favoriteWeatherCard__weather">
                <p className="favoriteWeatherCard__temperature">{weather.current.temperature_2m}°</p>
                <p>{weather.current.wind_speed_10m} km/h</p>
            </div>
        </Card>
    );
}
