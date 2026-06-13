import { useState } from "react"
import "./Favorites.css"
import { getFavorites, removeFavorite } from "../services/favoriteStorage"
import type { FavoriteCity } from "../services/favoriteStorage"


export default function Favorites() {
    const [favorites, setFavorites] = useState<FavoriteCity[]>([]);


    function handleRemove(cityName: string) {
        removeFavorite(cityName);
        setFavorites(getFavorites())
    }

    return (
        <section className="favorites">
            <h2>Favoriter</h2>
            {favorites.map((favorite) => (
                <div key={favorite.name}>
                    <p>{favorite.name}</p>
                    <button onClick={() => handleRemove(favorite.name)}>
                        Ta bort
                    </button>
                </div>
            ))}
        </section>
    )
}