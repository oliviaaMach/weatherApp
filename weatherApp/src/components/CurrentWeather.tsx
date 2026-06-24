import FavoritesIcon from "../../public/svg/favorites.svg"
import FavoritesIconDark from "../../public/svg/favorite_dark.svg"
import SavedFavoriteIcon from "../../public/svg/saved_favorite.svg"
import SavedFavoriteIconDark from "../../public/svg/saved_favorite_dark.svg"
import "./CurrentWeather.css"
import Card from "./Card";
import { formatTemperature, type TemperatureUnit } from "../utils/temperature";
import type { Theme } from "../types/preferences";

type Props = {
    city: string;
    date: string;
    time: string;
    temperature: number;
    windSpeed: number;
    onFavorite: () => void;
    isFavorite: boolean;
    theme: Theme;
    temperatureUnit: TemperatureUnit;
}

export default function CurrentWeather({
    city,
    date,
    time,
    temperature,
    windSpeed,
    onFavorite,
    isFavorite,
    theme,
    temperatureUnit,
}: Props) {
    const favoriteIcon = isFavorite
        ? theme === "dark" ? SavedFavoriteIconDark : SavedFavoriteIcon
        : theme === "dark" ? FavoritesIconDark : FavoritesIcon;

    return (
        <Card title={city} className="currentWeatherCard">
            <button className="favoriteButton" onClick={onFavorite}>
                <img src={favoriteIcon} className="navIcons" />
            </button>
            <div className="card__header">
                <p>{date} {time}</p>
            </div>
            <div className="card__body">
                <p className="temperature__p">{formatTemperature(temperature, temperatureUnit)}</p>
                <p>{windSpeed} km/h</p>
            </div>
        </Card>
    )
}
