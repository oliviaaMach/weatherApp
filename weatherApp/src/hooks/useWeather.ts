import { useEffect, useState } from "react";
import { getWeather, searchCity } from "../services/weatherAPI";
import type { WeatherData } from "../services/weatherAPI";
import { getCachedWeather, setCachedWeather, STOCKHOLM_LOCATION } from "../services/weatherStorage";

export function useWeather() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [searchedCity, setSearchedCity] = useState("Stockholm");
    const [loading, setLoading] = useState(true);
    const [location, setLocation] = useState(STOCKHOLM_LOCATION);
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

            const nextLocation = {
                latitude: result.latitude,
                longitude: result.longitude
            };
            const weatherData = await getWeather(nextLocation.latitude, nextLocation.longitude);

            setSearchedCity(result.name);
            setWeather(weatherData);
            setLocation(nextLocation);
            setCachedWeather(weatherData, result.name, nextLocation);
        } catch {
            setError("Kunde inte hämta väderdata just nu.");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        async function loadDefaultWeather() {
            const cachedWeather = getCachedWeather();
            const currentLocation = cachedWeather?.location ?? STOCKHOLM_LOCATION;
            const currentCity = cachedWeather?.city ?? "Stockholm";

            if (cachedWeather) {
                setWeather(cachedWeather.weather);
                setSearchedCity(cachedWeather.city);
                setLocation(cachedWeather.location);
                setLoading(false);
            }

            try {
                const weatherData = await getWeather(currentLocation.latitude, currentLocation.longitude);
                setWeather(weatherData);
                setSearchedCity(currentCity);
                setLocation(currentLocation);
                setCachedWeather(weatherData, currentCity, currentLocation);
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
        handleSearch,
        location,
    };
}
