export type WeatherData = {
    current: {
        temperature_2m: number;
        wind_speed_10m: number;
        weather_code: number;
        relative_humidity_2m: number;
    };
    daily: {
        time: string[];
        temperature_2m_max: number[];
        temperature_2m_min: number[];
        weather_code: number[];
        uv_index_max: number[];
    };
    hourly: {
        time: string[];
        temperature_2m: number[];
        weather_code: number[];
    };
};

type CitySearchResponse = {
    results?: {
        name: string;
        latitude: number;
        longitude: number;
    }[];
};

export async function getWeather(latitude: number, longitude: number): Promise<WeatherData> {
    const params = new URLSearchParams({
        latitude: String(latitude),
        longitude: String(longitude),
        current: "temperature_2m,wind_speed_10m,weather_code,relative_humidity_2m",
        daily: "temperature_2m_max,temperature_2m_min,weather_code,uv_index_max",
        hourly: "temperature_2m,weather_code",
        forecast_days: "5",
        forecast_hours: "24",
        timezone: "auto",
    });
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`);

    if (!response.ok) {
        throw new Error("Kunde inte hämta väderdata");
    }

    return response.json();
}

export async function searchCity(city: string): Promise<CitySearchResponse> {
    const params = new URLSearchParams({
        name: city,
        count: "1",
        language: "sv",
        format: "json",
    });
    const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?${params}`);

    if (!response.ok) {
        throw new Error("Kunde inte hitta stad");
    }

    return response.json();
}
