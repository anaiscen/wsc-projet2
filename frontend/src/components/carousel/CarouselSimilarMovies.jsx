import axios from "axios";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Carousel.css";
import { Link } from "react-router-dom";
import { useChoice } from "../../contexts/ChoiceContext";
import postermanquant from "../../assets/postermanquant.png";

function CarouselSimilarMovies({ movieId }) {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayData, setDisplayData] = useState([]);
  const { choice } = useChoice();
  const url = import.meta.env.VITE_API_URL;
  const keyUrl = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const getApi = () => {
      axios
        .get(
          `${url}/${choice}/${movieId}/similar?api_key=${keyUrl}&language=fr-FR&page=1`
        )
        .then((response) => {
          setData(response.data.results);
        })
        .catch((err) => {
          console.warn(err);
        });
    };
    getApi();
  }, [data]);

  useEffect(() => {
    setDisplayData([...data, ...data]);
  }, [data]);

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % data.length);
  };

  const handlePreviousClick = () => {
    setCurrentIndex((currentIndex + data.length - 1) % data.length);
  };

  // console.log(displayData);
  const correctIndex = currentIndex % displayData.length;
  const filmsToShow = displayData.slice(correctIndex, correctIndex + 10);
  return (
    <div className="carousel-similar-movies">
      {filmsToShow.length > 0 ? (
        <div className="carousel-similar-movies-container">
          <div className="button-container">
            <button
              className="carousel-button"
              type="button"
              onClick={handlePreviousClick}
            >
              <img src="/src/assets/arrow-left.svg" alt="" className="arrow" />
            </button>
          </div>
          <div className="poster-container">
            {filmsToShow.map((film) =>
              film.poster_path !== null ? (
                <Link key={film.id} to={`/ItemInfo/${film.id}`}>
                  <img
                    key={film.id}
                    src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
                    alt="poster"
                    className="poster-img-carousel-similar"
                  />
                </Link>
              ) : (
                <img
                  src={postermanquant}
                  className="poster-img-carousel-similar"
                  alt={`${choice} introuvable`}
                />
              )
            )}
          </div>
          <div className="button-container">
            <button
              className="carousel-button"
              type="button"
              onClick={handleNextClick}
            >
              <img src="/src/assets/arrow-right.svg" alt="" className="arrow" />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

CarouselSimilarMovies.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default CarouselSimilarMovies;
