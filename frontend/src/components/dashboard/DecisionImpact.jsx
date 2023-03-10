import { useState, useEffect, useContext } from "react";

import { Link } from "react-router-dom";
import CardsItem from "./CardsItem";
import api from "../../services/api";
import { authContext } from "../../hooks/authContext";

import "./Decisionimpact.css";

export default function Decisionimpact() {
  const { auth } = useContext(authContext);
  const [sixDecisions, setSixDecisions] = useState([]);
  const impacts = true;

  const getSixDecisions = () => {
    api
      .get(`decision/authorization/user/six/${auth.data.id}`, {
        withCredentials: true,
      })
      .then((response) => setSixDecisions(response.data))
      .catch((err) => err.response);
  };

  useEffect(() => {
    getSixDecisions();
  }, []);

  const cardMap = sixDecisions.map((cardItem) => (
    <CardsItem
      nbdec={cardItem.nbdec}
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
        <h1>Décisions impactées </h1>
        <div className="trait" />
      </div>
      <div className="carreau">
        <div className={sixDecisions.length > 3 ? "sixCards" : "threecards"}>
          {cardMap}
        </div>
      </div>
      <Link to="/decisiondash" state={{ impact: impacts }}>
        <div className="voirButton">
          {" "}
          <h3 style={{ color: "#346a82" }}>Voir Plus</h3>
        </div>
      </Link>
    </div>
  );
}
