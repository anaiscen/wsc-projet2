import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import CarouselSimilarMovies from "../carousel/CarouselSimilarMovies";
import "./ItemInfo.css";
import WatchProviders from "./watchProviders/WatchProviders";

// const movieId = 505642;
const url = import.meta.env.VITE_API_URL;
const keyUrl = import.meta.env.VITE_API_KEY;

function ItemInfo() {
  const [getDetails, setGetDetails] = useState([]);
  const [getVideo, setGetVideo] = useState([]);
  const [availibility, setAvailibility] = useState([
    { provider_name: "Pas encore disponible" },
  ]);

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
  useEffect(() => {
    axios
      .get(
        `${url}/movie/${id}/watch/providers?api_key=${keyUrl}&watch_region="US"`
      )
      .then((response) => {
        if (response.data.results.US.rent !== undefined) {
          setAvailibility(response.data.results.US.rent);
        } else if (response.data.results.US.rent === undefined) {
          setAvailibility(response.data.results.US.flatrate);
        } else if (response.data.results.US.flatrate === undefined) {
          setAvailibility(response.data.results.US.buy);
        } else if (response.data.results.US === undefined) {
          setAvailibility();
        }
      })
      .catch((err) => console.warn(err));
  }, []);
  // useEffect(() => {
  //   axios
  //     .get(
  //       `${url}/tv/${id}/watch/providers?api_key=${keyUrl}&watch_region="US"`
  //     )
  //     .then((response) => setAvailibility(response.data.results.US.flatrate))
  //     .catch((err) => console.warn(err));
  // }, []);
  // useEffect(() => {
  //   axios
  //     .get(
  //       `${url}/movie/${id}/watch/providers?api_key=${keyUrl}&watch_region="US"`
  //     )
  //     .then((response) => setAvailibility(response.data.results.US.buy))
  //     .catch((err) => console.warn(err));
  // }, []);
  // useEffect(() => {
  //   axios
  //     .get(
  //       `${url}/movie/${id}/watch/providers?api_key=${keyUrl}&watch_region="US"`
  //     )
  //     .then((response) => setAvailibility(response.data.results.US.rent))
  //     .catch((err) => console.warn(err));
  // }, []);

  return (
    <div className="ItemInfo">
      <div className="ItemInfo-first">
        <img
          src={`https://image.tmdb.org/t/p/w500${getDetails.poster_path}`}
          alt="poster of movie"
          className="ItemInfo-poster"
        />
        <div className="ItemInfo-box-video">
          <YouTube videoId={getVideo?.key ? getVideo.key : null} />

          <div className="ItemInfo-retrouver">
            <p className="ItemInfo-retrouver-sur">A retrouver sur</p>
            {availibility ? (
              availibility.map((platform) => (
                <WatchProviders
                  key={id}
                  name={platform.provider_name}
                  image={platform.logo_path}
                />
              ))
            ) : (
              <p> Pas encore disponible sur les plateformes</p>
            )}
          </div>
        </div>
      </div>

      <div className="ItemInfo-second">
        <p className="ItemInfo-info">{getDetails.overview}</p>
        {/* <p className="ItemInfo-resume">{getDetails.overview}</p> */}
      </div>
      <div className="similar-movies-carousel">
        <CarouselSimilarMovies movieId={id} />
      </div>
    </div>
  );
}

export default ItemInfo;
