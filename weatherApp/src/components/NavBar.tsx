import "./NavBar.css"
import { NavLink } from "react-router-dom";
import HomeIcon from "../../public/svg/home.svg"
import HomeIconDark from "../../public/svg/home_dark.svg"
import MapIcon from "../../public/svg/map.svg"
import MapIconDark from "../../public/svg/map_dark.svg"
import SettingsIcon from "../../public/svg/settings.svg"
import SettingsIconDark from "../../public/svg/settings_dark.svg"
import FavoritesIcon from "../../public/svg/favorites.svg"
import FavoritesIconDark from "../../public/svg/favorite_dark.svg"
import WeatherCode from "./WeatherCode"
import type { WeatherData } from "../services/weatherAPI"
import { translations, type Language } from "../i18n/translations";
import type { Theme } from "../types/preferences";

type Props = {
    weather: WeatherData | null;
    language: Language;
    theme: Theme;
}

export default function NavBar({ weather, language, theme }: Props) {
    const t = translations[language];
    const icons = theme === "dark"
        ? {
            home: HomeIconDark,
            map: MapIconDark,
            favorites: FavoritesIconDark,
            settings: SettingsIconDark,
        }
        : {
            home: HomeIcon,
            map: MapIcon,
            favorites: FavoritesIcon,
            settings: SettingsIcon,
        };

    return (
        <nav>
            <h1>
                {weather && <WeatherCode weatherCode={weather.current.weather_code} />}
                {t.navbar.title}
            </h1>
            <ul>
                <li>
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) => isActive ? "navLink navLink--active" : "navLink"}
                    >
                        <img src={icons.home} className="navIcons" />
                        {t.navbar.overview}
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/map"
                        className={({ isActive }) => isActive ? "navLink navLink--active" : "navLink"}
                    >
                        <img src={icons.map} className="navIcons" />
                        {t.navbar.map}
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/favorites"
                        className={({ isActive }) => isActive ? "navLink navLink--active" : "navLink"}
                    >
                        <img src={icons.favorites} className="navIcons" />
                        {t.navbar.favorite}
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/settings"
                        className={({ isActive }) => isActive ? "navLink navLink--active" : "navLink"}
                    >
                        <img src={icons.settings} className="navIcons" />
                        {t.navbar.settings}
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
