//Components
import Navbar from './components/Navbar';
import SearchInput from './components/SearchInput';
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
          <SearchInput />
          <NewEntry />
        </div>
        <DataGrid />
      </main>
    </>
  );
}

export default App;
