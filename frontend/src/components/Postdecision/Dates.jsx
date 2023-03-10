/* eslint-disable camelcase */
import PropTypes from "prop-types";
import "./ProgressBar.css";

function Dates({ date }) {
  return <div className="two">{date}</div>;
}

Dates.propTypes = {
  date: PropTypes.string.isRequired,
};

export default Dates;
