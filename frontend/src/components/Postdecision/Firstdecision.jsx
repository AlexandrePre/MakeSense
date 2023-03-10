/* eslint-disable camelcase */
import PropTypes from "prop-types";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../hooks/authContext";
import api from "../../services/api";
import "./TextEditor.css";

function Firstdecision({ hideFirst, nbdec }) {
  const [firstdecision, setFirstdecision] = useState({});
  const [content, setContent] = useState();
  const id_status = 2;

  const navigate = useNavigate();
  const { auth } = useContext(authContext);
  const handleChange = (e) => {
    setContent({
      ...content,
      content: e.target.value,
    });

    setFirstdecision({
      id_decision: nbdec,
      id_user: auth.data.id,
      content: content.content,
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
    if (firstdecision) {
      api
        .post("firstdecsion", firstdecision)
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
    <div style={{ display: hideFirst ? "none" : "block" }} className="postAvis">
      <h1 className="avis">1ère decision : Make Sense </h1>

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

export default Firstdecision;

Firstdecision.propTypes = {
  hideFirst: PropTypes.string.isRequired,
  nbdec: PropTypes.string.isRequired,
};
