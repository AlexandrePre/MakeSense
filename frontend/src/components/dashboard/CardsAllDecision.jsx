/* eslint-disable camelcase */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import CardsItem from "./CardsItem";
import "./Cards.css";

function CardsAllDecision() {
  const [sixDecisions, setSixDecisions] = useState([]);

  const getSixDecisions = () => {
    api
      .get("decision/six", { withCredentials: true })
      .then((response) => setSixDecisions(response.data))
      .catch((err) => err.response);
  };

  useEffect(() => {
    getSixDecisions();
  }, []);

  const cardMap = sixDecisions.map((cardItem) => (
    <CardsItem
      nbdec={cardItem.id}
      status={cardItem.status}
      title={cardItem.title}
      lastname={cardItem.lastname}
      firstname={cardItem.firstname}
      id_status={cardItem.id_status}
      image={cardItem.image}
      nbStatus={cardItem.nbStatus}
    />
  ));

  return (
    <div className="AllDecision">
      <div className="title">
        <h1>Toutes les décisions </h1>
        <div className="trait" />
      </div>
      <div className="carreau">
        <div className={sixDecisions.length > 3 ? "sixCards" : "threecards"}>
          {cardMap}{" "}
        </div>{" "}
        <Link to="/decisiondash">
          <div className="voirButton">
            {" "}
            <h3 style={{ color: "#346a82" }}>Voir Plus</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CardsAllDecision;
