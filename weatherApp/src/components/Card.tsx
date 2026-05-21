import "./WeatherCard.css"

type Props = {
    children: React.ReactNode;
}

export default function WeatherCard({    
    children
}: Props) {
    return (
        <section className="card">
            {children}
        </section>
    )
}