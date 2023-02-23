import React from "react";
import PropTypes from "prop-types";
import "./Cardfilmlist.css";
import Cardfilmitem from "./cardfilmitem/Cardfilmitem";

function Cardfilmlist({ listFilm }) {
  return (
    <div className="cardfilm">
      {listFilm.map((film) => {
        return <Cardfilmitem key={film.id} results={film} />;
      })}
    </div>
  );
}

Cardfilmlist.propTypes = {
  listFilm: PropTypes.string.isRequired,
};

export default Cardfilmlist;
