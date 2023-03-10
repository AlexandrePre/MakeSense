import React from "react";
import PropTypes from "prop-types";
import "./CustomButton.css";

export default function CustomButton({ onClick }) {
  return (
    <button className="expertButton" type="button" onClick={onClick}>
      Valide ta sélection
    </button>
  );
}

CustomButton.propTypes = {
  onClick: PropTypes.string.isRequired,
};
