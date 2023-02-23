import React from "react";
import PropTypes from "prop-types";
import "./Cardfilmitem.css";
import { Link } from "react-router-dom";

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
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default Cardfilmitem;
