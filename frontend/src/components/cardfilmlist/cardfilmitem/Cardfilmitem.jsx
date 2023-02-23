import React from "react";
import PropTypes from "prop-types";
import "./Cardfilmitem.css";

function Cardfilmitem({ results }) {
  return (
    <div className="cardfilmitem">
      <img
        src={`https://image.tmdb.org/t/p/original${results.backdrop_path}`}
        alt={results.title}
        className="cardfilm-poster"
      />
      <div>
        <h2 className="cardfilm-title">{results.title}</h2>
      </div>
    </div>
  );
}

Cardfilmitem.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      backdrop_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default Cardfilmitem;
