import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../pagination/Pagination";
import GenresList from "../genres/GenresList";
import CardList from "../cardfilmlist/CardList";
import Navbar from "../navbar/Navbar";
import Carousel from "../carousel/Carousel";

function Maincontainer() {
  const url = import.meta.env.VITE_API_URL;
  const keyUrl = import.meta.env.VITE_API_KEY;
  const [filterMovie, setFilterMovie] = useState(null);
  const [listItem, setListItem] = useState([]);
  const [choice, setChoice] = useState("movie");
  const [pagination, setPagination] = useState(1);

  const [urlApi, setUrlApi] = useState(
    `${url}/discover/${choice}?api_key=${keyUrl}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pagination}&with_genres=${filterMovie}&with_watch_monetization_types=flatrate`
  );

  useEffect(() => {
    const getApiGenre = urlApi;

    axios
      .get(getApiGenre)
      .then((response) => {
        console.warn(response.data);
        setListItem(response.data.results);
        setPagination(response.data.page);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [filterMovie, urlApi]);

  useEffect(() => {
    setUrlApi(
      `${url}/discover/${choice}?api_key=${keyUrl}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pagination}&with_genres=${filterMovie}&with_watch_monetization_types=flatrate`
    );
  }, [choice, filterMovie, pagination]);

  return (
    <div>
      <Navbar setChoice={setChoice} setUrlApi={setUrlApi} />
      <Carousel choice={choice} />
      <GenresList setFilterMovie={setFilterMovie} choice={choice} />
      <CardList listItem={listItem} />
      <Pagination pagination={pagination} setPagination={setPagination} />
    </div>
  );
}

export default Maincontainer;
