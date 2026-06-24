import { useEffect, useState } from "react";
import FavoriteWeatherCard from "../components/FavoriteWeatherCard";
import { translations, type Language } from "../i18n/translations";
import { getFavorites, removeFavorite } from "../services/favoriteStorage";
import type { FavoriteCity } from "../services/favoriteStorage";
import { getWeather } from "../services/weatherAPI";
import type { WeatherData } from "../services/weatherAPI";
import type { TemperatureUnit } from "../utils/temperature";
import "./Favorites.css";

type Props = {
    language: Language;
    temperatureUnit: TemperatureUnit;
};

export default function Favorites({ language, temperatureUnit }: Props) {
    const [favorites, setFavorites] = useState<FavoriteCity[]>(() => getFavorites());
    const [favoriteWeather, setFavoriteWeather] = useState<WeatherData[]>([]);
    const t = translations[language];

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
        setFavorites(getFavorites());
    }

    return (
        <section className="page favorites">
            <h2>{t.navbar.favorite}</h2>
            {favorites.length === 0 && <p>{t.favorites.empty}</p>}
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
                );
            })}
        </section>
    );
}
