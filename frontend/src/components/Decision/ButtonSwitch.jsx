import React from "react";
import PropTypes from "prop-types";
import "./ButtonSwitch.css";

function ButtonSwitch({
  handleSubmitDecision,
  back,
  next,
  createTab,
  isActiveDecision,
}) {
  let btn1 = "none__btn";
  let fonctionButton1 = back;
  let fonctionButton2 = next;
  switch (true) {
    case isActiveDecision === 1:
      btn1 = "none__btn";
      fonctionButton1 = back;
      fonctionButton2 = next;
      break;
    case isActiveDecision > 1 && isActiveDecision < 5:
      btn1 = "active__btn";
      fonctionButton1 = back;
      fonctionButton2 = next;
      break;
    case isActiveDecision === 5:
      btn1 = "active__btn";
      fonctionButton1 = back;
      fonctionButton2 = handleSubmitDecision;
      break;
    case isActiveDecision === 6:
      btn1 = "active__btn";
      fonctionButton1 = back;
      fonctionButton2 = createTab;
      break;
    default:
  }
  return (
    <div className="btn__decision">
      <button className={btn1} type="button" onClick={fonctionButton1}>
        Précedent
      </button>
      <button className="active__btn" type="button" onClick={fonctionButton2}>
        Suivant
      </button>
    </div>
  );
}
ButtonSwitch.propTypes = {
  back: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  createTab: PropTypes.func.isRequired,
  handleSubmitDecision: PropTypes.func.isRequired,
  isActiveDecision: PropTypes.string.isRequired,
};

export default ButtonSwitch;
