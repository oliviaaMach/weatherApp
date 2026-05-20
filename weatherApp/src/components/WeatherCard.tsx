import "./WeatherCard.css"

type Props = {
    city: string;
    temperature: number;
    windSpeed: number;
}

export default function WeatherCard({    
    city,
    temperature,
    windSpeed
}: Props) {
    return (
        <>
            <div className="card__header">
                <h2>{city}</h2>
            </div>
            <div className="card__body">
                <p>{temperature}°C</p>
                <p>{windSpeed}km/h</p>
            </div>
        </>
    )
}