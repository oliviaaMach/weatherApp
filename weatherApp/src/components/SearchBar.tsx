type Props = {
    value: string;
    onChange: (value:string) => void;
    onSearch: () => void;
};

export default function SearchBar({
    value,
    onChange,
    onSearch,
}: Props) {
    return (
        <div>
            <input 
            type="text"
            placeholder="Sök stad ..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            />

            <button onClick={onSearch}>
                Sök
            </button>
        </div>
    )
}