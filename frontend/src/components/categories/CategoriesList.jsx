import axios from "axios";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Categories from "./Categories";

function CategoriesList({ setFilterMovie }) {
  const url = import.meta.env.VITE_API_URL;
  const keyUrl = import.meta.env.VITE_API_KEY;

  const [dataGenre, setDataGenre] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    axios
      .get(`${url}/genre/movie/list?api_key=${keyUrl}&language=fr`)
      .then((response) => {
        const genresDelete = response.data.genres.filter((genre) => {
          return genre.id !== 10770;
        });
        setDataGenre(genresDelete);
        setIsLoading(true);
        console.warn(response.data.genres);
      })
      .catch((err) => {
        setAlert(true);
        console.warn(err);
      });
  }, []);

  return (
    <div className="categoryList-container">
      {alert ? <p>Une erreur est survenue</p> : null}
      {isLoading
        ? dataGenre.map((item) => (
            <Categories
              key={item.id}
              name={item.name}
              setFilterMovie={setFilterMovie}
              id={item.id}
            />
          ))
        : null}
    </div>
  );
}

CategoriesList.propTypes = {
  setFilterMovie: PropTypes.func.isRequired,
};

export default CategoriesList;
