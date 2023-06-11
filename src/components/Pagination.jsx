//Hooks
import { useEffect } from 'react';
//Icons
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai';

export default function Pagination({
  rows,
  setRows,
  pages,
  setPages,
  rawData,
  filteredData,
  setGridData,
  updateData,
}) {
  useEffect(() => {
    setPages(1);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rows]);

  useEffect(() => {
    updateGridData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rows, pages, updateData]);

  function updateGridData() {
    const startIndex = (pages - 1) * rows;
    const endIndex = startIndex + rows;
    const currentPageData = rawData.slice(startIndex, endIndex);
    setGridData(currentPageData);
  }

  function handleIncrement() {
    setRows((preVal) => preVal + 1);
    setPages(1);
  }
  function handleDecrement() {
    if (rows > 1) {
      setRows((preVal) => preVal - 1);
      setPages(1);
    }
  }

  function handleNextPage() {
    if (pages < Math.ceil(rawData.length / rows)) {
      setPages((preVal) => preVal + 1);
    }
  }
  function handlePreviousPage() {
    if (pages > 1) {
      setPages((preVal) => preVal - 1);
    }
  }

  function handlePageChange(e) {
    const { value } = e.target;
    if (value > Math.ceil(filteredData.length / rows)) {
      setPages(Math.ceil(filteredData.length / rows));
    } else if (value < 1) {
      setPages(1);
    } else {
      setPages(value);
    }
    setGridData([...filteredData.filter((entry, i) => i < 5)]);
  }

  return (
    <div className="pagination">
      <div className="pagination-rows">
        <p>Show:</p>
        <div className="row-count">
          <input
            type="text"
            name=""
            id="row-input"
            readOnly
            min={1}
            value={`${rows} rows`}
          />
          <div className="up-down">
            <AiOutlineCaretUp size={12} onClick={handleIncrement} />
            <AiOutlineCaretDown size={12} onClick={handleDecrement} />
          </div>
        </div>
      </div>
      <div className="pagination-pages">
        <FaChevronLeft
          size={14}
          className={pages === 1 ? 'chevron-left disabled' : 'chevron-left'}
          id="chevron-left"
          onClick={handlePreviousPage}
        />
        <div className="pagination-page-info">
          <input
            type="number"
            name=""
            id="current-page-input"
            min={1}
            value={pages}
            onChange={(e) => handlePageChange(e)}
          />
          <p className="disabled">of</p>
          <p className="last-page">{Math.ceil(filteredData.length / rows)}</p>
        </div>
        <FaChevronRight
          size={14}
          className={
            pages === Math.ceil(filteredData.length / rows)
              ? 'chevron-right disabled'
              : 'chevron-right'
          }
          id="chevron-right"
          onClick={(e) => handleNextPage(e)}
        />
      </div>
    </div>
  );
}
