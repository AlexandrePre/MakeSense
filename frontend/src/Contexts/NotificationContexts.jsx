/* eslint-disable camelcase */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";
import dataDecision from "../tools/dataDecision";
import { authContext } from "../hooks/authContext";

const NotificationContext = createContext();

export default NotificationContext;

export function NotificationContextProvider({ children }) {
  const { auth } = useContext(authContext);
  const [apidecision, setApiDecision] = useState(dataDecision);
  const [notif, setNotif] = useState();
  const date_posted = new Date().toLocaleDateString("sv-SE", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const [input, setInput] = useState({
    title: "",
    content: "",
    deadline: "",
    contexte: "",
    profit: "",
    usefullness: "",
    inconvenience: "",
    id_user: auth.data.id,
    date_posted,
    id_status: 1,
  });
  const value = {
    input,
    setInput,
    apidecision,
    setApiDecision,
    notif,
    setNotif,
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
}
NotificationContextProvider.propTypes = {
  children: PropTypes.string.isRequired,
};
