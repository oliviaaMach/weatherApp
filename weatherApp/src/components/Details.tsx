import Card from "./Card";
import "./Details.css"
import type { WeatherData } from "../services/weatherAPI"
import { translations, type Language } from "../i18n/translations"

import Wind from "../../public/svg/wind.svg"
import WindDark from "../../public/svg/wind_dark.svg"
import Humidity from "../../public/svg/humidity.svg"
import HumidityDark from "../../public/svg/humidity_dark.svg"
import UvIndex from "../../public/svg/uvIndex.svg"
import UvIndexDark from "../../public/svg/uvIndex_dark.svg"
import type { Theme } from "../types/preferences";


type Props = {
    weather: WeatherData | null;
    language: Language;
    theme: Theme;
}

export default function Details({ weather, language, theme }: Props) {
    if (!weather) return null;
    const t = translations[language];
    const icons = theme === "dark"
        ? { wind: WindDark, humidity: HumidityDark, uvIndex: UvIndexDark }
        : { wind: Wind, humidity: Humidity, uvIndex: UvIndex };

    return (
        <Card title={t.details.title}>
            <div className="details_flex">
                <div className="details_row">
                    <span>
                        <img src={icons.wind} className="detailsIcons" />
                        {t.details.wind}:
                    </span>
                    <span>{weather.current.wind_speed_10m} km/h</span>
                </div>
                <div className="details_row">
                    <span>
                        <img src={icons.humidity} className="detailsIcons" />
                        {t.details.humidity}:
                    </span>
                    <span>{weather.current.relative_humidity_2m}%</span>
                </div>
                <div className="details_row">
                    <span>
                        <img src={icons.uvIndex} className="detailsIcons" />
                        {t.details.uv_index}:
                    </span>
                    <span>{weather.daily.uv_index_max[0]}</span>
                </div>
            </div>
        </Card>
    )
}
