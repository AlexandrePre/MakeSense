/* eslint-disable camelcase */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import dataDecision from "../tools/dataDecision";
import { authContext } from "../hooks/authContext";

const CurrentDecisionContext = createContext();

export default CurrentDecisionContext;

export function CurrentDecisionContextProvider({ children }) {
  const { auth } = useContext(authContext);
  const [apidecision, setApiDecision] = useState(dataDecision);
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
  };
  return (
    <CurrentDecisionContext.Provider value={value}>
      {children}
    </CurrentDecisionContext.Provider>
  );
}
CurrentDecisionContextProvider.propTypes = {
  children: PropTypes.string.isRequired,
};
