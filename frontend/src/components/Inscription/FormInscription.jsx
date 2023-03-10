import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import good from "../../assets/img/good.png";
import bad from "../../assets/img/bad.png";
import eyes from "../../assets/img/oeil.png";
import eyesInvisibles from "../../assets/img/oeilcache.png";
import api from "../../services/api";
import "./Forminscription.css";
import PWDRequisite from "./PWDRequiste";
import data from "../../tools/datavalidation";

export default function FormInscription() {
  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    password: "",
  });

  const [email, setEmail] = useState({ email: "" });
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const [logoValide, setLogoValide] = useState(false);
  const [pwdRequiste, setPWDRquisite] = useState(false);
  const navigate = useNavigate();

  const handleVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const [checks, setChecks] = useState({
    capsLetterCheck: false,
    numberCheck: false,
    pwdLengthCheck: false,
    specialCharCheck: false,
  });

  const emailValidation = (e) => {
    const pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{1,2})+$/;
    const emailValue = e.target.value;
    setEmail({ email: emailValue });
    if (email.email.match(pattern)) {
      setLogoValide(true);
    } else {
      setLogoValide(false);
    }
  };

  const handleOnFocus = () => {
    setPWDRquisite(true);
  };

  const handleOnBlur = () => {
    setPWDRquisite(false);
  };

  const handleOnKeyUp = (e) => {
    const { value } = e.target;
    const capsLetterCheck = /[A-Z]/.test(value);
    const numberCheck = /[0-9]/.test(value);
    const pwdLengthCheck = value.length >= 8;
    const specialCharCheck = /[!@#$%^&*.]/.test(value);
    setChecks({
      capsLetterCheck,
      numberCheck,
      pwdLengthCheck,
      specialCharCheck,
    });
  };

  const handleSubmitConnexion = (e) => {
    e.preventDefault();
    if (input.lastname && input.firstname && email && input.password) {
      api
        .post("user/", { ...input, ...email }, { withCredentials: true })
        .then((res) => {
          if (res.status === 200) {
            navigate("/connexion");
          }
        })
        .catch((err) => err.response);
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmitConnexion}>
        <h2>Créer un compte gratuit</h2>
        <div id="lastname">
          <input
            type="text"
            value={input.lastname}
            placeholder="Lastname"
            onChange={handleChange}
            name="lastname"
            required="required"
            id="lastnameConnexion"
          />
        </div>
        <div id="firstname">
          <input
            type="text"
            value={input.firstname}
            placeholder="Firstname"
            onChange={handleChange}
            name="firstname"
            required="required"
            id="firstnameConnexion"
          />
        </div>

        <div id="mail">
          <input
            type="email"
            id="emailConnexion"
            required="required"
            placeholder="email"
            onChange={emailValidation}
            value={email.email}
          />
          <img
            id="logoValidation"
            src={logoValide ? good : bad}
            alt="validation"
          />
        </div>

        <div id="password">
          <input
            type={passwordVisibility ? "teste" : "password"}
            placeholder="Password"
            id="passwordConnexion"
            value={input.password}
            name="password"
            onChange={handleChange}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            onKeyUp={handleOnKeyUp}
          />
          <img
            id="btn-visibility-inscription"
            onClick={handleVisibility}
            src={passwordVisibility ? eyesInvisibles : eyes}
            role="presentation"
            alt="oeil"
          />
        </div>

        {pwdRequiste
          ? data.map((validation) => (
              <PWDRequisite
                id={validation.id}
                className={validation.className}
                text={validation.text}
                imageInvalide={validation.imageInvalide}
                imageValide={validation.imageValide}
                capsLetterFlag={checks.capsLetterCheck}
                numberFlag={checks.numberCheck}
                pwdLengthFlag={checks.pwdLengthCheck}
                specialCharFlag={checks.specialCharCheck}
              />
            ))
          : null}

        <button type="submit" id="btn-inscription" value="Creation">
          S'inscrire à Makesense
        </button>
      </form>
      <div id="termes">
        <h4>En vous inscrivant, vous accepter les</h4>
        <h5>Termes et conditions</h5>
      </div>
    </>
  );
}
