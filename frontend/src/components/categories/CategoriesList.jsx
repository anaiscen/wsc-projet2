import axios from "axios";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Categories from "./Categories";

const genreName = {
  genres: [{ id: 28, name: "Action" }],
};

function CategoriesList({ categoryName }) {
  console.warn(categoryName);
  const url = import.meta.env.VITE_API_URL;
  const keyUrl = import.meta.env.VITE_API_KEY;

  const [dataGenre, setDataGenre] = useState([genreName]);
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const getApiGenre = () => {
      axios
        .get(`${url}/genre/movie/list?api_key=${keyUrl}&language=en-US`)
        .then((response) => {
          setDataGenre(response.data.genres);
          setIsLoading(true);
          console.warn(response.data.genres);
        })
        .catch((err) => {
          setAlert(true);
          console.warn(err);
        });
    };
    getApiGenre();
  }, []);
  return (
    <div className="categoryList-container">
      {alert ? <p>Une erreur est survenue</p> : null}
      {isLoading
        ? dataGenre.map((item) => <Categories key={item.id} name={item.name} />)
        : null}
    </div>
  );
}

CategoriesList.propTypes = {
  categoryName: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CategoriesList;
