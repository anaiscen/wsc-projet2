import React, { useEffect, useState } from "react";
import axios from "axios";
import { useChoice } from "../../contexts/ChoiceContext";
import GenresList from "../genres/GenresList";
import CardList from "../cardfilmlist/CardList";
import Navbar from "../navbar/Navbar";
import Carousel from "../carousel/Carousel";

function Maincontainer() {
  const url = import.meta.env.VITE_API_URL;
  const keyUrl = import.meta.env.VITE_API_KEY;
  const [filterMovie, setFilterMovie] = useState(null);
  const [listItem, setListItem] = useState([]);
  const { choice } = useChoice();
  const [urlApi, setUrlApi] = useState(
    `${url}/discover/${choice}?api_key=${keyUrl}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${filterMovie}&with_watch_monetization_types=flatrate`
  );

  useEffect(() => {
    const getApiGenre = urlApi;

    axios
      .get(getApiGenre)
      .then((response) => {
        console.warn(response.data);
        setListItem(response.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [filterMovie, urlApi]);

  useEffect(() => {
    setUrlApi(
      `${url}/discover/${choice}?api_key=${keyUrl}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${filterMovie}&with_watch_monetization_types=flatrate`
    );
  }, [choice, filterMovie]);

  return (
    <div>
      <Navbar setUrlApi={setUrlApi} />
      <Carousel />
      <GenresList setFilterMovie={setFilterMovie} />
      <CardList listItem={listItem} />
    </div>
  );
}

export default Maincontainer;

// passer setUrlApi en props dans Navbar
