import "./NavBar.css"
import HomeIcon from "../../public/svg/home.svg"
import MapIcon from "../../public/svg/map.svg"
import FavoritesIcon from "../../public/svg/favorites.svg"
import SettingsIcon from "../../public/svg/settings.svg"

export default function NavBar() {
    return (
        <nav>
            <h1>Navbar</h1>
            <ul>
                <li>
                    <img src={HomeIcon} className="navIcons" /> <a href="#home">Översikt</a>
                </li>
                <li>
                    <img src={MapIcon} className="navIcons" /> <a href="#map">Karta</a>
                </li>
                                <li>
                    <img src={FavoritesIcon} className="navIcons" /><a href="#favorites">Favoriter</a>
                </li>
                                <li>
                   <img src={SettingsIcon} className="navIcons" /> <a href="#settings">Inställningar</a>
                </li>
            </ul>


        </nav>

    )
}