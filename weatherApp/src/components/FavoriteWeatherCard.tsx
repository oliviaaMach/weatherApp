import Card from "./Card";
import type { FavoriteCity } from "../services/favoriteStorage";
import type { WeatherData } from "../services/weatherAPI";
import "./FavoriteWeatherCard.css"
import RemoveIcon from "../../public/svg/remove.svg"
import { formatTemperature, type TemperatureUnit } from "../utils/temperature";

type Props = {
    favorite: FavoriteCity;
    weather: WeatherData;
    onRemove: () => void;
    temperatureUnit: TemperatureUnit;
};

export default function FavoriteWeatherCard({ favorite, weather, onRemove, temperatureUnit }: Props) {
    return (
        <Card title={favorite.name} className="favoriteWeatherCard">
            <button className="favoriteWeatherCard__remove" onClick={onRemove}>
                <img src={RemoveIcon} alt="Ta bort" />
            </button>
            <div className="favoriteWeatherCard__weather">
                <p className="favoriteWeatherCard__temperature">{formatTemperature(weather.current.temperature_2m, temperatureUnit)}</p>
                <p>{weather.current.wind_speed_10m} km/h</p>
            </div>
        </Card>
    );
}
