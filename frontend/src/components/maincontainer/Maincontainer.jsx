import React, { useEffect, useState } from "react";
import axios from "axios";
import { useChoice } from "../../contexts/ChoiceContext";
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
  const { choice } = useChoice();
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

  useEffect(() => setFilterMovie(null), [choice]);

  return (
    <div>
      <Navbar setUrlApi={setUrlApi} filterMovie={setFilterMovie} />
      <Carousel />
      <GenresList setFilterMovie={setFilterMovie} />
      <CardList listItem={listItem} />
      <Pagination pagination={pagination} setPagination={setPagination} />
    </div>
  );
}

export default Maincontainer;
