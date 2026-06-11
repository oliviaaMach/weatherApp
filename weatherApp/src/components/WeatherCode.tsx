type Props = {
    weatherCode: number;
};

export default function WeatherCode({ weatherCode } : Props) {
    let weatherIcon = "❓";

    if (weatherCode === 0) {
        weatherIcon = "☀️"; 
    } else if (weatherCode === 1 || weatherCode === 2 || weatherCode === 3) { 
        weatherIcon = "⛅"; 
    } else if (weatherCode === 45 || weatherCode === 48) { 
        weatherIcon = "🌫️"; 
    } else if (weatherCode >= 51 && weatherCode <= 67) { 
        weatherIcon = "🌧️"; 
    } else if (weatherCode >= 71 && weatherCode <= 77) { 
        weatherIcon = "❄️"; 
    } else if (weatherCode >= 80 && weatherCode <= 82) { 
        weatherIcon = "🌦️"; 
    } else if (weatherCode >= 95) { 
        weatherIcon = "⛈️"; 
    }

    return <span>{weatherIcon}</span>
}