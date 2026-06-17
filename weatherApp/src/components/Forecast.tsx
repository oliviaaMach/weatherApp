import { useEffect, useState } from "react";
import CurrentWeather from "../components/CurrentWeather"
import type { WeatherData } from "../services/weatherAPI"
import "./Forecast.css"

type Props = {
    city: string;
    weather: WeatherData | null;
    onFavorite: () => void;
    isFavorite: boolean;
}

export default function Forecast({ city, weather, onFavorite, isFavorite }: Props) {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setNow(new Date());
        }, 5 * 60 * 1000);

        return () => clearInterval(intervalId)
    }, []);

    if (!weather) return null;

    const date = now.toLocaleDateString("sv-SE", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });
    const formattedDate = date.charAt(0).toUpperCase() + date.slice(1);
    const time = now.toLocaleTimeString("sv-SE", {
        hour: "2-digit",
        minute: "2-digit"
    });

    return (
        <main>
            <CurrentWeather
                city={city}
                date={formattedDate}
                time={time}
                temperature={weather.current.temperature_2m}
                windSpeed={weather.current.wind_speed_10m}
                onFavorite={onFavorite}
                isFavorite={isFavorite}
            />
        </main>
    )
}
