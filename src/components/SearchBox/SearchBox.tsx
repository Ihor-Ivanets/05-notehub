import css from "./SearchBox.module.css";

interface SearchBoxProps {
  onSearch: (newQuery: string) => void;
}

function SearchBox({ onSearch }: SearchBoxProps) {
  return (
    <input
      onChange={(e) => onSearch(e.target.value)}
      type="text"
      className={css.input}
      placeholder="Search notes"
    />
  );
}

export default SearchBox;
