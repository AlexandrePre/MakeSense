import PropTypes from "prop-types";
import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router";
import api from "../services/api";
import CardsItem from "../components/dashboard/CardsItem";
import dataDecisionType from "../tools/dataDecisionType";
import "./DecisionPage.css";
import NavBar from "../components/dashboard/NavBardash";
import NotificationContext from "../Contexts/NotificationContexts";
import { authContext } from "../hooks/authContext";
import Pagination from "../components/Pagination/Pagination";

function DecisionPage({ socket }) {
  const { notif } = useContext(NotificationContext);
  const { auth } = useContext(authContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(6);
  const [decisions, setDecisions] = useState([]);
  const [status, setStatus] = useState(0);
  const [userDecisions, setUserDecisions] = useState();
  const [impacted, setImpacted] = useState([]);
  const [numberClicked, setNumberClicked] = useState(1);
  const location = useLocation();

  const loadUserDecision = () => {
    api.get(`/user/decision/${auth.data.id}`).then((response) => {
      setUserDecisions(response.data);
    });
    if (location.state) {
      setStatus(2);
      setNumberClicked(3);
    }
  };
  const getInmpactedDecisions = () => {
    api
      .get(`decision/authorization/user/six/${auth.data.id}`, {
        withCredentials: true,
      })
      .then((response) => setImpacted(response.data))
      .catch((err) => err.response);
  };
  const handleClick = (e) => {
    switch (e.target.name) {
      case "Toutes":
        setStatus(0);
        setNumberClicked(1);
        break;
      case "Postés":
        setStatus(1);
        setNumberClicked(2);
        break;
      case "Décisions Impactées":
        setStatus(2);
        setNumberClicked(3);
        break;
      case "Mes Décisions":
        setStatus(10);
        setNumberClicked(4);
        break;
      case "1ère Décisions":
        setStatus(3);
        setNumberClicked(5);
        break;

      case "Conflits":
        setStatus(5);
        setNumberClicked(6);
        break;
      case "Décisions Finales":
        setStatus(4);
        setNumberClicked(7);
        break;

      default:
        setStatus(0);
        break;
    }
  };

  const getAllDecisions = () => {
    api
      .get("decision/", { withCredentials: true })
      .then((response) => setDecisions(response.data))
      .catch((err) => err.response);
  };
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = decisions.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(decisions.length / recordsPerPage);
  useEffect(() => {
    getAllDecisions();
    loadUserDecision();
    getInmpactedDecisions();
  }, []);

  const filterCards = () => {
    switch (status) {
      case 0:
        return currentRecords.map((final) => {
          return (
            <CardsItem
              nbdec={final.id}
              status={final.status}
              title={final.title}
              lastname={final.lastname}
              firstname={final.firstname}
              image={final.image}
              nbStatus={final.nbStatus}
            />
          );
        });

      case 1:
        return currentRecords
          .filter((cardItem) => cardItem.nbStatus === 1)
          .map((final) => {
            return (
              <CardsItem
                nbdec={final.id}
                status={final.status}
                title={final.title}
                lastname={final.lastname}
                firstname={final.firstname}
                image={final.image}
                nbStatus={final.nbStatus}
              />
            );
          });

      case 2:
        return impacted.map((final) => {
          return (
            <CardsItem
              id={final.id}
              nbdec={final.nbdec}
              status={final.status}
              title={final.title}
              lastname={final.lastname}
              firstname={final.firstname}
              image={final.image}
            />
          );
        });
      case 3:
        return currentRecords
          .filter((cardItem) => cardItem.nbStatus === 3)
          .map((final) => {
            return (
              <CardsItem
                nbdec={final.id}
                status={final.status}
                title={final.title}
                lastname={final.lastname}
                firstname={final.firstname}
                image={final.image}
                nbStatus={final.nbStatus}
              />
            );
          });
      case 4:
        return currentRecords
          .filter((cardItem) => cardItem.nbStatus === 4)
          .map((final) => {
            return (
              <CardsItem
                nbdec={final.id}
                status={final.status}
                title={final.title}
                lastname={final.lastname}
                firstname={final.firstname}
                image={final.image}
                nbStatus={final.nbStatus}
              />
            );
          });
      case 5:
        return currentRecords
          .filter((cardItem) => cardItem.nbStatus === 5)
          .map((final) => {
            return (
              <CardsItem
                nbdec={final.id}
                status={final.status}
                title={final.title}
                lastname={final.lastname}
                firstname={final.firstname}
                image={final.image}
                nbStatus={final.nbStatus}
              />
            );
          });
      case 10:
        return userDecisions.map((final) => {
          return (
            <CardsItem
              nbdec={final.id}
              status={final.status}
              title={final.title}
              lastname={final.lastname}
              firstname={final.firstname}
              image={final.image}
              nbStatus={final.nbStatus}
            />
          );
        });
      default:
        return null;
    }
  };
  const getAllbuttons = () => {
    return dataDecisionType.map((button) => (
      <button
        type="button"
        onClick={handleClick}
        className={button.id === numberClicked ? "decisionBtn2" : "decisionBtn"}
        id={button.id}
        name={button.name}
      >
        {button.name}
      </button>
    ));
  };
  useEffect(() => {
    getAllbuttons();
  }, []);
  return (
    <div className="AllDecision">
      {notif && <NavBar socket={socket} />}
      <h1 id="deciTitle">Décisions</h1>
      <div className="allButtons">{getAllbuttons()}</div>

      <div className="carreau">
        <div className={currentRecords.length > 3 ? "sixCards" : "threecards"}>
          {filterCards()}
        </div>
      </div>
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

DecisionPage.propTypes = {
  socket: PropTypes.func.isRequired,
};
export default DecisionPage;
