import React from "react";
import "./Navbar.css";

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
        <input
          type="text"
          placeholder="Chercher sur Nacom"
          className="search-input"
        />
      </nav>
    </div>
  );
}
export default Navbar;
