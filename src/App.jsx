//Hooks
import { useEffect, useState } from 'react';

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
  const [rawData, setRawData] = useState([]);
  const [gridData, setGridData] = useState([]); //grid data displayed per page
  const [filteredData, setFilteredData] = useState([]); //data filtered on changes in search input
  const [updateData, setUpdateData] = useState(0); //to control data update after new entry
  const [rows, setRows] = useState(9); //number of rows to show per page
  const [pages, setPages] = useState(1); //current page

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('localData'));
    if (localData) {
      setRawData(localData);
      setGridData(localData);
      setFilteredData(localData);
    } else {
      setRawData(data);
      setGridData(data);
      setFilteredData(data);
    }
  }, [updateData]);

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
            rawData={rawData}
            setRows={setRows}
            setPages={setPages}
          />
          <NewEntry />
        </div>
        <DataGrid gridData={gridData} />
        <Pagination
          gridData={gridData}
          filteredData={filteredData}
          setGridData={setGridData}
          rows={rows}
          rawData={rawData}
          setRows={setRows}
          pages={pages}
          setPages={setPages}
          updateData={updateData}
        />
        <NewEntryModal setRawData={setRawData} setUpdateData={setUpdateData} />
      </main>
    </>
  );
}

export default App;
