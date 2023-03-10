import PropTypes from "prop-types";
import { useState } from "react";
import dataMenu from "../../tools/dataMenu";
import "./NavBarDecision.css";

export default function BodyDecision({
  info,
  shown,
  notice,
  conflit,
  firstdecision,
  finalDecision,
}) {
  const infoContent = info[0].content;
  const infoContexte = info[0].contexte;
  const infoProfit = info[0].profit;
  const infoUsefullness = info[0].usefullness;
  const infoInconvenience = info[0].inconvenience;
  const [buttonName, setButtoName] = useState("DETAILS");
  const [infoText, setInfotext] = useState(infoContent);
  const [numberClicked, setNumberClicked] = useState(1);
  const getAllAvis = () => {
    return notice.map((avis) => (
      <div>
        <div className="textBody">
          <p> {avis.content}</p>
          <h4 id="comments">
            de {avis.firstname}
            {avis.lastname}
          </h4>
        </div>
      </div>
    ));
  };

  const getAllConflit = () => {
    return conflit.map((confli) => (
      <div>
        <div className="textBody">
          <p> {confli.content}</p>
          <h4 id="comments">
            de {confli.firstname}
            {confli.lastname}
          </h4>
        </div>
      </div>
    ));
  };

  const getFirstdecision = () => {
    return firstdecision.map((first) => (
      <div>
        <p> {first.content}</p>
      </div>
    ));
  };

  const getFinaldecision = () => {
    return finalDecision.map((final) => (
      <div>
        <p> {final.content}</p>
      </div>
    ));
  };

  const handleClick = (e) => {
    switch (e.target.id) {
      case "1":
        setInfotext(infoContent);
        setNumberClicked(1);
        setButtoName(e.target.name);
        break;
      case "2":
        setInfotext(infoContexte);
        setNumberClicked(2);
        setButtoName(e.target.name);
        break;
      case "3":
        setInfotext(infoProfit);
        setNumberClicked(3);
        setButtoName(e.target.name);
        break;
      case "4":
        setInfotext(infoUsefullness);
        setNumberClicked(4);
        setButtoName(e.target.name);
        break;

      case "5":
        setInfotext(infoInconvenience);
        setNumberClicked(5);
        setButtoName(e.target.name);

        break;

      case "6":
        setInfotext(getAllAvis);
        setNumberClicked(6);
        setButtoName(e.target.name);
        break;
      case "7":
        setInfotext(getFirstdecision);
        setNumberClicked(7);
        setButtoName(e.target.name);
        break;
      case "8":
        setInfotext(getAllConflit);
        setNumberClicked(8);
        setButtoName(e.target.name);
        break;
      case "9":
        setInfotext(getFinaldecision);
        setNumberClicked(9);
        setButtoName(e.target.name);
        break;
      default:
        setNumberClicked(0);
        setButtoName(e.target.name);
    }
  };
  const rendeResults = () => {
    if (numberClicked !== 6 && numberClicked !== 8) {
      return (
        <div className="textBody">
          <h1 style={{ fontSize: "2.3rem" }}>{buttonName}</h1>
          <p>{infoText}</p>
        </div>
      );
    }
    if (numberClicked === 6) {
      return getAllAvis();
    }
    if (numberClicked === 8) {
      return getAllConflit();
    }
    return (
      <div className="textBody">
        <h1 style={{ fontSize: "2.3rem" }}>{buttonName}</h1>
        <p>{infoText}</p>
      </div>
    );
  };
  const getAllbutton = () => {
    return dataMenu.map((button) => (
      <button
        type="button"
        name={button.title}
        id={button.id}
        onClick={handleClick}
        className={
          button.id === numberClicked ? "postDecisionBtn2" : "postDecisionBtn"
        }
      >
        {button.title}
      </button>
    ));
  };

  return (
    <div
      className="bodyDecision"
      style={{
        display: shown ? "flex" : "none",
      }}
    >
      <div className="menuBody">{getAllbutton()}</div>
      {rendeResults()}
    </div>
  );
}

BodyDecision.propTypes = {
  info: PropTypes.string.isRequired,
  shown: PropTypes.string.isRequired,
  notice: PropTypes.string.isRequired,
  conflit: PropTypes.string.isRequired,
  firstdecision: PropTypes.string.isRequired,
  finalDecision: PropTypes.string.isRequired,
};
