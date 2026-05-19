export async function getWeather(latitude:number, longitude: number) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,weather_code&hourly=temperature_2m&timezone=auto`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Kunde inte hämta väderdata")
    }

    return response.json();
}