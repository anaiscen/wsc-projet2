import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Recherchbar from "./recherchebar/Recherchbar";

// retenter avec axios dans useEffect
// route au click sur film/serie
// call API au chargement de la page
function Navbar() {
  return (
    <div>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/Films">Films</Link>
          </li>
          <li>
            <Link to="/Series">Series</Link>
          </li>
        </ul>
        <Recherchbar />
      </nav>
    </div>
  );
}
export default Navbar;
