import type { ReactNode } from "react";
import "./Card.css"

type Props = {
    title?: ReactNode;
    children: ReactNode;
    className?: string;
}

export default function Card({
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
