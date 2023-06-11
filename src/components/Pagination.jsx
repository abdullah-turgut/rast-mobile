//Icons
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai';

import { useEffect } from 'react';
export default function Pagination({
  rows,
  setRows,
  pages,
  setPages,
  gridData,
  setGridData,
}) {
  useEffect(() => {
    setPages(Math.ceil(gridData.length / rows));
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
  }
  function handlePreviosPage() {
    const currentPage = document.getElementById('current-page-input');
    if (Number(currentPage.value) > 1) {
      currentPage.value = Number(currentPage.value) - 1;
    }
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
          className="chevron-left disabled"
          id="chevron-left"
          onClick={handlePreviosPage}
        />
        <div className="pagination-page-info">
          <input
            type="number"
            name=""
            id="current-page-input"
            min={1}
            defaultValue={1}
          />
          <p className="disabled">of</p>
          <p className="last-page">{pages}</p>
        </div>
        <FaChevronRight
          size={14}
          className="chevron-right"
          id="chevron-right"
          onClick={(e) => handleNextPage(e)}
        />
      </div>
    </div>
  );
}
