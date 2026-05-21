import { useEffect, useState } from "react";
import { getWeather } from "../services/weatherAPI"
import CurrentWeather from "../components/CurrentWeather"

type WeatherData = {
    current: {
        temperature_2m: number;
        wind_speed_10m: number;
    }
}

export default function Forecast() {
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
                <CurrentWeather
                    city="Stockholm"
                    date="Onsdag"
                    time="12:00"
                    temperature={weather.current.temperature_2m}
                    windSpeed={weather.current.wind_speed_10m}
                />
            )}
        </main>
    )
}