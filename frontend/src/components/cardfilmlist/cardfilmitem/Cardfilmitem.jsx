import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Cardfilmitem.css";

function Cardfilmitem({ results }) {
  console.log(results);
  return (
    <div className="cardfilmitem">
      <Link to={`/filminfo/${results.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${results.poster_path}`}
          alt={results.title}
          className="cardfilm-poster"
        />
        <div className="title-box">
          <div className="cardfilm-title">
            <h2 className="cardfilm-title-text">{results.title}</h2>
          </div>
          <div className="cardfilm-raiting">
            notation: {results.vote_average}
          </div>
        </div>
      </Link>
    </div>
  );
}

Cardfilmitem.propTypes = {
  results: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cardfilmitem;
