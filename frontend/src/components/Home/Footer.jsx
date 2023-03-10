import React from "react";
import "./Homebody.css";
import logo from "../../assets/img/logo.png";
import facebook from "../../assets/img/facebook.png";
import insta from "../../assets/img/insta.png";
import youtube from "../../assets/img/youtube.png";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="liensutiles">
          <h2>LIENS UTILES</h2>
          <h3>Rapport d'activité 2021</h3>
        </div>
        <div className="rejoindre">
          <h2>Rejoindre l'équipe</h2>
          <h3>Offre d'emplois</h3>
        </div>
        <div className="contacts">
          <h2>Contact</h2>
          <h3>makesense dans le monde</h3>
        </div>
        <div className="logoimg">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="logoreseau">
        <img src={facebook} alt="facebook" />
        <img src={insta} alt="insta" />
        <img src={youtube} alt="youtube" />
      </div>
    </div>
  );
}
