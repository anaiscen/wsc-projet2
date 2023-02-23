import React from "react";
import "./Cardfilmitem.css";
import PropTypes from "prop-types";

function Cardfilmitem({ content }) {
  return (
    <div className="cardfilmitem">
      <div>
        <img
          className="cardfilm-poster"
          src={`https://image.tmdb.org/t/p/w500${content.poster_path}`}
          alt=""
        />
        <h2 className="cardfilm-title">
          {content.original_title} {content.name}
        </h2>
        {/* ternaire: poster path ou backdrop path */}
      </div>
    </div>
  );
}

Cardfilmitem.propTypes = {
  content: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cardfilmitem;
