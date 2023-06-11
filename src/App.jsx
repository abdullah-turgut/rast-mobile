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

  console.log(gridData);

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
        <Pagination />
      </main>
    </>
  );
}

export default App;
