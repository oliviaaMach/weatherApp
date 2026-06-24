import { useEffect, useState } from "react";
import CurrentWeather from "../components/CurrentWeather"
import type { WeatherData } from "../services/weatherAPI"
import "./Forecast.css"
import { type Language } from "../i18n/translations";
import type { TemperatureUnit } from "../utils/temperature";
import type { Theme } from "../types/preferences";

type Props = {
    city: string;
    weather: WeatherData | null;
    onFavorite: () => void;
    isFavorite: boolean;
    language: Language;
    theme: Theme;
    temperatureUnit: TemperatureUnit;
}

export default function Forecast({
    city,
    weather,
    onFavorite,
    isFavorite,
    language,
    theme,
    temperatureUnit
}: Props) {
    const locale = language === "sv" ? "sv-SE" : "en-US";
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setNow(new Date());
        }, 5 * 60 * 1000);

        return () => clearInterval(intervalId)
    }, []);

    if (!weather) return null;

    const date = now.toLocaleDateString(locale, {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });
    const formattedDate = date.charAt(0).toUpperCase() + date.slice(1);
    const time = now.toLocaleTimeString(locale, {
        hour: "numeric",
        minute: "numeric"
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
                theme={theme}
                temperatureUnit={temperatureUnit}
            />
        </main>
    )
}
