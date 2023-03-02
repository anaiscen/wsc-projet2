import React from "react";
import "./Footer.css";
import banner from "../header/banner.png";
import cedric from "./cedric.png";
import anais from "./anais.png";
import mehdi from "./mehdi.png";
import nicolas from "./nicolas.png";
import olga from "./olga.png";

function Footer() {
  return (
    <footer className="footer">
      <img src={banner} alt="logo" className="footer__logo" />
      <div className="footer__container">
        <p className="footer__p footer__item">Moviscope</p>

        <p className="footer__mentions footer__item">
          Données provenant de TMDB
        </p>
        <p className="footer__team footer__item">Créé par</p>
        <p className="footer__avatars footer__team">
          <img src={nicolas} alt="Nicolas" className="footer__avatar" />
          <img src={anais} alt="Anaïs" className="footer__avatar" />
          <img src={cedric} alt="Cédric" className="footer__avatar" />
          <img src={olga} alt="Olga" className="footer__avatar" />
          <img src={mehdi} alt="Mehdi" className="footer__avatar" />
        </p>
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
