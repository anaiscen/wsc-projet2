import React from "react";
import propTypes from "prop-types";
import "./WatchProviders.css";
import "../ItemInfo.css";

function WatchProviders({ image }) {
  return (
    <div className="provider__container">
      <img
        src={`https://image.tmdb.org/t/p/w500${image}`}
        alt="logo_provider"
        className="provider__image"
      />
    </div>
  );
}
WatchProviders.propTypes = {
  image: propTypes.string.isRequired,
};
export default WatchProviders;
