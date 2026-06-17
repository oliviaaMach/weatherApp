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

const STOCKHOLM_LOCATION: WeatherLocation = {
    latitude: 59.3293,
    longitude: 18.0686
};

function parseJson<T>(value: string | null): T | null {
    if (!value) return null;

    try {
        return JSON.parse(value);
    } catch {
        return null;
    }
}

export function getCachedWeather(): CachedWeather | null {
    const cachedWeather = localStorage.getItem(WEATHER_CACHE_KEY);
    const weather = parseJson<WeatherData>(cachedWeather);

    if (!weather) return null;

    return {
        weather,
        city: localStorage.getItem(CITY_CACHE_KEY) ?? "Stockholm",
        location: parseJson<WeatherLocation>(localStorage.getItem(LOCATION_CACHE_KEY)) ?? STOCKHOLM_LOCATION
    }
}

export function setCachedWeather(weather: WeatherData, city: string, location: WeatherLocation) {
    localStorage.setItem(WEATHER_CACHE_KEY, JSON.stringify(weather));
    localStorage.setItem(CITY_CACHE_KEY, city);
    localStorage.setItem(LOCATION_CACHE_KEY, JSON.stringify(location));
}
