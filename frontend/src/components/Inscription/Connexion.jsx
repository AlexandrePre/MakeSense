import React from "react";
import { Link } from "react-router-dom";

import "./Connexion.css";

export default function Connexion() {
  return (
    <div className="connexion">
      <h3>Compte existant ?</h3>
      <Link to="/connexion">
        <button type="button" id="btn-connexion">
          Se connecter
        </button>
      </Link>
    </div>
  );
}
