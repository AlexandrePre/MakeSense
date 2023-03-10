import PropTypes from "prop-types";
import { useEffect, useContext, useState } from "react";
import api from "../services/api";
import { authContext } from "../hooks/authContext";
import NotificationContext from "../Contexts/NotificationContexts";
import NavBardash from "../components/dashboard/NavBardash";
import ButtonCreateDecision from "../components/dashboard/ButtonCreateDecision";
import "./Dashboard.css";
import CardsAllDecision from "../components/dashboard/CardsAllDecision";
import Decisionimpact from "../components/dashboard/DecisionImpact";

export default function Dashboard({ socket }) {
  const { auth } = useContext(authContext);
  const { notif, setNotif } = useContext(NotificationContext);
  const [sixDecisions, setSixDecisions] = useState([]);
  const loadNotifcation = () => {
    api

      .get(`decision/authorization/user/notification/${auth.data.id}`)
      .then((res) => {
        setNotif(res.data);
      });
  };
  const getSixDecisions = () => {
    api
      .get(`decision/authorization/user/six/${auth.data.id}`, {
        withCredentials: true,
      })
      .then((response) => setSixDecisions(response.data))
      .catch((err) => err.response);
  };

  useEffect(() => {
    loadNotifcation();
  }, [notif]);

  const handleSubmission = () => {
    api.put(`/user/connect/${auth.data.id}`, true).catch((err) => err.response);
  };
  useEffect(() => {
    getSixDecisions();
    handleSubmission();
  }, []);

  return (
    <div>
      {notif && <NavBardash socket={socket} />}
      <div className="dashboard">
        <ButtonCreateDecision />
        {sixDecisions.length > 0 && <Decisionimpact />}
        <CardsAllDecision />
      </div>
    </div>
  );
}

Dashboard.propTypes = {
  socket: PropTypes.func.isRequired,
};
