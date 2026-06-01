import { useEffect, useState } from "react";
import { getWeather, searchCity } from "../services/weatherAPI"

export function useWeather() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState<any>(null);
    const [searchedCity, setSearchedCity] = useState("Stockholm")

    async function handleSearch() {
        const cityData = await searchCity(city);
        const result = cityData.results?.[0];
        
        if (!result) return;

        const weatherData = await getWeather(
            result.latitude,
            result.longitude
        );
        setSearchedCity(result.name)
        setWeather(weatherData);
    }

    useEffect(() => {
        async function loadDefaultWeather() {
            const weatherData = await getWeather(59.3293, 18.0686);
            setWeather(weatherData);
        }
        loadDefaultWeather();
    }, []);

    return {
        city,
        setCity,
        weather,
        searchedCity,
        handleSearch
    }
}