import { useEffect, useState } from "react";
import { getWeather } from "../services/weatherAPI"
import WeatherCard from "../components/WeatherCard"

type WeatherData = {
    current: {
        temperature_2m: number;
        wind_speed_10m: number;
    }
}

export default function Forcast() {
    const [weather, setWeather] = useState<WeatherData | null>(null);


    useEffect(() => {
        async function fetchWeather() {
            const data = await getWeather(59.3293, 18.0686); //Sthlm
            setWeather(data);
        }
        fetchWeather();
    }, []);

    return (
        <main>
            <h1>WeatherApp</h1>
            {weather && (
                <WeatherCard
                    city="Stockholm"
                    temperature={weather.current.temperature_2m}
                    windSpeed={weather.current.wind_speed_10m}
                />
            )}
        </main>
    )
}