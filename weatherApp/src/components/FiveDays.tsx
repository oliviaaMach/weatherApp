import Card from "./Card"

type WeatherData = {
    daily: {
        time: string[];
        temperature_2m_max: number[];
        temperature_2m_min: number[];
    }
}

type Props = {
    weather: WeatherData | null
}

export default function FiveDays({ weather }: Props) {
    if (!weather) return null;

    return (
        <Card title="5-dagars prognos">
            <div>
                {weather.daily.time.map((day, index) => {
                    const formattedDay = new Date(day).toLocaleDateString("sv-SE", {
                        weekday: "short",
                    });

                    return (
                        <p key={day}>
                            {formattedDay}: {weather.daily.temperature_2m_min[index]}°C / {weather.daily.temperature_2m_max[index]}°C
                        </p>
                    );
                })}
            </div>
        </Card>
    );
}