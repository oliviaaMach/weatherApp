import Card from "./Card";

type WeatherData = {
    current: {
        wind_speed_10m: number;
        relative_humidity_2m: number;
        uv_index: number
    }
}

type Props = {
    weather: WeatherData | null;
}

export default function Details({ weather }: Props) {
    if(!weather) return null;
    return (
        <Card title="Detaljer">
            <div>
                <p>Vind: {weather.current.wind_speed_10m} km/h</p>
                <p>Fuktighet: {weather.current.relative_humidity_2m}%</p>
                <p>UV-index: {weather.current.uv_index}</p>
            </div>
        </Card>
    )
}
