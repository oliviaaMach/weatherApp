import Card from "./Card"
import WeatherCode from "./WeatherCode"
import "./FiveDays.css"
import type { WeatherData } from "../services/weatherAPI"

type Props = {
    weather: WeatherData | null
}

export default function FiveDays({ weather }: Props) {
    if (!weather) return null;

    return (
        <Card title="5-dagars prognos">
            <div>
                {weather.daily.time.map((day, index) => {
                    const minTemp = weather.daily.temperature_2m_min[index];
                    const maxTemp = weather.daily.temperature_2m_max[index];
                    const averageTemp = (minTemp + maxTemp) / 2;
                    const minScale = -20;
                    const maxScale = 40;
                    const barWidth = ((averageTemp - minScale) / (maxScale - minScale)) * 100;
                    const safeBarWidth = Math.max(0, Math.min(100, barWidth));
                    const formattedDay = index === 0
                        ? "Idag"
                        : new Date(day).toLocaleDateString("sv-SE", {
                            weekday: "short",
                        });

                    return (
                        <div className="fiveDaysItem" key={day}>
                            <div className="fiveDaysFlex">
                                <span>{formattedDay}</span>
                                <WeatherCode weatherCode={weather.daily.weather_code[index]} />
                                <span>{minTemp}°</span>
                                <span className="tempBar">
                                    <span
                                        className="tempBarFill"
                                        style={{ width: `${safeBarWidth}%` }}
                                    />
                                </span>
                                <span>{maxTemp}°C</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Card>
    );
}
