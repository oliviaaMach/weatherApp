import Forcast from "../components/Forecast";
import SearchBar from "../components/SearchBar";
import { useWeather } from "../hooks/useWeather";

export default function Home() {
    const {
        city,
        setCity,
        // weather,
        handleSearch
    } = useWeather();
    return (
        <>
        <Forcast />
        <SearchBar 
            value={city}
            onChange={setCity}
            onSearch={handleSearch}
            />
        </>
    )
}