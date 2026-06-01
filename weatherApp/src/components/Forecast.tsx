// import { useEffect, useState } from "react";
// import { getWeather } from "../services/weatherAPI"
import { useEffect, useState } from "react";
import CurrentWeather from "../components/CurrentWeather"

type Props = {
    city: string;
    weather: WeatherData | null
}

type WeatherData = {
    current: {
        temperature_2m: number;
        wind_speed_10m: number;
    }
}

export default function Forecast({city, weather}: Props) {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const interValId = setInterval(() =>{
            setNow(new Date());
        }, 5 * 60 * 1000);

        return () => clearInterval(interValId)
    }, []);

    if(!weather) return null;
    const date = now.toLocaleDateString("sv-SE", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });
    const formattedDate = date.charAt(0).toUpperCase()+date.slice(1);
    const time = now.toLocaleTimeString("sv-SE", {
        hour: "2-digit",
        minute: "2-digit"
    });


    return (
        <main>
            {weather && (
                <CurrentWeather
                    city={city}
                    date={formattedDate}
                    time={time}
                    temperature={weather.current.temperature_2m}
                    windSpeed={weather.current.wind_speed_10m}
                />
            )}
        </main>
    )
}