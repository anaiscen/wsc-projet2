import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Carousel.css";
import { Link } from "react-router-dom";
import { useChoice } from "../../contexts/ChoiceContext";

function Carousel() {
  const { choice } = useChoice();
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayData, setDisplayData] = useState([]);
  const url = import.meta.env.VITE_API_URL;
  const keyUrl = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    const getApi = () => {
      axios
        .get(`${url}/${choice}/popular?api_key=${keyUrl}&language=fr-FR&page=1`)
        .then((response) => {
          setData(response.data.results);
        })
        .catch((err) => {
          console.warn(err);
        });
    };
    getApi();
  }, [choice]);

  useEffect(() => {
    setDisplayData([...data, ...data]);
  }, [data]);

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % data.length);
  };

  const handlePreviousClick = () => {
    setCurrentIndex((currentIndex + data.length - 1) % data.length);
  };
  const correctIndex = currentIndex % displayData.length;
  const filmsToShow = displayData.slice(correctIndex, correctIndex + 10);
  return (
    <div className="carousel">
      <div className="carousel-container">
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
          {filmsToShow.map((film) => (
            <Link to={`/ItemInfo/${film.id}`}>
              <img
                key={film.id}
                src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
                alt="poster"
                className="poster-img-carousel"
              />
            </Link>
          ))}
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
    </div>
  );
}

export default Carousel;
