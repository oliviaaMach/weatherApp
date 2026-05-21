import Forecast from "../components/Forecast";
import SearchBar from "../components/SearchBar";
import { useWeather } from "../hooks/useWeather";
import "./Home.css"

export default function Home() {
    const {
        city,
        setCity,
        // weather,
        handleSearch
    } = useWeather();
    return (
        <>
            <div className="main">
                <Forecast />
            </div>

            <SearchBar 
                value={city}
                onChange={setCity}
                onSearch={handleSearch}
                />
        </>
    )
}