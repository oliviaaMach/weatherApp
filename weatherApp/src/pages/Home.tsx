import Forecast from "../components/Forecast";
import SearchBar from "../components/SearchBar";
import Details from "../components/Details"
import FiveDays from "../components/FiveDays";
import { useWeather } from "../hooks/useWeather";
import "./Home.css"

export default function Home() {
    const {
        city,
        setCity,
        weather,
        searchedCity,
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
                <Forecast 
                weather={weather}
                city={searchedCity}
                />
            </div>

            <aside className="details">
                <FiveDays />
                <Details />
            </aside>
        </section>
    )
}
