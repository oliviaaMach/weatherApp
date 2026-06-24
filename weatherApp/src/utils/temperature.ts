export type TemperatureUnit = "celsius" | "fahrenheit";

export function formatTemperature(value: number, unit: TemperatureUnit) {
    const temperature = unit === "fahrenheit" ? value * 9 / 5 + 32 : value;
    const symbol = unit === "fahrenheit" ? "°F" : "°C";

    return `${Math.round(temperature)}${symbol}`;
}
