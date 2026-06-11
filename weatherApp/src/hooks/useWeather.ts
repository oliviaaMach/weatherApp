import { useEffect, useState } from "react";
import { getWeather, searchCity } from "../services/weatherAPI"
import type { WeatherData } from "../services/weatherAPI"
import { getCachedWeather, setCachedWeather } from "../services/weatherStorage";

export function useWeather() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [searchedCity, setSearchedCity] = useState("Stockholm")
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    async function handleSearch() {
        setLoading(true);
        setError("");

        try {
            const cityData = await searchCity(city);
            const result = cityData.results?.[0];

            if (!result) {
                setError("Staden kunde inte hittas.");
                return;
            }

            const weatherData = await getWeather(
                result.latitude,
                result.longitude
            );

            setSearchedCity(result.name)
            setWeather(weatherData);
            setCachedWeather(weatherData, result.name);
        } catch {
            setError("Kunde inte hämta väderdata just nu.");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        async function loadDefaultWeather() {
            const cachedWeather = getCachedWeather();

            if (cachedWeather) {
                setWeather(cachedWeather.weather);
                setSearchedCity(cachedWeather.city);
                setLoading(false);
            }

            try {
                const weatherData = await getWeather(59.3293, 18.0686);
                setWeather(weatherData);
                setCachedWeather(weatherData, "Stockholm");
            } catch {
                if (!cachedWeather) {
                    setError("Kunde inte hämta väderdata just nu.");
                }
            } finally {
                setLoading(false);
            }
        }

        loadDefaultWeather();
    }, []);

    return {
        city,
        setCity,
        weather,
        searchedCity,
        loading,
        error,
        handleSearch
    }
}
