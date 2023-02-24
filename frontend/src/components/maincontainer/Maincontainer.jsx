import React, { useEffect, useState } from "react";
import axios from "axios";
import CategoriesList from "../categories/CategoriesList";
import Cardfilmlist from "../cardfilmlist/Cardfilmlist";

function Maincontainer() {
  const url = import.meta.env.VITE_API_URL;
  const keyUrl = import.meta.env.VITE_API_KEY;
  const [filterMovie, setFilterMovie] = useState(null);
  const [listFilm, setListFilm] = useState([]);
  // const [page, setPage] = useState();

  useEffect(() => {
    const getApiGenre = `${url}/discover/movie?api_key=${keyUrl}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=&with_genres=${filterMovie}&with_watch_monetization_types=flatrate`;

    axios
      .get(getApiGenre)
      .then((response) => {
        console.warn(response.data);
        setListFilm(response.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [filterMovie]);

  return (
    <div>
      <CategoriesList setFilterMovie={setFilterMovie} />
      <Cardfilmlist listFilm={listFilm} />
    </div>
  );
}

export default Maincontainer;
