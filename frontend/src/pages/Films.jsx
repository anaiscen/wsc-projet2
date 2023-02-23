import React, { useEffect, useState } from "react";
import axios from "axios";
import Cardfilmitem from "../components/cardfilmlist/cardfilmitem/Cardfilmitem";

function Films() {
  const url = import.meta.env.VITE_API_URL;
  const keyUrl = import.meta.env.VITE_API_KEY;

  const [filmList, setFilmList] = useState([]);
  useEffect(() => {
    const getFilmList = () => {
      axios
        .get(
          `${url}/discover/movie?api_key=${keyUrl}&language=en-US&popularity.asc`
        )
        .then((response) => {
          setFilmList(response.data.results);
          console.log("XXXXXXXXXXXXXX", response.data.results);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    getFilmList();
  }, []);
  return (
    <div>
      <h1>Films</h1>

      <div>
        {filmList ? (
          filmList.map((content) => (
            <Cardfilmitem key={content.id} results={content} />
          ))
        ) : (
          <p>Veuillez attendre</p>
        )}
      </div>
    </div>
  );
}

export default Films;
