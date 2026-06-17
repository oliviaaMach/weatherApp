import "./SearchBar.css";
import SearchIcon from "../../public/svg/search.svg"

type Props = {
    value: string;
    onChange: (value: string) => void;
    onSearch: () => void;
};

export default function SearchBar({
    value,
    onChange,
    onSearch,
}: Props) {
    return (
        <div className="searchInput">
            <img src={SearchIcon} className="searchIcon" />
            <input
                type="text"
                placeholder="Sök stad ..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        onSearch();
                    }
                }}
            />
        </div>
    )
}
