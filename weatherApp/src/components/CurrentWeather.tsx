import FavoritesIcon from "../../public/svg/favorites.svg"
import SavedFavoriteIcon from "../../public/svg/saved_favorite.svg"
import "./CurrentWeather.css"
import Card from "./Card";

type Props = {
    city: string;
    date: string;
    time: string;
    temperature: number;
    windSpeed: number;
    onFavorite: () => void;
    isFavorite: boolean;
}

export default function CurrentWeather({
    city,
    date,
    time,
    temperature,
    windSpeed,
    onFavorite,
    isFavorite,
}: Props) {
    const favoriteIcon = isFavorite ? SavedFavoriteIcon : FavoritesIcon;

    return (
        <Card title={city} className="currentWeatherCard">
            <button className="favoriteButton" onClick={onFavorite}>
                <img src={favoriteIcon} className="navIcons" />
            </button>
            <div className="card__header">
                <p>{date} {time}</p>
            </div>
            <div className="card__body">
                <p className="temperature__p">{temperature}°</p>
                <p>{windSpeed} km/h</p>
            </div>
        </Card>
    )
}
