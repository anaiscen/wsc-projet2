import React from "react";
import "./Navbar.css";
import Recherchbar from "./recherchebar/Recherchbar";

function Navbar() {
  return (
    <div>
      <nav className="navigation">
        <ul>
          <li>
            <a href="/film">Film</a>
          </li>
          <li>
            <a href="/série">Série</a>
          </li>
        </ul>
        <Recherchbar />
      </nav>
    </div>
  );
}
export default Navbar;
