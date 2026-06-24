import Card from "./Card"
import WeatherCode from "./WeatherCode"
import "./FiveDays.css"
import type { WeatherData } from "../services/weatherAPI"
import { translations, type Language } from "../i18n/translations"
import { formatTemperature, type TemperatureUnit } from "../utils/temperature"

type Props = {
    weather: WeatherData | null
    language: Language;
    temperatureUnit: TemperatureUnit;
}

export default function FiveDays({ weather, language, temperatureUnit }: Props) {
    if (!weather) return null;
    const locale = language === "sv" ? "sv-SE" : "en-US";
    const todayText = language === "sv" ? "Idag" : "Today";
    const t = translations[language];

    return (
        <Card title={t.fiveDays.title}>
            <div className="fiveDays__container">
                {weather.daily.time.map((day, index) => {
                    const minTemp = weather.daily.temperature_2m_min[index];
                    const maxTemp = weather.daily.temperature_2m_max[index];
                    const averageTemp = (minTemp + maxTemp) / 2;
                    const minScale = -20;
                    const maxScale = 40;
                    const averageBarWidth = ((averageTemp - minScale) / (maxScale - minScale)) * 100;
                    const safeAverageBarWidth = Math.max(0, Math.min(100, averageBarWidth));
                    const formattedDay = index === 0
                        ? todayText
                        : new Date(day).toLocaleDateString(locale, {
                            weekday: "short",
                        });

                    return (
                        <div className="fiveDaysItem" key={day}>
                            <div className="fiveDaysFlex">
                                <span>{formattedDay}</span>
                                <WeatherCode weatherCode={weather.daily.weather_code[index]} />
                                <span>{formatTemperature(minTemp, temperatureUnit)}</span>
                                <span className="tempBar">
                                    <span
                                        className="tempBarFill"
                                        style={{ width: `${safeAverageBarWidth}%` }}
                                    />
                                </span>
                                <span>{formatTemperature(maxTemp, temperatureUnit)}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Card>
    );
}
