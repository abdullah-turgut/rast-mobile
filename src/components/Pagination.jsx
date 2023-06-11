//Icons
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai';
export default function Pagination({ rows, setRows }) {
  function handleIncrement() {
    setRows((preVal) => preVal + 1);
  }
  function handleDecrement() {
    if (rows > 1) {
      setRows((preVal) => preVal - 1);
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
          <input type="number" name="" id="" min={1} />
          <p className="disabled">of</p>
          <p className="last-page">4</p>
        </div>
        <FaChevronRight size={14} className="chevron-right" />
      </div>
    </div>
  );
}
