import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import CarouselSimilarMovies from "../carousel/CarouselSimilarMovies";
import "./Filminfo.css";

// const movieId = 505642;
const url = import.meta.env.VITE_API_URL;
const keyUrl = import.meta.env.VITE_API_KEY;

function Filminfo() {
  const [getDetails, setGetDetails] = useState([]);
  const [getVideo, setGetVideo] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`${url}/movie/${id}?api_key=${keyUrl}&language=fr-FR`)
      .then((response) => setGetDetails(response.data))
      .catch((err) => console.warn(err));
  }, []);
  useEffect(() => {
    axios
      .get(`${url}/movie/${id}/videos?api_key=${keyUrl}`)
      .then((resp) => {
        setGetVideo(resp.data.results[0]);
      })
      .catch((err) => console.warn(err));
  }, []);
  return (
    <div className="filminfo">
      <div className="filminfo-first">
        <img
          src={`https://image.tmdb.org/t/p/w500${getDetails.poster_path}`}
          alt="poster of movie"
          className="filminfo-poster"
        />
        <div className="filminfo-box-video">
          <YouTube videoId={getVideo.key} />

          <div className="filminfo-retrouver">A retrouver sur</div>
        </div>
      </div>

      <div className="filminfo-second">
        <p className="filminfo-info">{getDetails.overview}</p>
        {/* <p className="filminfo-resume">{getDetails.overview}</p> */}
      </div>
      <div className="similar-movies-carousel">
        <CarouselSimilarMovies movieId={id} />
      </div>
    </div>
  );
}

export default Filminfo;
