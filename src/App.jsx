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
  const [rows, setRows] = useState(3);
  const [pages, setPages] = useState(Math.ceil(gridData.length / rows));

  console.log(rows, pages);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="search-add">
          <SearchFilter
            setGridData={setGridData}
            rows={rows}
            setPages={setPages}
          />
          <NewEntry />
        </div>
        <DataGrid gridData={gridData} />
        <Pagination
          gridData={gridData}
          setGridData={setGridData}
          rows={rows}
          setRows={setRows}
          pages={pages}
          setPages={setPages}
        />
      </main>
    </>
  );
}

export default App;
