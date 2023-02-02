import React from "react";
import "./Footer.css";
import logo from "./footer__image.jpg";

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="logo" className="footer__logo" />
      <div className="footer__container">
        <p className="footer__p footer__item">Nom du site</p>

        <p className="footer__mentions footer__item">
          Données provenant de TMDB
        </p>
        <label
          htmlFor="footer__searchBar"
          id="footer__label"
          className="footer__item"
        >
          Recherche
        </label>
        <input
          type="text"
          id="footer__searchBar"
          className="footer__item"
          placeholder="Mon film, ma série"
        />
        <a href="mailto: xxx@gmail.com" className="footer__item">
          Nous contacter
        </a>
      </div>
      <a href="#header">
        <i className="fa-solid fa-arrow-up fa-xl" />
      </a>
    </footer>
  );
}

export default Footer;
