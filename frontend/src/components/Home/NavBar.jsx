import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import burger from "../../assets/img/burger.png";

import "./NavBar.css";

function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);

  const toggleNavSmallScreen = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changWidth = () => {
      setLargeur(window.innerWidth);

      if (window.innerWidth > 500) {
        setToggleMenu(false);
      }
    };

    window.addEventListener("resize", changWidth);

    return () => {
      window.removeEventListener("resize", changWidth);
    };
  }, []);

  return (
    <nav id="navbar">
      {(toggleMenu || largeur > 500) && (
        <ul className="liste">
          <img className="logo" src={logo} alt="logo" />

          <li className="item"> SOLUTION</li>
          <li className="item"> CONTACT</li>
          <Link to="connexion" style={{ textDecoration: "none" }}>
            <li className="item"> CONNEXION</li>
          </Link>
          <Link to="inscription" style={{ textDecoration: "none" }}>
            <li className="item" id="inscrit">
              INSCRIS TOI
            </li>
          </Link>
        </ul>
      )}
      <button onClick={toggleNavSmallScreen} className="btn-nav" type="button">
        <img className="burger" src={burger} alt="burger" />
      </button>
    </nav>
  );
}

export default NavBar;
