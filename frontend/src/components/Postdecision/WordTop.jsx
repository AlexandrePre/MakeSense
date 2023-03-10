/* eslint-disable camelcase */
import PropTypes from "prop-types";
import "./ProgressBar.css";

function WordTop({ word }) {
  return <div className="four">{word}</div>;
}

WordTop.propTypes = {
  word: PropTypes.string.isRequired,
};

export default WordTop;
