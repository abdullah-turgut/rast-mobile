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
  data,
  gridData,
  setGridData,
}) {
  useEffect(() => {
    document.querySelector('#current-page-input').value = 1;
    const currentPage = document.getElementById('current-page-input');
    if (Number(currentPage.value) == 1) {
      document.getElementById('chevron-left').classList.add('disabled');
    } else if (
      Number(currentPage.value) < pages &&
      Number(currentPage.value) > 1
    ) {
      document.getElementById('chevron-left').classList.remove('disabled');
      document.getElementById('chevron-right').classList.remove('disabled');
    } else if (Number(currentPage.value) === pages) {
      document.getElementById('chevron-right').classList.add('disabled');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rows]);

  console.log(gridData);

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
    if (pages < Math.ceil(gridData.length / rows)) {
      setPages((preVal) => preVal + 1);
    }
  }
  function handlePreviosPage() {
    if (pages > 1) {
      setPages((preVal) => preVal - 1);
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
        <FaChevronLeft
          size={14}
          className={pages === 1 ? 'chevron-left disabled' : 'chevron-left'}
          id="chevron-left"
          onClick={handlePreviosPage}
        />
        <div className="pagination-page-info">
          <input
            type="number"
            name=""
            id="current-page-input"
            readOnly
            min={1}
            value={pages}
          />
          <p className="disabled">of</p>
          <p className="last-page">{Math.ceil(gridData.length / rows)}</p>
        </div>
        <FaChevronRight
          size={14}
          className={
            pages === Math.ceil(gridData.length / rows)
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
