//Styles
import './searchfilter.css';
//Icons
import { HiFilter } from 'react-icons/hi';
import { RiSearchLine } from 'react-icons/ri';

export default function SearchInput({
  setGridData,
  setFilteredData,
  setRows,
  setPages,
  rawData,
}) {
  //function to filter data on change
  function handleSearch(e) {
    e.preventDefault();
    const { value } = e.target;
    let filteredData = rawData.filter(
      (entry) =>
        entry.link.toLowerCase().includes(value.toLowerCase()) ||
        entry.name.toLowerCase().includes(value.toLowerCase()) ||
        entry.description.toLowerCase().includes(value.toLowerCase())
    );
    setGridData(filteredData); //data to be shown on table
    setFilteredData(filteredData); //filtered data is used to recalculate max-page
    setRows(9); //sets rows to default value
    setPages(1); //sets current page to default value
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
