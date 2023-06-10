//Components
import Navbar from './components/Navbar';
import SearchFilter from './components/SearchFilter';
import NewEntry from './components/NewEntry';
import DataGrid from './components/DataGrid';
import Pagination from './components/Pagination';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="search-add">
          <SearchFilter />
          <NewEntry />
        </div>
        <DataGrid />
        <Pagination />
      </main>
    </>
  );
}

export default App;
