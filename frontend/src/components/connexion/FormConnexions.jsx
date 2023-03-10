import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import good from "../../assets/img/good.png";
import bad from "../../assets/img/bad.png";
import eyes from "../../assets/img/oeil.png";
import polygon4 from "../../assets/img/Polygon4.png";
import logo from "../../assets/img/logo.png";

import eyesInvisibles from "../../assets/img/oeilcache.png";
import api from "../../services/api";
import { authContext } from "../../hooks/authContext";
import "../../pages/connexionpage.css";

export default function FormInscription() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [logoValide, setLogoValide] = useState(false);
  const { login, auth } = useContext(authContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (auth.data) {
      navigate("/dashboard");
    }
  }, []);

  const handleVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const emailValidation = (e) => {
    const pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{1,2})+$/;
    const emailValue = e.target.value;
    setEmail(emailValue);
    if (email.match(pattern)) {
      setLogoValide(true);
    } else {
      setLogoValide(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      api
        .post("user/login", { email, password }, { withCredentials: true })
        .then((res) => {
          if (res.status === 200) {
            login(res.data);
          }
        })
        .catch((err) => err.response);
    }
  };
  return (
    <div className="connexion-page">
      <img src={polygon4} alt="polygon4" id="polygon4" />
      <img src={logo} alt="logo" id="logo" />

      <form className="form-connexion" onSubmit={handleSubmit}>
        <h2>Connexion à Makesense</h2>
        <div id="mail">
          <input
            type="text"
            id="email"
            name="mail"
            placeholder="adresse mail"
            value={email}
            onChange={emailValidation}
            required="required"
          />
          <img
            id="logoValidationconnexion"
            src={logoValide ? good : bad}
            alt="validation"
          />
        </div>

        <div id="password">
          <input
            type={passwordVisibility ? "teste" : "password"}
            name="password"
            id="pass"
            placeholder="mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required="required"
          />
          <img
            id="btn-visibility"
            onClick={handleVisibility}
            src={passwordVisibility ? eyesInvisibles : eyes}
            role="presentation"
            alt="oeil"
          />
        </div>

        <button type="submit" id="btn-inscription" value="Login">
          Connexion
        </button>
      </form>
    </div>
  );
}
