import { useEffect, useState } from "react";
import { getWeather } from "../services/weatherAPI"

export default function WeatherApp() {
    const [weather, setWeather] = useState(null);


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
                <section>
                    <h2>Stockholm</h2>
                    <p>{weather.current.temperature_2m}°C</p>
                    <p>Vind: {weather.current.wind_speed_10m} km/h</p>
                </section>
            )}
        </main>
    )
}