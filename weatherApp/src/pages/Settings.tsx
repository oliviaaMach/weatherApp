import Card from "../components/Card"
import "./Settings.css"
import { translations, type Language } from "../i18n/translations"
import type { TemperatureUnit } from "../utils/temperature";
import type { Theme } from "../types/preferences";

type Props = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    language: Language;
    setLanguage: (language: Language) =>  void;
    temperatureUnit: TemperatureUnit;
    setTemperatureUnit: (temperatureUnit: TemperatureUnit) => void;
}

export default function Settings({
    theme,
    setTheme,
    language,
    setLanguage,
    temperatureUnit,
    setTemperatureUnit
}: Props) {
    const t = translations[language];
    return (
        <section className="page settings">
            <h2>{t.settings.title}</h2>

            <Card className="settingsCard">
                <div className="settingsGrid">
                    <div className="settingItem">
                        <div>
                            <h3>{t.settings.language}</h3>
                            <p>{language === "sv" ? t.settings.swedish : t.settings.english}</p>
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
                            <p>{theme === "light" ? t.settings.light : t.settings.dark}</p>
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
                            <p>{temperatureUnit === "celsius" ? t.settings.celsius : t.settings.fahrenheit}</p>
                        </div>
                        <select
                            value={temperatureUnit}
                            onChange={(event) => setTemperatureUnit(event.target.value as TemperatureUnit)}
                        >
                            <option value="celsius">{t.settings.celsius}</option>
                            <option value="fahrenheit">{t.settings.fahrenheit}</option>
                        </select>
                    </div>
                </div>
            </Card>
        </section>
    )
}
