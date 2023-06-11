//Hooks
import { useState } from 'react';

//Mock Data
import data from './mocks/data';

//Components
import Navbar from './components/Navbar';
import SearchFilter from './components/SearchFilter';
import NewEntry from './components/NewEntry';
import DataGrid from './components/DataGrid/DataGrid';
import Pagination from './components/Pagination';

function App() {
  const [gridData, setGridData] = useState(data);
  const [rows, setRows] = useState(9);
  const [pages, setPages] = useState(
    gridData.length % rows === 0
      ? gridData.length % rows
      : (gridData.length % rows) + 1
  );

  console.log(pages);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="search-add">
          <SearchFilter setGridData={setGridData} />
          <NewEntry />
        </div>
        <DataGrid gridData={gridData} />
        <Pagination rows={rows} setRows={setRows} />
      </main>
    </>
  );
}

export default App;
