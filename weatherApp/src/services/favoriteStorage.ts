import type { WeatherLocation } from "./weatherStorage";

const FAVORITE_KEY = "weatherApp.favorites";

export type FavoriteCity = {
    name: string;
    location: WeatherLocation;
};

export function getFavorites(): FavoriteCity[] {
    const favorites = localStorage.getItem(FAVORITE_KEY);

    if (!favorites) return [];

    try {
        return JSON.parse(favorites);
    } catch {
        return [];
    }
}

export function addFavorite(favorite: FavoriteCity) {
    const favorites = getFavorites();
    const alreadyExists = favorites.some(
        (city) => city.name.toLowerCase() === favorite.name.toLowerCase()
    );

    if (alreadyExists) return;

    localStorage.setItem(FAVORITE_KEY, JSON.stringify([favorite, ...favorites]));
}

export function removeFavorite(cityName: string) {
    const favorites = getFavorites().filter(
        (city) => city.name.toLowerCase() !== cityName.toLowerCase()
    );

    localStorage.setItem(FAVORITE_KEY, JSON.stringify(favorites));
}
