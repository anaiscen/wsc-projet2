import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Categories.css";

function Categories({ name }) {
  const [filterFilm, setFilterFilm] = useState(false);

  function showFilterFilmList() {
    setFilterFilm(!filterFilm);
  }

  return (
    <div>
      <button
        className="category-container"
        type="button"
        onClick={showFilterFilmList}
      >
        {name}
      </button>
    </div>
  );
}
Categories.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Categories;
