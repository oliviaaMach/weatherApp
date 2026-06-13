import Forecast from "../components/Forecast";
import SearchBar from "../components/SearchBar";
import Details from "../components/Details"
import FiveDays from "../components/FiveDays";
import "./Home.css"
import Hourly from "../components/Hourly";
import type { WeatherData } from "../services/weatherAPI";
import { addFavorite } from "../services/favoriteStorage";
import type { WeatherLocation } from "../services/weatherStorage";

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
}


export default function Home({ weatherState }: Props) {
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
    return (
        <section className="home">
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
                        onFavorite={() => addFavorite({
                            name: searchedCity,
                            location
                        })}
                    />
                )}
            </div>

            <div className="fiveDays">
                {loading && <p>Loading weather...</p>}
                {error && <p>{error}</p>}
                {!loading && !error && (
                    <FiveDays
                        weather={weather}/>
                )}
            </div>

            <div className="hourly">
                {loading && <p>Loading weather...</p>}
                {error && <p>{error}</p>}
                {!loading && !error && (
                    <Hourly
                        weather={weather}
                    />
                )}
            </div>

            <aside className="details">
                {loading && <p>Loading weather...</p>}
                {error && <p>{error}</p>}
                {!loading && !error && (
                    <Details
                        weather={weather}
                    />
                )}
            </aside>
        </section>
    )
}
