import Card from "../components/Card"
import "./Settings.css"

export default function Settings() {
    return (
        <section className="settings">
            <h2>Inställningar</h2>

            <Card title="Appinställningar" className="settingsCard">
                <div className="settingsGrid">
                    <div className="settingItem">
                        <div>
                            <h3>Språk</h3>
                            <p>Svenska</p>
                        </div>
                        <select defaultValue="sv">
                            <option value="sv">Svenska</option>
                            <option value="en">English</option>
                        </select>
                    </div>

                    <div className="settingItem">
                        <div>
                            <h3>Tema</h3>
                            <p>Light mode</p>
                        </div>
                        <div className="settingToggle">
                            <button>Light</button>
                            <button>Dark</button>
                        </div>
                    </div>

                    <div className="settingItem">
                        <div>
                            <h3>Temperatur</h3>
                            <p>Celsius</p>
                        </div>
                        <select defaultValue="celsius">
                            <option value="celsius">°C</option>
                            <option value="fahrenheit">°F</option>
                        </select>
                    </div>
                </div>
            </Card>
        </section>
    )
}
