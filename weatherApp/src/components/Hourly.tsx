import Card from "./Card"
import "./Hourly.css"

type WeatherData = {
    hourly: {
        time: string[];
        temperature_2m: number[]
    };
};

type Props = {
    weather: WeatherData | null
};

export default function Hourly ({ weather }: Props) {
    if (!weather) return null;

    const nextHours = weather.hourly.time.slice(0, 7);

    return (
        <Card title="Timvis prognos">
            <div className="hourly">
                {nextHours.map((time, index) => {
                    const formattedTime = new Date(time). toLocaleTimeString("sv-SE", {
                        hour: "2-digit",
                        minute: "2-digit"
                    });

                    return (
                        <div className="break" key={time}>
                                <span className="p">{formattedTime}</span>
                                <span className="p">{weather.hourly.temperature_2m[index]}°C</span>
                        </div>
                    )
                })}
            </div>
        </Card>
    )
}