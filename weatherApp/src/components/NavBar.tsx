import "./NavBar.css"
import { NavLink } from "react-router-dom";
import HomeIcon from "../../public/svg/home.svg"
import MapIcon from "../../public/svg/map.svg"
import SettingsIcon from "../../public/svg/settings.svg"
import FavoritesIcon from "../../public/svg/favorites.svg"
import WeatherCode from "./WeatherCode"
import type { WeatherData } from "../services/weatherAPI"
import { translations, type Language } from "../i18n/translations";

type Props = {
    weather: WeatherData | null;
    language: Language;
}

export default function NavBar({ weather, language }: Props) {
    const t = translations[language];

    return (
        <nav>
            <h1>
                {weather && <WeatherCode weatherCode={weather.current.weather_code} />}
                {t.navbar.title}
            </h1>
            <ul>
                <li>
                    <img src={HomeIcon} className="navIcons" /> <NavLink to="/">{t.navbar.overview}</NavLink>
                </li>
                <li>
                    <img src={MapIcon} className="navIcons" /> <NavLink to="/map">{t.navbar.map}</NavLink>
                </li>
                <li>
                    <img src={FavoritesIcon} className="navIcons" /> <NavLink to="/favorites">{t.navbar.favorite}</NavLink>
                </li>
                <li>
                    <img src={SettingsIcon} className="navIcons" /> <NavLink to="/settings">{t.navbar.settings}</NavLink>
                </li>
            </ul>
        </nav>
    )
}
