import "./NavBar.css"

export default function NavBar() {
    return (
        <nav>
            <h1>Navbar</h1>
            <ul>
                <li>
                    <a href="#home">Översikt</a>
                </li>
                <li>
                    <a href="#map">Karta</a>
                </li>
                                <li>
                    <a href="#favorites">Favoriter</a>
                </li>
                                <li>
                    <a href="#settings">Inställningar</a>
                </li>
            </ul>


        </nav>

    )
}