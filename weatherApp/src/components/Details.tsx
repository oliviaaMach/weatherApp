import Card from "./Card";
import type { WeatherData } from "../services/weatherAPI"

type Props = {
    weather: WeatherData | null;
}

export default function Details({ weather }: Props) {
    if (!weather) return null;

    return (
        <Card title="Detaljer">
            <div>
                <p>Vind: {weather.current.wind_speed_10m} km/h</p>
                <p>Fuktighet: {weather.current.relative_humidity_2m}%</p>
                <p>UV-index: {weather.daily.uv_index_max[0]}</p>
            </div>
        </Card>
    )
}
