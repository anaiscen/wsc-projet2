import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useChoice } from "../../contexts/ChoiceContext";
import CarouselSimilarMovies from "../carousel/CarouselSimilarMovies";
import "./ItemInfo.css";
import WatchProviders from "./watchProviders/WatchProviders";
import trailermanquant from "../../assets/trailermanquant.png";

const url = import.meta.env.VITE_API_URL;
const keyUrl = import.meta.env.VITE_API_KEY;

function ItemInfo() {
  const [getDetails, setGetDetails] = useState([]);
  const [getVideo, setGetVideo] = useState([]);
  const [availibility, setAvailibility] = useState([
    { provider_name: "Pas encore disponible" },
  ]);

  const { id } = useParams();
  const { choice } = useChoice();
  const videoId = getVideo?.key ? getVideo.key : null;

  useEffect(() => {
    axios
      .get(`${url}/${choice}/${id}?api_key=${keyUrl}&language=EN-US`)
      .then((response) => setGetDetails(response.data))
      .catch((err) => console.warn(err));
  }, [id]);
  useEffect(() => {
    axios
      .get(`${url}/${choice}/${id}/videos?api_key=${keyUrl}`)
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
  }, [id, availibility]);

  useEffect(() => {
    axios
      .get(
        `${url}/movie/${id}/watch/providers?api_key=${keyUrl}&watch_region="US"`
      )
      .then((response) => {
        if (response.data.results.US.rent !== undefined) {
          setAvailibility(response.data.results.US.rent);
          console.log(availibility);
        } else if (response.data.results.US.rent === undefined) {
          setAvailibility(response.data.results.US.flatrate);
          console.log(availibility);
        } else if (response.data.results.US.flatrate === undefined) {
          setAvailibility(response.data.results.US.buy);
          console.log(availibility);
        }
      })
      .catch((err) => console.warn(err));
  }, [id]);
  // useEffect(() => {
  //   if (
  //     availibility.length === 1 &&
  //     availibility[0].provider_name === "Pas encore disponible"
  //   ) {
  //     axios
  //       .get(
  //         `${url}/movie/${id}/watch/providers?api_key=${keyUrl}&watch_region="US"`
  //       )
  //       .then((response) => {
  //         if (response.data.results.US.rent !== undefined) {
  //           setAvailibility(response.data.results.US.rent);
  //         } else if (response.data.results.US.rent === undefined) {
  //           setAvailibility(response.data.results.US.flatrate);
  //         } else if (response.data.results.US.flatrate === undefined) {
  //           setAvailibility(response.data.results.US.buy);
  //         }
  //       })
  //       .catch((err) => console.warn(err));
  //   }
  // }, [id, availibility]);

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
            <p className="item-info-title">Where to watch ?</p>
            <div className="ItemInfo-retrouver">
              {availibility ? (
                availibility.map((platform) => (
                  <WatchProviders
                    key={platform.provider_id}
                    image={platform.logo_path}
                  />
                ))
              ) : (
                <p> Not available yet</p>
              )}
            </div>
            <p className="ItemInfo-info">{getDetails.overview}</p>
          </div>
        </div>
      </div>

      <div className="similar-movies-carousel">
        <CarouselSimilarMovies movieId={parseInt(id, 10)} />
      </div>
    </div>
  );
}
export default ItemInfo;
