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
  const [pages, setPages] = useState(1);

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
          data={data}
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
