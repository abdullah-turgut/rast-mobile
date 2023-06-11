//Icons
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai';
export default function Pagination({
  rows,
  setRows,
  pages,
  setPages,
  gridData,
  setGridData,
}) {
  console.log(rows, pages);
  function handleIncrement() {
    setRows((preVal) => preVal + 1);
  }
  function handleDecrement() {
    if (rows > 1) {
      setRows((preVal) => preVal - 1);
    }
  }
  function handleNextPage() {
    const currentPage = document.getElementById('current-page-input');
    if (Number(currentPage.value) < pages) {
      currentPage.value = Number(currentPage.value) + 1;
    }
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
        <FaChevronLeft size={14} className="chevron-left disabled" />
        <div className="pagination-page-info">
          <input
            type="number"
            name=""
            id="current-page-input"
            min={1}
            max={2}
            defaultValue={1}
          />
          <p className="disabled">of</p>
          <p className="last-page">{pages}</p>
        </div>
        <FaChevronRight
          size={14}
          className="chevron-right"
          onClick={(e) => handleNextPage(e)}
        />
      </div>
    </div>
  );
}
