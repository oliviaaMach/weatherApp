import Card from "./Card"
import "./Hourly.css"
import WeatherCode from "./WeatherCode"
import type { WeatherData } from "../services/weatherAPI"
import { translations, type Language } from "../i18n/translations"

type Props = {
    weather: WeatherData | null
    language: Language;
};

export default function Hourly({ weather, language }: Props) {
    if (!weather) return null;
    const t = translations[language];
        const locale = language === "sv" ? "sv-SE" : "en-US"

    const now = new Date();
    const currentHourIndex = weather.hourly.time.findIndex((time) => new Date(time) >= now);
    const startIndex = currentHourIndex === -1 ? 0 : currentHourIndex;
    const nextHours = weather.hourly.time.slice(startIndex, startIndex + 9);

    return (
        <Card title={t.hourly.title}>
            <div className="hourly">
                {nextHours.map((time, index) => {
                    const weatherIndex = startIndex + index;
                    const formattedTime = new Date(time).toLocaleTimeString(locale, {
                        hour: "numeric",
                        minute: "numeric"
                    });

                    return (
                        <div className="break" key={time}>
                            <span>{formattedTime}</span>
                            <span><WeatherCode weatherCode={weather.hourly.weather_code[weatherIndex]} /></span>
                            <span>{weather.hourly.temperature_2m[weatherIndex]}°C</span>
                        </div>
                    )
                })}
            </div>
        </Card>
    )
}
