import React from "react";
import "./Header.css";
import photo from "./banner.png";

function Header() {
  return (
    <header>
      <div className="hero-photo">
        <img src={photo} alt="Bannière" />
      </div>
    </header>
  );
}

export default Header;
