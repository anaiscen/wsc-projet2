import React from "react";
import "./Header.css";
import logo from "./logo.png";
import photo from "./photo.jpeg";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="hero-photo">
        <img src={photo} alt="Bannière" />
      </div>
    </header>
  );
}

export default Header;
