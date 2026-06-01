import Card from "./Card";

type Props = {
    wind?: string;
    humidity?: string;
    pressure?: string;
    sight?: string;
    uv_index?: string;
}

export default function Details({    
    wind = "Vind",
    humidity = "Luftfuktighet",
    pressure = "Lufttryck",
    sight = "Sikt",
    uv_index = "UV-index"
}: Props) {
    return (
        <Card title="Detaljer">
            <div>
                <p>{wind}: 5km/h</p>
                <p>{humidity}: 70%</p>
                <p>{pressure}: 1015 hpa</p>
                <p>{sight}: 10km</p>
                <p>{uv_index}: 3(Måttlig)</p>
            </div>
        </Card>
    )
}
