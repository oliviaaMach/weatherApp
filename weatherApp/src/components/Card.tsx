import type React from "react";
import "./Card.css"

type Props = {
    title: React.ReactNode;
    children: React.ReactNode;
}

export default function WeatherCard({  
    title,  
    children
}: Props) {
    return (
        <section className="card">
            <h2>{title}</h2>
            {children}
        </section>
    )
}