import "./CurrentWeather.css"
import Card from "./Card";

type Props = {
    city: string;
    date: string;
    time: string;
    temperature: number;
    windSpeed: number;
}

export default function CurrentWeather({    
    city,
    date,
    time,
    temperature,
    windSpeed
}: Props) {
    return (
        <Card title={city}>
            <div className="card__header">
                <p>{date} {time}</p>
            </div>
            <div className="card__body">
                <p>{temperature}°C</p>
                <p>{windSpeed}km/h</p>
            </div>
        </Card>
    )
}