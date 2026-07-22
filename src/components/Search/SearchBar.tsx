import type { InputHTMLAttributes } from "react";
import "./SearchBar.scss";

interface SearchBarProps {
  onSearch?: () => void;
  placeholder: string;
  className?: string;
}

const SearchBar = ({
  onSearch,
  placeholder,
  className,
  ...rest
}: SearchBarProps & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...rest}
      className={`search-bar-input ${className || ""}`}
      placeholder={placeholder}
      onChange={onSearch}
    />
  );
};

export default SearchBar;
