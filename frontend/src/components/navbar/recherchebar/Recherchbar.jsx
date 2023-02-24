import React, { useState } from "react";
import axios from "axios";
import "./Recherchbar.css";
import ResultRecherche from "./ResultRecherche";

function RecherchBar() {
  const url = import.meta.env.VITE_API_URL;
  const keyUrl = import.meta.env.VITE_API_KEY;
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    axios
      .get(
        `${url}/search/multi?api_key=${keyUrl}&language=en-US&page=1&include_adult=false&query=${query}`
      )
      .then((response) => {
        setResults(response.data.results);
      });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDown}
        className="search-bar-input"
      />
      <button
        type="button"
        onClick={handleSearch}
        className="search-bar-button"
      >
        Chercher
      </button>
      <ResultRecherche results={results} />
    </div>
  );
}

export default RecherchBar;
