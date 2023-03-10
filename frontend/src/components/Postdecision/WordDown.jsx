/* eslint-disable camelcase */
import PropTypes from "prop-types";
import "./ProgressBar.css";

function WordDown({ word }) {
  return <div className="five">{word}</div>;
}

WordDown.propTypes = {
  word: PropTypes.string.isRequired,
};

export default WordDown;
