import { NavLink } from "react-router-dom";
import HomeIcon from "../../public/svg/home.svg";
import HomeIconDark from "../../public/svg/home_dark.svg";
import MapIcon from "../../public/svg/map.svg";
import MapIconDark from "../../public/svg/map_dark.svg";
import SettingsIcon from "../../public/svg/settings.svg";
import SettingsIconDark from "../../public/svg/settings_dark.svg";
import FavoritesIcon from "../../public/svg/favorites.svg";
import FavoritesIconDark from "../../public/svg/favorite_dark.svg";
import Footer from "./Footer";
import WeatherCode from "./WeatherCode";
import { translations, type Language } from "../i18n/translations";
import type { WeatherData } from "../services/weatherAPI";
import type { Theme } from "../types/preferences";
import "./NavBar.css";

type Props = {
    weather: WeatherData | null;
    language: Language;
    theme: Theme;
};

export default function NavBar({ weather, language, theme }: Props) {
    const t = translations[language];
    const isDark = theme === "dark";
    const links = [
        {
            to: "/",
            label: t.navbar.overview,
            icon: isDark ? HomeIconDark : HomeIcon,
            end: true
        },
        {
            to: "/map",
            label: t.navbar.map,
            icon: isDark ? MapIconDark : MapIcon
        },
        {
            to: "/favorites",
            label: t.navbar.favorite,
            icon: isDark ? FavoritesIconDark : FavoritesIcon
        },
        {
            to: "/settings",
            label: t.navbar.settings,
            icon: isDark ? SettingsIconDark : SettingsIcon
        }
    ];

    return (
        <nav>
            <h1>
                {weather && <WeatherCode weatherCode={weather.current.weather_code} />}
                {t.navbar.title}
            </h1>
            <ul>
                {links.map((link) => (
                    <li key={link.to}>
                        <NavLink
                            to={link.to}
                            end={link.end}
                            className={({ isActive }) =>
                                isActive ? "navLink navLink--active" : "navLink"
                            }
                        >
                            <img src={link.icon} className="navIcons" />
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <Footer />
        </nav>
    );
}
