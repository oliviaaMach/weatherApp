import "./Map.css"

type Props = {
    location: {
        latitude: number;
        longitude: number;
    };
};


export default function Map({ location }: Props){
    return(
        <section className="map">
            <iframe
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${location.longitude - 0.05},${location.latitude - 0.05},${location.longitude + 0.05},${location.latitude + 0.05}&layer=mapnik&marker=${location.latitude},${location.longitude}`}
            />
        </section>
    )
}