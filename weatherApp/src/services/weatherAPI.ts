export async function getWeather(latitude:number, longitude: number) {
const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,weather_code,relative_humidity_2m,uv_index&daily=temperature_2m_max,temperature_2m_min&forecast_days=5&timezone=auto&hourly=temperature_2m`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Kunde inte hämta väderdata")
    }

    return response.json();
}

export async function searchCity(city: string) {
    const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=sv&format=json`
    );

    if(!response.ok) {
        throw new Error("Kunde inte hitta stad");
    }

    return response.json();
}
