import { useState } from "react";
import { getWeather, searchCity } from "../services/weatherAPI"

export function useWeather() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState<any>(null);

    async function handleSearch() {
        const cityData = await searchCity(city);
        const result = cityData.results?.[0];
        
        if (!result) return;

        const weatherData = await getWeather(
            result.latitude,
            result.longitude
        );
        setWeather(weatherData);
    }

    return {
        city,
        setCity,
        weather,
        handleSearch
    }
}