export const translations = {
    sv: {
        details: {
            title: "Detaljer",
            wind: "Vind",
            humidity: "Fuktighet",
            uv_index:"UV-index",
        },
        favorite: {
            empty: "Inga favoriter tillagda än",
        },
        fiveDays: {
            title: "5 dagars prognos",
        },
        hourly: {
            title: "Timvis prognos"
        },
        navbar: {
            title: "Vädret",
            overview: "Översikt",
            map: "Karta",
            favorite: "Favoriter",
            settings: "Inställningar",
        },
        settings: {
            title: "Inställningar",
            appSettings: "Appinställningar",
            language: "Språk",
            swedish: "Svenska",
            english: "Engelska",
            theme: "Tema",
            light: "Ljust",
            dark: "Mörkt",
            temperature: "Temperatur",
            celsius: "°C",
            farenheit: "°F",
        },
        
    },
    en: {
        details: {
            title: "Details",
            wind: "Wind",
            humidity: "Humidity",
            uv_index:"UV-index",
        },
        favorites: {
            empty: "No favorites added yet.",
        },
        fiveDays: {
            title: "5 days forecast",
        },
        hourly: {
            title: "Hourly forecast"
        },
        navbar: {
            title: "Weather",
            overview: "Overview",
            map: "Map",
            favorite: "Favorite",
            settings: "Settings",
        },
        settings: {
            title: "Settings",
            appSettings: "App settings",
            language: "Language",
            swedish: "Swedish",
            english: "English",
            theme: "Theme",
            light: "Light",
            dark: "Dark",
            temperature: "Temperature",
            celsius: "°C",
            fahrenheit: "°F",
        },
    }
};

export type Language = keyof typeof translations;