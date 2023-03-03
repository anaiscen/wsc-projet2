import axios from "axios";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useChoice } from "../../contexts/ChoiceContext";
import Genres from "./Genres";

function GenresList({ setFilterMovie }) {
  const { choice } = useChoice();
  const url = import.meta.env.VITE_API_URL;
  const keyUrl = import.meta.env.VITE_API_KEY;

  const [dataGenre, setDataGenre] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  const [selectedGenreId, setSelectedGenreId] = useState(null);

  console.log(choice);

  useEffect(() => {
    const getApiGenre = () => {
      axios
        .get(`${url}/genre/${choice}/list?api_key=${keyUrl}&language=en`)
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

  const handleGenreClick = (genreId) => {
    if (genreId === selectedGenreId) {
      setSelectedGenreId(null);
      setFilterMovie(null);
    } else {
      setSelectedGenreId(genreId);
      setFilterMovie(genreId);
    }
  };

  return (
    <div className="categoryList-container">
      {alert ? <p>Une erreur est survenue</p> : null}
      {isLoading
        ? dataGenre.map((item) => (
            <Genres
              key={item.id}
              name={item.name}
              id={item.id}
              onClick={() => handleGenreClick(item.id)}
              isActive={item.id === selectedGenreId}
            />
          ))
        : null}
    </div>
  );
}

GenresList.propTypes = {
  setFilterMovie: PropTypes.func.isRequired,
};

export default GenresList;
