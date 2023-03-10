import PropTypes from "prop-types";
import React from "react";
import "./Homebody.css";

function BodyItems({ title, txt, img }) {
  return (
    <div className="itembody">
      <h2>{title}</h2>
      <p className="texte">{txt}</p>
      <div className="img-container">
        <img src={img} alt="logo" />
      </div>
    </div>
  );
}

BodyItems.propTypes = {
  title: PropTypes.string.isRequired,
  txt: PropTypes.string.isRequired,
  img: PropTypes.symbol.isRequired,
};

export default BodyItems;
