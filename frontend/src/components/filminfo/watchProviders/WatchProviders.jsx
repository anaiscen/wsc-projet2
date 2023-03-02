import React from "react";
import propTypes from "prop-types";
import "./WatchProviders.css";

function WatchProviders({ name, image }) {
  return (
    <div className="provider__container">
      <h2 className="provider__name">{name}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${image}`}
        alt={name}
        className="provider__image"
      />
    </div>
  );
}
WatchProviders.propTypes = {
  name: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
};
export default WatchProviders;
