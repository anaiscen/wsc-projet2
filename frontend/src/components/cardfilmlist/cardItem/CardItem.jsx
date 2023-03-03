import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./CardItem.css";
import { Rate } from "antd";

function CardItem({ results }) {
  return (
    <div className="cardItem">
      <Link to={`/ItemInfo/${results.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w300${results.poster_path}`}
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
            <Rate
              defaultValue={results.vote_average}
              allowHalf
              count={10}
              style={{ fontSize: "14px" }}
              disabled
            />
            {Math.floor(results.vote_average)}
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
