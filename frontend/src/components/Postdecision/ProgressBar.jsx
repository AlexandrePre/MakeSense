/* eslint-disable camelcase */
import React from "react";
import "./ProgressBar.css";
import PropTypes from "prop-types";
import Dates from "./Dates";
import WordTop from "./WordTop";

function ProgressBar({ statut, postedDate, deadline }) {
  const dateArray = [];
  const statutArrayTop = [
    "Début de décision",
    "Fin des avis",
    "1ère décision prise",
    "Fin des conflits",
    "Décision définitive",
  ];

  const statutCount = statut;
  let statutBar = "one";
  switch (true) {
    case statutCount === 0:
      statutBar = "0%";
      break;
    case statutCount === 1:
      statutBar = "12%";
      break;
    case statutCount === 2:
      statutBar = "50%";
      break;
    case statutCount === 3:
      statutBar = "60%";
      break;
    case statutCount === 4:
      statutBar = "100%";
      break;
    default:
  }
  const a = new Date(deadline);
  const b = new Date(postedDate);
  const time_diff = a.getTime() - b.getTime();
  const days_Diff = time_diff / (1000 * 3600 * 24);
  const four = days_Diff / 4;

  const formatednewdateone = b.toLocaleDateString("fr");
  dateArray.push(formatednewdateone);

  function addDaysToDate(date, days) {
    const res = new Date(date);
    res.setDate(res.getDate() + days);
    return res;
  }

  const newdate = addDaysToDate(b, four);
  const formatednewdatetwo = newdate.toLocaleDateString("fr");
  dateArray.push(formatednewdatetwo);

  const height = four * 2;
  const newdatethree = addDaysToDate(b, height);
  const formatednewdatethree = newdatethree.toLocaleDateString("fr");
  dateArray.push(formatednewdatethree);

  const ten = four * 3;
  const newdatefour = addDaysToDate(b, ten);
  const formatednewdatefour = newdatefour.toLocaleDateString("fr");
  dateArray.push(formatednewdatefour);

  const formatednewdatefive = a.toLocaleDateString("fr");
  dateArray.push(formatednewdatefive);

  const dateArrayMap = dateArray.map((date) => <Dates date={date} />);
  const statutArrayTopMap = statutArrayTop.map((word) => (
    <WordTop word={word} />
  ));

  return (
    <div className="progressBar">
      <div className="NavList">
        <div className="one">{dateArrayMap}</div>
        <div className="barProgress">
          <div className="color" style={{ width: statutBar }} />
        </div>
        <div className="three">{statutArrayTopMap}</div>
      </div>
    </div>
  );
}

ProgressBar.propTypes = {
  statut: PropTypes.number.isRequired,
  postedDate: PropTypes.string.isRequired,
  deadline: PropTypes.string.isRequired,
};

export default ProgressBar;
