import css from "./SearchBox.module.css";
import { IoMdSearch } from "react-icons/io";

const SearchBox = ({ filter, setFilter }) => {
  return (
    <div className={css.searchBox}>
      <p>Find contacts by name</p>
      <input
        className={css.inputSearch}
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <IoMdSearch className={css.iconSearch} />
    </div>
  );
};

export default SearchBox;
