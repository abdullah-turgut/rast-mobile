//Hooks
import { useState } from 'react';

//Mock Data
import data from './mocks/data';

//Components
import Navbar from './components/Navbar';
import SearchFilter from './components/SearchFilter';
import NewEntry from './components/NewEntry';
import NewEntryModal from './components/NewEntryModal';
import DataGrid from './components/DataGrid/DataGrid';
import Pagination from './components/Pagination';

function App() {
  const [gridData, setGridData] = useState(data); //initial data
  const [filteredData, setFilteredData] = useState(data); //data filtered on changes in search input
  const [rows, setRows] = useState(9); //number of rows to show per page
  const [pages, setPages] = useState(1); //current page

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="search-add">
          <SearchFilter
            setFilteredData={setFilteredData}
            setGridData={setGridData}
            setRows={setRows}
            setPages={setPages}
          />
          <NewEntry />
        </div>
        <DataGrid gridData={gridData} />
        <Pagination
          data={data}
          filteredData={filteredData}
          setGridData={setGridData}
          rows={rows}
          setRows={setRows}
          pages={pages}
          setPages={setPages}
        />
        <NewEntryModal />
      </main>
    </>
  );
}

export default App;
