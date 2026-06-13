import type { WeatherData } from "./weatherAPI"

const WEATHER_CACHE_KEY = "weatherApp.weather";
const CITY_CACHE_KEY = "weatherApp.city";
const LOCATION_CACHE_KEY = "weatherApp.location";

export type WeatherLocation = {
    latitude: number;
    longitude: number;
}

type CachedWeather = {
    weather: WeatherData;
    city: string;
    location: WeatherLocation;
}

export function getCachedWeather(): CachedWeather | null {
    const cachedWeather = localStorage.getItem(WEATHER_CACHE_KEY);

    if (!cachedWeather) return null;

    return {
        weather: JSON.parse(cachedWeather),
        city: localStorage.getItem(CITY_CACHE_KEY) ?? "Stockholm",
        location: JSON.parse(localStorage.getItem(LOCATION_CACHE_KEY) ?? '{"latitude":59.3293,"longitude":18.0686}')
    }
}

export function setCachedWeather(weather: WeatherData, city: string, location: WeatherLocation) {
    localStorage.setItem(WEATHER_CACHE_KEY, JSON.stringify(weather));
    localStorage.setItem(CITY_CACHE_KEY, city);
    localStorage.setItem(LOCATION_CACHE_KEY, JSON.stringify(location));
}
