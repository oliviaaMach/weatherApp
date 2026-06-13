import type { WeatherLocation } from "./weatherStorage";

const FAVORITE_KEY = "weatherApp.favorites";

export type FavoriteCity = {
    name: string;
    location: WeatherLocation;
};

export function getFavorites(): FavoriteCity[] {
    const favorites = localStorage.getItem(FAVORITE_KEY);
    return favorites ? JSON.parse(favorites) : [];
}

export function addFavorite(favorite: FavoriteCity) {

    const favorites = getFavorites();

    const alreadyExists = favorites.some(
        (city) => city.name.toLowerCase() === favorite.name.toLowerCase()
    );
    if (alreadyExists) return;

    localStorage.setItem(
        FAVORITE_KEY,
        JSON.stringify([...favorites, favorite])
    );
}

export function removeFavorite(cityName: string) {
    const favorites = getFavorites().filter(
        (city) => city.name.toLowerCase() !== cityName.toLowerCase()
    );

    localStorage.setItem(FAVORITE_KEY, JSON.stringify(favorites));
}
    

