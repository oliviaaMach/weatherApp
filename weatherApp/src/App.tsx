import { Routes, Route } from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import Map from "./pages/Map"
import NavBar from "./components/NavBar"
import Favorites from "./pages/Favorites"
import Settings from "./pages/Settings"
import { useWeather } from "./hooks/useWeather"
import { useEffect, useState } from "react"


export default function App() {
  const weatherState = useWeather();
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    return localStorage.getItem("weatherApp.theme") === "dark"
    ? "dark"
    :"light"
  });

  useEffect(() => {
        document.documentElement.dataset.theme = theme;
        localStorage.setItem("weatherApp.theme", theme);
    }, [theme])

  return (
    <div className='grid_container'>
      <NavBar weather={weatherState.weather} />

      <Routes>
        <Route 
          path="/" 
          element={<Home weatherState={weatherState} />}
        />
        <Route 
          path="/map" 
          element={<Map location={weatherState.location} />}
        />
        <Route 
          path="/favorites" 
          element={<Favorites />}
        />
        <Route 
          path="/settings" 
          element={<Settings
                      theme={theme}
                      setTheme={setTheme} />}
        />
       </Routes>

    </div>
  )
}
