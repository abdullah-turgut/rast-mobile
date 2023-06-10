//Icons
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai';
export default function Pagination() {
  return (
    <div className="pagination">
      <div className="pagination-rows">
        <p>Show:</p>
        <div className="row-count">
          <input type="text" name="" id="row-input" min={1} />
          <div className="up-down">
            <AiOutlineCaretUp size={12} />
            <AiOutlineCaretDown size={12} />
          </div>
        </div>
      </div>
      <div className="pagination-pages">
        <FaChevronLeft size={16} className="chevron-left disabled" />
        <div className="pagination-page-info">
          <input type="number" name="" id="" min={1} />
          <p className="disabled">of</p>
          <p className="last-page">4</p>
        </div>
        <FaChevronRight size={16} className="chevron-right" />
      </div>
    </div>
  );
}
