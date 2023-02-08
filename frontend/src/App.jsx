import axios from "axios";
import { useState } from "react";
import Cardfilm from "./components/cardfilm/Cardfilm";
import "./App.css";
import Filminfo from "./components/filminfo/Filminfo";

const apiKey = "121fad3c6c9b7bc3d8e43ee646e86854";

function App() {
  const [setDataFilm] = useState([]);
  const getApi = () => {
    axios
      .get(`https://api.themoviedb.org/3/movie/76341?api_key=${apiKey}`)
      .then((response) => {
        setDataFilm(response.data);
      })
      .catch((err) => {
        console.warn(err);
        alert("Have some problem");
      });
  };
  getApi();

  return (
    <div className="App">
      <Cardfilm />
      <Filminfo />
    </div>
  );
}

export default App;
