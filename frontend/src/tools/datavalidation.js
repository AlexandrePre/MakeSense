import valide from "../assets/img/cocher.png";
import invalide from "../assets/img/supprimer.png";

const validationLogo = [
  {
    id: 1,
    className: "capsLetterFlag",
    text: " Must contain 1 Capital Letter ",
    imageInvalide: invalide,
    imageValide: valide,
  },

  {
    id: 2,
    className: "numberFlag",
    text: " Must contain number",
    imageInvalide: invalide,
    imageValide: valide,
  },
  {
    id: 3,
    className: "pwdLengthFlag",
    text: " Must be 8 Chars long",
    imageInvalide: invalide,
    imageValide: valide,
  },

  {
    id: 4,
    className: "specialCharFlag",
    text: "Must contain special character ",
    imageInvalide: invalide,
    imageValide: valide,
  },
];

export default validationLogo;
