import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import { useChoice } from "../../contexts/ChoiceContext";
import CarouselSimilarMovies from "../carousel/CarouselSimilarMovies";
import "./ItemInfo.css";

// const movieId = 505642;
const url = import.meta.env.VITE_API_URL;
const keyUrl = import.meta.env.VITE_API_KEY;

function ItemInfo() {
  const [getDetails, setGetDetails] = useState([]);
  const [getVideo, setGetVideo] = useState([]);
  const { id } = useParams();
  const { choice } = useChoice();
  useEffect(() => {
    axios
      .get(`${url}/${choice}/${id}?api_key=${keyUrl}&language=fr-FR`)
      .then((response) => setGetDetails(response.data))
      .catch((err) => console.warn(err));
  }, [id]);
  useEffect(() => {
    axios
      .get(`${url}/${choice}/${id}/videos?api_key=${keyUrl}`)
      .then((resp) => {
        setGetVideo(resp.data.results[0]);
      })
      .catch((err) => console.warn(err));
  }, [id]);
  return (
    <div className="ItemInfo">
      <div className="ItemInfo-first">
        <img
          src={`https://image.tmdb.org/t/p/w500${getDetails.poster_path}`}
          alt="poster of movie"
          className="ItemInfo-poster"
        />
        <div className="ItemInfo-box-video">
          <div className="video">
            <YouTube videoId={getVideo?.key ? getVideo.key : null} />
          </div>

          <div className="ItemInfo-retrouver">A retrouver sur</div>
        </div>
      </div>

      <div className="ItemInfo-second">
        <p className="ItemInfo-info">{getDetails.overview}</p>
      </div>
      <div className="similar-movies-carousel">
        <CarouselSimilarMovies movieId={parseInt(id, 10)} />
      </div>
    </div>
  );
}
export default ItemInfo;
