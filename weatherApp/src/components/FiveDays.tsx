import Card from "./Card"

type Props = {
    today?: string;
    tomorrow?: string;
    third?: string;
    fourth?: string;
    fifth?: string;
}

export default function FiveDays({
    today = "Idag",
    tomorrow = "Imorgon",
    third = "Tredje",
    fourth = "Fjärde",
    fifth = "femte"
} : Props) {
    return (
        <Card title="5-dagars prognos">
            <div>
                <p>{today}: 10°C</p>
                <p>{tomorrow}: 20°C</p> 
                <p>{third}: 21°C</p>
                <p>{fourth}: 17°C</p>
                <p>{fifth}: 18°C</p>
            </div>

        </Card>
    )
}