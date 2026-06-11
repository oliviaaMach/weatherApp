import type React from "react";
import "./Card.css"

type Props = {
    title: React.ReactNode;
    children: React.ReactNode;
    className?: string;
}

export default function WeatherCard({  
    title,  
    children,
    className = ""
}: Props) {
    return (
        <section className={`card ${className}`}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}