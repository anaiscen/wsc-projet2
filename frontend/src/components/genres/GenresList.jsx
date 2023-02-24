import axios from "axios";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Genres from "./Genres";

function GenresList({ setFilterMovie, choice }) {
  const genreName = {
    genres: [{ id: 28, name: "Action" }],
  };
  const url = import.meta.env.VITE_API_URL;
  const keyUrl = import.meta.env.VITE_API_KEY;

  const [dataGenre, setDataGenre] = useState([genreName]);
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  console.log(choice);

  useEffect(() => {
    const getApiGenre = () => {
      axios
        .get(`${url}/genre/${choice}/list?api_key=${keyUrl}&language=fr`)
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
    };
    getApiGenre();
  }, [choice]);

  return (
    <div className="categoryList-container">
      {alert ? <p>Une erreur est survenue</p> : null}
      {isLoading
        ? dataGenre.map((item) => (
            <Genres
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

GenresList.propTypes = {
  setFilterMovie: PropTypes.func.isRequired,
  choice: PropTypes.func.isRequired,
};

export default GenresList;
