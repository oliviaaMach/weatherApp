import Card from "./Card";
import "./Details.css"
import type { WeatherData } from "../services/weatherAPI"
import { translations, type Language } from "../i18n/translations"

import Wind from "../../public/svg/wind.svg"
import Humidity from "../../public/svg/humidity.svg"
import UvIndex from "../../public/svg/uvIndex.svg"


type Props = {
    weather: WeatherData | null;
    language: Language;
}

export default function Details({ weather, language }: Props) {
    if (!weather) return null;
    const t = translations[language];

    return (
        <Card title={t.details.title}>
            <div className="details_flex">
                <div className="details_row">
                    <span>
                        <img src={Wind} className="detailsIcons" />
                        {t.details.wind}:
                    </span>
                    <span>{weather.current.wind_speed_10m} km/h</span>
                </div>
                <div className="details_row">
                    <span>
                        <img src={Humidity} className="detailsIcons" />
                        {t.details.humidity}:
                    </span>
                    <span>{weather.current.relative_humidity_2m}%</span>
                </div>
                <div className="details_row">
                    <span>
                        <img src={UvIndex} className="detailsIcons" />
                        {t.details.uv_index}:
                    </span>
                    <span>{weather.daily.uv_index_max[0]}</span>
                </div>
            </div>
        </Card>
    )
}
