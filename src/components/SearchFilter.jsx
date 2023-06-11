//Mock Data
import data from '../mocks/data';

//Icons
import { HiFilter } from 'react-icons/hi';
import { RiSearchLine } from 'react-icons/ri';

export default function SearchInput({
  setGridData,
  setFilteredData,
  setRows,
  setPages,
}) {
  function handleSearch(e) {
    e.preventDefault();
    const { value } = e.target;
    let filteredData = data.filter(
      (entry) =>
        entry.link.props.children.toLowerCase().includes(value.toLowerCase()) ||
        entry.name.toLowerCase().includes(value.toLowerCase()) ||
        entry.description.toLowerCase().includes(value.toLowerCase())
    );
    setGridData(filteredData);
    setFilteredData(filteredData);
    setRows(9);
    setPages(1);
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
