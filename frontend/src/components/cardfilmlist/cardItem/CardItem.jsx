import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./CardItem.css";

function CardItem({ results }) {
  console.log(results);
  return (
    <div className="cardItem">
      <Link to={`/ItemInfo/${results.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${results.poster_path}`}
          alt={results.title}
          className="cardfilm-poster"
        />
        <div className="title-box">
          <div className="cardfilm-title">
            {results.title ? (
              <h2 className="cardfilm-title-text">{results.title}</h2>
            ) : (
              <h2 className="cardfilm-title-text">{results.name}</h2>
            )}
          </div>
          <div className="cardfilm-raiting">
            notation: {results.vote_average}
          </div>
        </div>
      </Link>
    </div>
  );
}

CardItem.propTypes = {
  results: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    original_name: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardItem;
