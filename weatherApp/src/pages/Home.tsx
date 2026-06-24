import Forecast from "../components/Forecast";
import SearchBar from "../components/SearchBar";
import Details from "../components/Details"
import FiveDays from "../components/FiveDays";
import "./Home.css"
import Hourly from "../components/Hourly";
import { useState } from "react";
import type { WeatherData } from "../services/weatherAPI";
import { addFavorite, getFavorites, removeFavorite } from "../services/favoriteStorage";
import type { WeatherLocation } from "../services/weatherStorage";
import { type Language } from "../i18n/translations";
import type { TemperatureUnit } from "../utils/temperature";

type Props = {
    weatherState: {
        city: string;
        setCity: (city: string) => void;
        weather: WeatherData | null;
        searchedCity: string;
        loading: boolean;
        error: string;
        handleSearch: () => void;
        location: WeatherLocation;
    }
    language: Language;
    theme: "light" | "dark";
    temperatureUnit: TemperatureUnit;
}


export default function Home({ weatherState, language, theme, temperatureUnit }: Props) {
    const {
        city,
        setCity,
        weather,
        searchedCity,
        loading,
        error,
        handleSearch,
        location
    } = weatherState;

    const [favorites, setFavorites] = useState(() => getFavorites());
    const isFavorite = favorites.some(
        (favorite) => favorite.name.toLowerCase() === searchedCity.toLowerCase()
    );

    function handleFavorite() {
        if (isFavorite) {
            removeFavorite(searchedCity);
        } else {
            addFavorite({
                name: searchedCity,
                location
            });
        }

        setFavorites(getFavorites());
    }

    return (
        <section className="page home">
            <div className="search">
                <SearchBar
                    value={city}
                    onChange={setCity}
                    onSearch={handleSearch}
                />
            </div>

            <div className="forecast">
                {loading && <p>Loading weather...</p>}
                {error && <p>{error}</p>}
                {!loading && !error && (
                    <Forecast
                        weather={weather}
                        city={searchedCity}
                        onFavorite={handleFavorite}
                        isFavorite={isFavorite}
                        language={language}
                        theme={theme}
                        temperatureUnit={temperatureUnit}
                    />
                )}
            </div>

            <div className="fiveDays">
                {loading && <p>Loading weather...</p>}
                {error && <p>{error}</p>}
                {!loading && !error && (
                    <FiveDays
                        weather={weather}
                        language={language}
                        temperatureUnit={temperatureUnit}/>

                )}
            </div>

            <div className="hourly">
                {loading && <p>Loading weather...</p>}
                {error && <p>{error}</p>}
                {!loading && !error && (
                    <Hourly
                        weather={weather}
                        language={language}
                        temperatureUnit={temperatureUnit}
                    />
                )}
            </div>

            <aside className="details">
                {loading && <p>Loading weather...</p>}
                {error && <p>{error}</p>}
                {!loading && !error && (
                    <Details
                        weather={weather}
                        language={language}
                        theme={theme}
                    />
                )}
            </aside>
        </section>
    )
}
