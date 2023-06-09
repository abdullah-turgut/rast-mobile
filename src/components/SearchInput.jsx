import { HiFilter } from 'react-icons/hi';
import { RiSearchLine } from 'react-icons/ri';

export default function SearchInput() {
  return (
    <div className="search-bar">
      <input type="text" id="search-input" placeholder="Search objects..." />
      <button className="search-btn">
        <RiSearchLine size={16} />
      </button>
    </div>
  );
}
