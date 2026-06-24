import { useEffect, useState } from "react"
import "./Favorites.css"
import { getFavorites, removeFavorite } from "../services/favoriteStorage"
import type { FavoriteCity } from "../services/favoriteStorage"
import { getWeather } from "../services/weatherAPI";
import type { WeatherData } from "../services/weatherAPI";
import FavoriteWeatherCard from "../components/FavoriteWeatherCard";
import type { TemperatureUnit } from "../utils/temperature";

type Props = {
    temperatureUnit: TemperatureUnit;
};

export default function Favorites({ temperatureUnit }: Props) {
    const [favorites, setFavorites] = useState<FavoriteCity[]>(() => getFavorites());
    const [favoriteWeather, setFavoriteWeather] = useState<WeatherData[]>([]);

    useEffect(() => {
        async function loadFavoriteWeather() {
            const weatherData = await Promise.all(
                favorites.map((favorite) =>
                    getWeather(
                        favorite.location.latitude,
                        favorite.location.longitude
                    )
                )
            );

            setFavoriteWeather(weatherData);
        }

        loadFavoriteWeather();
    }, [favorites]);

    function handleRemove(cityName: string) {
        removeFavorite(cityName);
        setFavorites(getFavorites())
    }

    return (
        <section className="page favorites">
            <h2>Favoriter</h2>
            {favorites.length === 0 && <p>Inga favoriter tillagd än.</p>}
            {favorites.map((favorite, index) => {
                const weather = favoriteWeather[index];

                if (!weather) return null;

                return (
                    <div key={favorite.name}>
                        <FavoriteWeatherCard
                            favorite={favorite}
                            weather={weather}
                            onRemove={() => handleRemove(favorite.name)}
                            temperatureUnit={temperatureUnit}
                        />
                    </div>
                )
            })}
        </section>
    )
}
