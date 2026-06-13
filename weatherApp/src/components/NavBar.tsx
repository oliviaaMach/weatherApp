import "./NavBar.css"
import { NavLink } from "react-router-dom";
import HomeIcon from "../../public/svg/home.svg"
import MapIcon from "../../public/svg/map.svg"
import FavoritesIcon from "../../public/svg/favorites.svg"
import SettingsIcon from "../../public/svg/settings.svg"
import WeatherCode from "./WeatherCode"
import type { WeatherData } from "../services/weatherAPI"

type Props = {
    weather: WeatherData | null;
}

export default function NavBar({ weather }: Props) {
    return (
        <nav>
            <h1>
                {weather && <WeatherCode weatherCode={weather.current.weather_code} />}
                Väderapp
            </h1>
            <ul>
                <li>
                    <img src={HomeIcon} className="navIcons" /> <NavLink to="/">Översikt</NavLink>
                </li>
                <li>
                    <img src={MapIcon} className="navIcons" /> <NavLink to="/map">Karta</NavLink>
                </li>
                <li>
                    <img src={FavoritesIcon} className="navIcons" /><NavLink to="/favorites">Favoriter</NavLink>
                </li>
                <li>
                    <img src={SettingsIcon} className="navIcons" /> <NavLink to="/settings">Inställningar</NavLink>
                </li>
            </ul>
        </nav>
    )
}
