import Card from "./Card";
import type { WeatherData } from "../services/weatherAPI"
import { translations, type Language } from "../i18n/translations"


type Props = {
    weather: WeatherData | null;
    language: Language;
}

export default function Details({ weather, language }: Props) {
    if (!weather) return null;
    const t = translations[language];

    return (
        <Card title={t.details.title}>
            <div>
                <p>{t.details.wind}: {weather.current.wind_speed_10m} km/h</p>
                <p>{t.details.humidity}: {weather.current.relative_humidity_2m}%</p>
                <p>{t.details.uv_index}: {weather.daily.uv_index_max[0]}</p>
            </div>
        </Card>
    )
}
