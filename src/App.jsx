//Hooks
import { useState } from 'react';

//Components
import Navbar from './components/Navbar';
import SearchFilter from './components/SearchFilter';
import NewEntry from './components/NewEntry';
import DataGrid from './components/DataGrid/DataGrid';
import Pagination from './components/Pagination';

function App() {
  const [keyword, setKeyword] = useState(''); //handle search input
  console.log(keyword);
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="search-add">
          <SearchFilter setKeyword={setKeyword} />
          <NewEntry />
        </div>
        <DataGrid />
        <Pagination />
      </main>
    </>
  );
}

export default App;
