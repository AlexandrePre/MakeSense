import React, { useContext } from "react";
import PropTypes from "prop-types";
import DatePicker from "./ReactDatePicker";
import NotificationContext from "../../Contexts/NotificationContexts";
import "./DecisionCard.css";
import DatePickerDeadline from "./DatePickerDeadline";

function DecisionCard({ img, txt, title1, inputtext, isActiveDecision }) {
  const { setInput, input } = useContext(NotificationContext);
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="Decision__container">
        <div className="Decision__container__title">
          <div className="Decision__title__img">
            <img src={img} alt="" />
            <h3>{title1}</h3>
          </div>
          <p>{txt}</p>
          {isActiveDecision === 1 ? (
            <div>
              <label htmlFor="Date">Date postée</label>
              <DatePicker />
            </div>
          ) : null}
          {isActiveDecision === 2 ? (
            <div>
              <label htmlFor="Date">Date limite</label>
              <DatePickerDeadline />
            </div>
          ) : null}
        </div>

        <div className="Decision__container__input">
          {inputtext.map((el) => (
            <div>
              <label className="container__input" htmlFor={el.label}>
                {el.label}
              </label>
              <br />
              <br />
              <form id="form">
                {el.id === 1 ? (
                  <input
                    className="input__DecisionCard"
                    placeholder={el.placeholder}
                    type={el.type}
                    value={input[el.value]}
                    name={el.name}
                    id={el.id}
                    onChange={handleChange}
                    input={input}
                    setInput={setInput}
                  />
                ) : (
                  <textarea
                    className="textarea__DecisionCard"
                    placeholder={el.placeholder}
                    type={el.type}
                    value={input[el.value]}
                    name={el.name}
                    id={el.id}
                    onChange={handleChange}
                    input={input}
                    setInput={setInput}
                  />
                )}
              </form>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
DecisionCard.propTypes = {
  title1: PropTypes.string.isRequired,
  txt: PropTypes.string.isRequired,
  inputtext: PropTypes.string.isRequired,
  isActiveDecision: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
export default DecisionCard;
