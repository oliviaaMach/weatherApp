import Card from "../components/Card"
import "./Settings.css"
import { translations, type Language } from "../i18n/translations"

type Props = {
    theme: "light" | "dark";
    setTheme: (theme: "light" | "dark") => void;
    language: Language;
    setLanguage: (language: Language) =>  void;
}

export default function Settings( {theme, setTheme, language, setLanguage}: Props) {
    const t = translations[language];
    return (
        <section className="page settings">
            <h2>{t.settings.title}</h2>

            <Card title={t.settings.appSettings} className="settingsCard">
                <div className="settingsGrid">
                    <div className="settingItem">
                        <div>
                            <h3>{t.settings.language}</h3>
                            <p>{language === "sv" ? "Svenska" : "English"}</p>
                        </div>
                        <select 
                            value={language}
                            onChange={(event) => setLanguage(event.target.value as Language)}>
                            <option value="sv">{t.settings.swedish}</option>
                            <option value="en">{t.settings.english}</option>
                        </select>
                    </div>

                    <div className="settingItem">
                        <div>
                            <h3>{t.settings.theme}</h3>
                            <p>{t.settings.light}</p>
                        </div>
                        <div className="settingToggle">
                            <button
                                className={theme === "light" ? "settingToggle__button--active" : ""}
                                aria-pressed={theme === "light"}
                                onClick={() => setTheme("light")}
                            >
                                {t.settings.light}
                            </button>
                            <button
                                className={theme === "dark" ? "settingToggle__button--active" : ""}
                                aria-pressed={theme === "dark"}
                                onClick={() => setTheme("dark")}
                            >
                                {t.settings.dark}
                            </button>
                        </div>
                    </div>

                    <div className="settingItem">
                        <div>
                            <h3>{t.settings.temperature}</h3>
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
