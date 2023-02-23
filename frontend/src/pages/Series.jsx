import React, { useEffect, useState } from "react";
import axios from "axios";
import Cardfilmitem from "../components/cardfilmlist/cardfilmitem/Cardfilmitem";

function Series() {
  const url = import.meta.env.VITE_API_URL;
  const keyUrl = import.meta.env.VITE_API_KEY;

  const [seriesList, setSeriesList] = useState([]);
  useEffect(() => {
    const getSeriesmList = () => {
      axios
        .get(
          `${url}/discover/tv?api_key=${keyUrl}&language=en-US&popularity.asc`
        )
        .then((response) => {
          setSeriesList(response.data.results);
          console.log("XXXXXXXXXXXXXX", response.data.results);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    getSeriesmList();
  }, []);

  return (
    <div>
      <h1>Series</h1>
      {seriesList ? (
        seriesList.map((content) => (
          <Cardfilmitem key={content.id} results={content} />
        ))
      ) : (
        <p>attendre</p>
      )}
    </div>
  );
}

export default Series;
