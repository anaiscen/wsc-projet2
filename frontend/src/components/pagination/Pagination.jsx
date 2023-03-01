import React from "react";
import PropTypes from "prop-types";

function Pagination({ pagination, setPagination }) {
  const maxPage = 500;
  const minPage = 1;
  const pageDisplay = 10;
  // const currentPage = pagination;
  // const index = currentPage * pageDisplay /

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
  // Faire une boucle qui calcule le gap de page entre la plus petite et la plus grande des dix pages qui l'entourent
  // const pagesNumber = (page) => {
  //   for (let i = { pagination }; minPage >= i >= maxPage; i += 1) {
  //     page.map(pageDisplay);
  //   }
  //   console.warn(pagesNumber);
  // };
  return (
    <div>
      <button type="button" onClick={handlePagination}>
        {minPage}
      </button>
      <p>{pageDisplay}</p>
      <button type="button" onClick={handlePaginationNext}>
        {maxPage}
      </button>
    </div>
  );
}

Pagination.propTypes = {
  setPagination: PropTypes.func.isRequired,
  pagination: PropTypes.number.isRequired,
};

export default Pagination;
