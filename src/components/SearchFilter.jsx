//Hooks

//Icons
import { HiFilter } from 'react-icons/hi';
import { RiSearchLine } from 'react-icons/ri';

export default function SearchInput({ setKeyword }) {
  function handleSearch(e) {
    e.preventDefault();
    setKeyword(e.target.value);
  }
  return (
    <div className="search-bar">
      <input
        type="text"
        id="search-input"
        placeholder="Search objects..."
        onChange={(e) => handleSearch(e)}
      />
      <button className="search-btn">
        <RiSearchLine size={20} />
      </button>
      <button className="filter-btn">
        <HiFilter size={20} />
      </button>
    </div>
  );
}
