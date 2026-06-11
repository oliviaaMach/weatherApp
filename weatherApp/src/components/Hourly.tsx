import Card from "./Card"
import "./Hourly.css"
import WeatherCode from "./WeatherCode"
import type { WeatherData } from "../services/weatherAPI"

type Props = {
    weather: WeatherData | null
};

export default function Hourly({ weather }: Props) {
    if (!weather) return null;

    const now = new Date();
    const currentHourIndex = weather.hourly.time.findIndex((time) => new Date(time) >= now);
    const startIndex = currentHourIndex === -1 ? 0 : currentHourIndex;
    const nextHours = weather.hourly.time.slice(startIndex, startIndex + 9);

    return (
        <Card title="Timvis prognos">
            <div className="hourly">
                {nextHours.map((time, index) => {
                    const weatherIndex = startIndex + index;
                    const formattedTime = new Date(time).toLocaleTimeString("sv-SE", {
                        hour: "2-digit",
                        minute: "2-digit"
                    });

                    return (
                        <div className="break" key={time}>
                            <span className="p">{formattedTime}</span>
                            <span className="p"><WeatherCode weatherCode={weather.hourly.weather_code[weatherIndex]} /></span>
                            <span className="p">{weather.hourly.temperature_2m[weatherIndex]}°</span>
                        </div>
                    )
                })}
            </div>
        </Card>
    )
}
