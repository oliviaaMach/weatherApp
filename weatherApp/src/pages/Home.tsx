import Forecast from "../components/Forecast";
import SearchBar from "../components/SearchBar";
import Details from "../components/Details"
import FiveDays from "../components/FiveDays";
import { useWeather } from "../hooks/useWeather";
import "./Home.css"
import Hourly from "../components/Hourly";

export default function Home() {
    const {
        city,
        setCity,
        weather,
        searchedCity,
        loading,
        error,
        handleSearch
    } = useWeather();
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
