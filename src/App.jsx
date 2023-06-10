//Components
import Navbar from './components/Navbar';
import SearchFilter from './components/SearchFilter';
import NewEntry from './components/NewEntry';
import DataGrid from './components/DataGrid';

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
        <div className="deneme"></div>
      </main>
    </>
  );
}

export default App;
