import { Routes, Route } from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import Map from "./pages/Map"
import NavBar from "./components/NavBar"
import Favorites from "./pages/Favorites"
import Settings from "./pages/Settings"
import { useWeather } from "./hooks/useWeather"
import { useEffect, useState } from "react"
import { type Language } from "./i18n/translations"
import type { TemperatureUnit } from "./utils/temperature"
import type { Theme } from "./types/preferences"


export default function App() {
  const weatherState = useWeather();
  const [theme, setTheme] = useState<Theme>(() => {
    return localStorage.getItem("weatherApp.theme") === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("weatherApp.theme", theme);
  }, [theme])

  const [language, setLanguage] = useState<Language>(() => {
    return localStorage.getItem("weatherApp.language") === "en" ? "en" : "sv";
  });

  useEffect(() => {
    localStorage.setItem("weatherApp.language", language);
  }, [language]);

  const [temperatureUnit, setTemperatureUnit] = useState<TemperatureUnit>(() => {
    return localStorage.getItem("weatherApp.temperatureUnit") === "fahrenheit"
      ? "fahrenheit"
      : "celsius";
  });

  useEffect(() => {
    localStorage.setItem("weatherApp.temperatureUnit", temperatureUnit);
  }, [temperatureUnit]);

  return (
    <div className='grid_container'>
      <NavBar
        weather={weatherState.weather}
        language={language}
        theme={theme}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              weatherState={weatherState}
              language={language}
              theme={theme}
              temperatureUnit={temperatureUnit}
            />
          }
        />
        <Route
          path="/map"
          element={<Map location={weatherState.location} />}
        />
        <Route
          path="/favorites"
          element={<Favorites temperatureUnit={temperatureUnit} />}
        />
        <Route
          path="/settings"
          element={
            <Settings
              theme={theme}
              setTheme={setTheme}
              language={language}
              setLanguage={setLanguage}
              temperatureUnit={temperatureUnit}
              setTemperatureUnit={setTemperatureUnit}
            />
          }
        />
      </Routes>

    </div>
  )
}
