/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from "prop-types";
import "./Pagination.css";

function Pagination({ nPages, currentPage, setCurrentPage }) {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <nav>
      <ul className="pagination justify-content-center" id="ul-pagination">
        <li className="page-item" id="li-pagination">
          <a
            className="page-link"
            onClick={prevPage}
            href="#"
            id="a-pagination"
          >
            Previous
          </a>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li
            key={pgNumber}
            className={`page-item ${currentPage === pgNumber ? "active" : ""} `}
            id="li-pagination"
          >
            <a
              onClick={() => setCurrentPage(pgNumber)}
              className="page-link"
              href="#"
              id="a-pagination"
            >
              {pgNumber}
            </a>
          </li>
        ))}
        <li className="page-item" id="li-pagination">
          <a
            className="page-link"
            onClick={nextPage}
            href="#"
            id="a-pagination"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  nPages: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default Pagination;
