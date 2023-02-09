import axios from "axios";
import React, { useEffect, useState } from "react";
import "./carousel.css";

function Carousel() {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const apiKey = "121fad3c6c9b7bc3d8e43ee646e86854";

  useEffect(() => {
    const getApi = () => {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=fr-FR&page=1`
        )
        .then((response) => {
          setData(response.data.results);
        })
        .catch((err) => {
          console.warn(err);
          alert("Have some problem");
        });
    };
    getApi();
  }, []);

  const handleNextClick = () => {
    if (currentIndex + 10 < data.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePreviousClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const filmsToShow = data.slice(currentIndex, currentIndex + 10);
  return (
    <div className="carousel">
      <div className="carousel-container">
        <div className="button-container">
          <button
            className="carousel-button"
            type="button"
            disabled={currentIndex === 0}
            onClick={handlePreviousClick}
          >
            <img src="/src/assets/arrow-left.svg" alt="" className="arrow" />
          </button>
        </div>
        <div className="poster-container">
          {filmsToShow.map((film) => (
            <img
              key={film.id}
              src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
              alt="poster"
              className="poster-img"
            />
          ))}
        </div>
        <div className="button-container">
          <button
            className="carousel-button"
            type="button"
            disabled={currentIndex + 10 >= data.length}
            onClick={handleNextClick}
          >
            <img src="/src/assets/arrow-right.svg" alt="" className="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
