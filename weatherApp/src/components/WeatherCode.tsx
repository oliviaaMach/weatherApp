type Props = {
    weatherCode: number;
};

function getWeatherIcon(weatherCode: number) {
    if (weatherCode === 0) return "☀️";
    if (weatherCode >= 1 && weatherCode <= 3) return "⛅";
    if (weatherCode === 45 || weatherCode === 48) return "🌫️";
    if (weatherCode >= 51 && weatherCode <= 67) return "🌧️";
    if (weatherCode >= 71 && weatherCode <= 77) return "❄️";
    if (weatherCode >= 80 && weatherCode <= 82) return "🌦️";
    if (weatherCode >= 95) return "⛈️";

    return "❓";
}

export default function WeatherCode({ weatherCode }: Props) {
    return <span>{getWeatherIcon(weatherCode)}</span>;
}
