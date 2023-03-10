import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../hooks/authContext";
import api from "../services/api";
import ProgressBar from "../components/Postdecision/ProgressBar";
import "./Conflict.css";

function Conflict() {
  const [conflict, setConflict] = useState({});
  const [content, setContent] = useState();
  const navigate = useNavigate();
  const { auth } = useContext(authContext);

  const handleChange = (e) => {
    setContent({
      ...content,
      content: e.target.value,
    });
    setConflict({
      id_decision: 1,
      id_user: auth.data.id,
      content: content.content,
      date: "2022-01-01",
    });
  };

  const handleSubmitConnexion = (e) => {
    e.preventDefault();
    if (conflict) {
      api
        .post("conflict/", conflict)
        .then((res) => {
          if (res.status === 200) {
            navigate("/decision");
          }
        })
        .catch((err) => err.response);
    }
  };

  return (
    <div>
      <ProgressBar />
      <h1 className="conflict">Poste ton conflit : Make Sense France </h1>
      <div>
        <textarea
          className="edit"
          contentEditable="true"
          suppressContentEditableWarning="true"
          onChange={handleChange}
          type="input"
          id="text-editor"
        />
        <button
          className="btn-publishh"
          type="button"
          id="btn-publishh"
          value="Creation"
          onClick={handleSubmitConnexion}
        >
          Publier
        </button>
      </div>
    </div>
  );
}

export default Conflict;
