import React from "react";
import PropTypes from "prop-types";
import "./Pagination.css";

function Pagination({ pagination, setPagination }) {
  const maxPage = 500;
  const minPage = 1;
  const pageDisplay = 10;

  const handlePagination = () => {
    if (pagination > 1) {
      setPagination(pagination - 1);
    }
  };

  const handlePaginationNext = () => {
    if (pagination < 500) {
      setPagination(pagination + 1);
    }
  };

  let startIndex = pagination - Math.floor(pageDisplay / 2);
  if (startIndex < minPage) {
    startIndex = minPage;
  } else if (startIndex + pageDisplay > maxPage) {
    startIndex = maxPage - pageDisplay + 1;
  }

  const pageNumbers = [];
  for (let i = startIndex; i <= startIndex + pageDisplay - 1; i += 1) {
    pageNumbers.push(i);
  }

  return (
    <div className="change-page-container">
      <button type="button" className="btn-page" onClick={handlePagination}>
        Previous Page
      </button>
      {pageNumbers.map((page) => (
        <button
          type="button"
          className={`btn-page ${page === pagination ? "active" : ""}`}
          key={page}
          onClick={() => setPagination(page)}
        >
          {page}
        </button>
      ))}
      <button type="button" className="btn-page" onClick={handlePaginationNext}>
        Next Page
      </button>
    </div>
  );
}

Pagination.propTypes = {
  setPagination: PropTypes.func.isRequired,
  pagination: PropTypes.number.isRequired,
};

export default Pagination;
