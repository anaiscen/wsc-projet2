import React, { useState } from "react";
import "./Navbar.css";
import PropTypes from "prop-types";
import { useChoice } from "../../contexts/ChoiceContext";
import "./recherchebar/Recherchbar.css";

// retenter avec axios dans useEffect
// route au click sur film/serie
// call API au chargement de la page
function Navbar({ setUrlApi }) {
  const { setChoice } = useChoice();
  const changeChoiceTV = () => {
    setChoice("tv");
  };
  const changeChoiceMovie = () => {
    setChoice("movie");
  };
  const url = import.meta.env.VITE_API_URL;
  const keyUrl = import.meta.env.VITE_API_KEY;
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    setUrlApi(
      `${url}/search/multi?api_key=${keyUrl}&language=en-US&page=1&include_adult=false&query=${query}`
    );
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div>
      <nav className="navigation">
        <ul>
          <li>
            <button
              className="choice-button"
              type="button"
              onClick={changeChoiceMovie}
            >
              Films
            </button>
          </li>
          <li>
            <button
              type="button"
              className="choice-button"
              onClick={changeChoiceTV}
            >
              Series
            </button>
          </li>
        </ul>
        <div className="search-bar-container">
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={handleKeyDown}
            className="search-bar-input"
            placeholder="Avatar"
          />
          <button
            type="button"
            onClick={handleSearch}
            className="search-bar-button"
          >
            Search
          </button>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  setUrlApi: PropTypes.func.isRequired,
};

export default Navbar;
