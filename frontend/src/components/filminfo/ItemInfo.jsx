import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CarouselSimilarMovies from "../carousel/CarouselSimilarMovies";
import "./ItemInfo.css";
import trailermanquant from "../../assets/trailermanquant.png";

const url = import.meta.env.VITE_API_URL;
const keyUrl = import.meta.env.VITE_API_KEY;

function ItemInfo() {
  const [getDetails, setGetDetails] = useState([]);
  const [getVideo, setGetVideo] = useState([]);
  const { id } = useParams();
  const videoId = getVideo?.key ? getVideo.key : null;

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
        const ofTrailer = resp.data.results.find(
          (vid) => vid.name === "Official Trailer"
        );
        const trailer = resp.data.results.find((vid) => vid.type === "Trailer");
        const noTrailer = resp.data.results[0];
        if (ofTrailer !== undefined) {
          setGetVideo(ofTrailer);
        } else if (trailer !== undefined) {
          setGetVideo(trailer);
        } else if (noTrailer !== undefined) {
          setGetVideo(noTrailer);
        } else {
          setGetVideo(undefined);
        }
      })
      .catch((err) => console.warn(err));
  }, []);

  return (
    <div className="ItemInfo">
      <div className="ItemInfo-first">
        <img
          src={`https://image.tmdb.org/t/p/w500${getDetails.poster_path}`}
          alt="poster of movie"
          className="ItemInfo-poster"
        />
        <div className="video-container">
          <div className="video-responsive">
            {videoId !== null ? (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            ) : (
              <img src={trailermanquant} alt="no Trailer" />
            )}
          </div>
          <p className="ItemInfo-info">{getDetails.overview}</p>
        </div>
        {/* <div className="ItemInfo-retrouver">A retrouver sur</div> */}
      </div>

      <div className="similar-movies-carousel">
        <CarouselSimilarMovies movieId={id} />
      </div>
    </div>
  );
}

export default ItemInfo;
