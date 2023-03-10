import { useParams } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import NavBarDecision from "../components/Postdecision/NavBarDecision";
import NavBar from "../components/dashboard/NavBardash";
import api from "../services/api";
import "./PostDecision.css";
import MenuBar from "../components/Postdecision/MenuBar";
import BodyDecision from "../components/Postdecision/BodyDecision";
import TextEditor from "../components/Postdecision/TextEditor";
import ConflitEditor from "../components/Postdecision/ConflitEditor";
import Firstdecision from "../components/Postdecision/Firstdecision";
import { authContext } from "../hooks/authContext";
import Finaldecision from "../components/Postdecision/FinalDecision";

export default function PostDecision() {
  const { auth } = useContext(authContext);
  const [info, setInfo] = useState();
  const [notice, setNotice] = useState([]);
  const [conflit, setConflit] = useState([]);
  const [firstdecision, setFirstDecision] = useState([]);
  const [finalDecision, setFinalDecision] = useState([]);
  const [shown, setShown] = useState(true);
  const [hide, setHide] = useState(true);
  const [hideFirst, setHideFirst] = useState(true);
  const [hideFinal, setHideFinal] = useState(true);
  const [authDecision, setAuthDecision] = useState();
  const [shownAvis, setShownAvis] = useState(true);
  const { nbdec } = useParams();

  const getDecision = async () => {
    await api
      .get(`decision/user/${nbdec}`)
      .then((response) => setInfo(response.data))
      .catch((err) => err.response);
  };

  const getAuthDecision = async () => {
    await api
      .get(`/decision/authorization/user/single/${nbdec}/${auth.data.id}`, {
        withCredentials: true,
      })
      .then((response) => setAuthDecision(response.data))
      .catch((err) => err.response);
  };
  const getAvis = async () => {
    await api
      .get(`notice/${nbdec}`)
      .then((res) => setNotice(res.data))
      .catch((err) => err.response);
  };

  const getConflit = async () => {
    await api
      .get(`conflict/${nbdec}`)
      .then((res) => setConflit(res.data))
      .catch((err) => err.response);
  };

  const getFirstdecision = async () => {
    await api
      .get(`firstdecsion/${nbdec}`)
      .then((res) => setFirstDecision(res.data))
      .catch((err) => err.response);
  };

  const getFinaldecision = async () => {
    await api
      .get(`finalDecision/${nbdec}`)
      .then((res) => setFinalDecision(res.data))
      .catch((err) => err.response);
  };

  useEffect(() => {
    getDecision();
    getConflit();
    getAvis();
    getAuthDecision();
    getFirstdecision();
    getFinaldecision();
  }, [nbdec]);

  const handleClick = () => {
    setShown(!shown);
  };

  const handleConflit = () => {
    setHide(!hide);
  };

  const handleFisrt = () => {
    setHideFirst(!hideFirst);
  };

  const handleFinal = () => {
    setHideFinal(!hideFinal);
  };

  const handleAvis = () => {
    setShownAvis(!shownAvis);
  };

  return (
    <div>
      <NavBar />

      <div className="containerDecision">
        {info && <NavBarDecision info={info} />}
        <div className="centerContainer">
          {" "}
          {info && (
            <BodyDecision
              info={info}
              shown={shown}
              notice={notice}
              conflit={conflit}
              firstdecision={firstdecision}
              finalDecision={finalDecision}
              nbdec={nbdec}
            />
          )}{" "}
          <TextEditor shownAvis={shownAvis} nbdec={nbdec} />
          <ConflitEditor hide={hide} nbdec={nbdec} />
          <Firstdecision hideFirst={hideFirst} nbdec={nbdec} />
          <Finaldecision hideFinal={hideFinal} nbdec={nbdec} />
          {
            (info,
            authDecision && (
              <MenuBar
                id={nbdec}
                handleClick={handleClick}
                handleConflit={handleConflit}
                handleAvis={handleAvis}
                handleFisrt={handleFisrt}
                handleFinal={handleFinal}
                authDecision={authDecision}
                nbdec={nbdec}
                info={info}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}
