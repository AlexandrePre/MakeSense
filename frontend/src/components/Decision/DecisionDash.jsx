import React from "react";
import PropTypes from "prop-types";

import "./DecisionDash.css";

function DecisionDash({ title, isActive }) {
  return (
    <div
      className={isActive ? "active__Decision__dash__h2" : "Decision__dash__h2"}
    >
      <h2>{title}</h2>
    </div>
  );
}
DecisionDash.propTypes = {
  title: PropTypes.string.isRequired,
  isActive: PropTypes.string.isRequired,
};
export default DecisionDash;
