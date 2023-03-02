import React from "react";
import PropTypes from "prop-types";
import "./CardList.css";
import CardItem from "./cardItem/CardItem";

function CardList({ listItem }) {
  return (
    <div className="cardfilm">
      {listItem.length > 0 ? (
        listItem.map((film) => {
          return <CardItem key={film.id} results={film} />;
        })
      ) : (
        <div className="no-results-message">Aucun résultat trouvé</div>
      )}
    </div>
  );
}

CardList.propTypes = {
  listItem: PropTypes.string.isRequired,
};

export default CardList;
