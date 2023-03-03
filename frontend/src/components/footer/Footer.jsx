import React from "react";
import "./Footer.css";
import banner from "../header/banner.png";

function Footer() {
  return (
    <footer className="footer">
      <img src={banner} alt="logo" className="footer__logo" />
      <div className="footer__container">
        <p className="footer__p footer__item">Moviescope</p>

        <p className="footer__mentions footer__item">Data provided by TMDB</p>
        <p className="footer__team footer__item">Created by Nacom</p>
        <a href="mailto: xxx@gmail.com" className="footer__item">
          Contact us
        </a>
      </div>
      <a href="#header">
        <i className="fa-solid fa-arrow-up fa-xl" />
      </a>
    </footer>
  );
}

export default Footer;
