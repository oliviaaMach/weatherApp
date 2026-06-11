import type { WeatherData } from "./weatherAPI"

const WEATHER_CACHE_KEY = "weatherApp.weather";
const CITY_CACHE_KEY = "weatherApp.city";

type CachedWeather = {
    weather: WeatherData;
    city: string;
}

export function getCachedWeather(): CachedWeather | null {
    const cachedWeather = localStorage.getItem(WEATHER_CACHE_KEY);

    if (!cachedWeather) return null;

    return {
        weather: JSON.parse(cachedWeather),
        city: localStorage.getItem(CITY_CACHE_KEY) ?? "Stockholm"
    }
}

export function setCachedWeather(weather: WeatherData, city: string) {
    localStorage.setItem(WEATHER_CACHE_KEY, JSON.stringify(weather));
    localStorage.setItem(CITY_CACHE_KEY, city);
}
