/* eslint-disable camelcase */
import PropTypes from "prop-types";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../hooks/authContext";
import api from "../../services/api";
import "./TextEditor.css";

function Finaldecision({ hideFinal, nbdec }) {
  const [finaldecision, setfinaldecision] = useState({});

  const id_status = 4;

  const navigate = useNavigate();
  const { auth } = useContext(authContext);
  const handleChange = (e) => {
    setfinaldecision({
      id_decision: nbdec,
      id_user: auth.data.id,
      content: e.target.value,
      date: "2022-01-01",
    });
  };

  const handleChangeStatus = () => {
    api
      .put(`decision/${nbdec}`, { id_status })
      .then((res) => {
        if (res.status === 200) {
          navigate("/dashboard");
        }
      })
      .catch((err) => err.response);
  };

  const handleSubmitConnexion = (e) => {
    e.preventDefault();
    if (finaldecision) {
      api
        .post("finalDecision", finaldecision)
        .then((res) => {
          if (res.status === 201) {
            navigate("/dashboard");
          }
        })
        .catch((err) => err.response);
    }

    handleChangeStatus();
  };
  return (
    <div style={{ display: hideFinal ? "none" : "block" }} className="postAvis">
      <h1 className="avis"> Decision Finale : Make Sense </h1>

      <textarea
        className="editorr"
        contentEditable="true"
        suppressContentEditableWarning="true"
        onChange={handleChange}
        type="input"
        id="text-editor"
      />
      <button
        className="btn-publis"
        type="button"
        id="btn-publis"
        value="Creation"
        onClick={handleSubmitConnexion}
      >
        Publier
      </button>
    </div>
  );
}

export default Finaldecision;

Finaldecision.propTypes = {
  hideFinal: PropTypes.string.isRequired,
  nbdec: PropTypes.string.isRequired,
};
