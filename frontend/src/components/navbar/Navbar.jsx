import React from "react";
import "./Navbar.css";
import { useChoice } from "../../contexts/ChoiceContext";
import Recherchbar from "./recherchebar/Recherchbar";

// retenter avec axios dans useEffect
// route au click sur film/serie
// call API au chargement de la page
function Navbar() {
  const { setChoice } = useChoice();
  const changeChoiceTV = () => {
    setChoice("tv");
  };
  const changeChoiceMovie = () => {
    setChoice("movie");
    console.log("COUCOU");
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
              Film
            </button>
          </li>
          <li>
            <button
              type="button"
              className="choice-button"
              onClick={changeChoiceTV}
            >
              Séries
            </button>
          </li>
        </ul>
        <Recherchbar />
      </nav>
    </div>
  );
}

export default Navbar;

// mettre le code de recherche bar ici + faire remonter le nouvel url avec setUrlApi
// créer un useEffect ici pour modifier setUrlApi ici
