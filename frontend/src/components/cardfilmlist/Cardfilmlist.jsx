import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Cardfilmlist.css";
import Cardfilmitem from "./cardfilmitem/Cardfilmitem";

const url = import.meta.env.VITE_API_URL;
const keyUrl = import.meta.env.VITE_API_KEY;

function Cardfilmlist() {
  const [films, setFilms] = useState([]);
  // const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`${url}/discover/movie/?api_key=${keyUrl}&language=fr-FR&page=1`)
      .then((response) => {
        setFilms(response.data.results);
      })

      .catch((err) => {
        console.warn(err);
      });
  }, []);

  return (
    <div className="cardfilm">
      {films.map((film) => {
        return <Cardfilmitem key={film.id} results={film} />;
      })}
    </div>
  );
}

// Cardfilmlist.propTypes = {
//   response: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//     })
//   ).isRequired,
// };

export default Cardfilmlist;
