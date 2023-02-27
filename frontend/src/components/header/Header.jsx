import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import photo from "./banner.png";

function Header() {
  return (
    <header>
      <div className="hero-photo">
        <Link to="/">
          <img src={photo} alt="Bannière" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
