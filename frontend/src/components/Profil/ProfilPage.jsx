import "./ProfilePage.css";
import { useEffect, useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";

import api from "../../services/api";
import NavBar from "../dashboard/NavBardash";
import { authContext } from "../../hooks/authContext";
import CardsItem from "../dashboard/CardsItem";

function ProfilePage() {
  const [userInfo, setUserInfo] = useState({});
  const [profilImage, setProfilImage] = useState();
  const [file, setFile] = useState();
  const { auth } = useContext(authContext);
  const [userDecisions, setUserDecisions] = useState([]);
  const [modify, setModify] = useState(false);

  const [input, setInput] = useState({});

  const navigate = useNavigate();
  const loadUserInfo = () => {
    api.get(`user/${auth.data.id}`).then((response) => {
      setUserInfo(response.data);
    });
  };
  const handleChange = (e) => {
    if (input) {
      setInput({ ...input, [e.target.name]: e.target.value });
    }
  };
  const handleSubmission = (e) => {
    if (e.key === "Enter") {
      api
        .put(`/user/${auth.data.id}`, input)
        .then((res) => {
          if (res.status === 200) {
            navigate("/dashboard/profil");
          }
        })
        .catch((err) => err.response);

      setModify(false);
    }
  };

  const modifyOn = () => {
    setModify(!modify);
    loadUserInfo();
  };

  // eslint-disable-next-line consistent-return
  function modifyActivate(info) {
    switch (info) {
      case "position":
        if (!modify) {
          return (
            <h3 id={userInfo.position === "" ? "posPlaceholder" : "infoPos"}>
              {userInfo.position === ""
                ? "Quel est ton poste?"
                : userInfo.position}
            </h3>
          );
        }
        if (modify) {
          return (
            <input
              defaultValue={userInfo.position}
              name="position"
              type="text"
              id="inputPos"
              placeholder="Quel est ton poste?"
              onChange={handleChange}
              onKeyDown={handleSubmission}
            />
          );
        }
        break;
      case "firstname":
        if (!modify) {
          return <h3 id="infoFirst">{userInfo.firstname}</h3>;
        }
        if (modify) {
          return (
            <input
              defaultValue={userInfo.firstname}
              name="firstname"
              id="inputFirst"
              type="text"
              onChange={handleChange}
              onKeyDown={handleSubmission}
            />
          );
        }
        break;
      case "lastname":
        if (!modify) {
          return <h3 id="infoLast">{userInfo.lastname}</h3>;
        }
        if (modify) {
          return (
            <input
              defaultValue={userInfo.lastname}
              name="lastname"
              id="inputLast"
              type="text"
              onChange={handleChange}
              onKeyDown={handleSubmission}
            />
          );
        }
        break;
      case "email":
        if (!modify) {
          return <h3 id="infoMail">{userInfo.email}</h3>;
        }
        if (modify) {
          return (
            <input
              defaultValue={userInfo.email}
              name="email"
              id="inputMail"
              type="text"
              onChange={handleChange}
              onKeyDown={handleSubmission}
            />
          );
        }
        break;
      case "bio":
        if (!modify) {
          return (
            <p id={userInfo.bio === "" ? "bioPlaceholder" : "pText"}>
              {userInfo.bio === ""
                ? "Parle nous un peu de toi..."
                : userInfo.bio}
            </p>
          );
        }
        if (modify) {
          return (
            <input
              defaultValue={userInfo.bio}
              name="bio"
              type="text"
              id="inputBio"
              placeholder="Parle nous un peu de toi..."
              onChange={handleChange}
              onKeyDown={handleSubmission}
            />
          );
        }
        break;
      default:
        if (!modify) {
          return <h3 id="infoPos">{userInfo.firstname}</h3>;
        }
        if (modify) {
          return (
            <input
              defaultValue={userInfo.firstname}
              name="position"
              id="inputPos"
              onChange={handleChange}
              onKeyDown={handleSubmission}
            />
          );
        }
        break;
    }
  }
  const loadUserDecision = () => {
    api.get(`/user/decision/${auth.data.id}`).then((response) => {
      setUserDecisions(response.data);
    });
  };

  const handleFile = (e) => {
    // dans e.target.files je récupére un tableau avec un seul objet
    // je mets tout ça dans un state pour les récupérer plus tard
    setFile(e.target.files[0]);
  };
  const fetchImage = () => {
    // mon appel pour récupérer tous les users
    api.get(`user/${auth.data.id}`).then((res) => {
      setProfilImage(res.data.image);
    });
  };

  const uploadFile = () => {
    // je crée un form data pour mettre mes fichiers dedans
    const formData = new FormData();
    formData.append("upload", file);

    api
      .put(`/user/upload/${auth.data.id}`, formData, {
        // withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
          //! important pour lire les données des types de fichiers
        },
      })
      .then((res) => {
        if (res.status === 200) {
          // si mon upload s'est bien passé je refait un appel API des mes utilisateurs
          // du coup je vais récupérer la photo que je viens d'upload
          fetchImage();
        }
      });
  };
  const autoUpload = () => {
    if (file) {
      uploadFile();
    }
  };

  useEffect(() => {
    loadUserDecision();
  }, []);
  useEffect(() => {
    loadUserInfo();
  }, [userInfo]);

  useEffect(() => {
    autoUpload();
  }, [file]);

  return (
    <div>
      <NavBar profileImage={profilImage} />
      <div className="profilInfo">
        <div className="profilPic">
          <div className="picture">
            {userInfo.image && (
              <img src={userInfo.image} alt="" id="profileImage" />
            )}
          </div>
          <label htmlFor="image">
            <div className="buttonImage">
              <h4 id="importBtn">Importer une image</h4>
            </div>
          </label>{" "}
          <input
            type="file" // type file pour pouvoir uploader une image
            name="upload" // ce nom doit être identique à ce que je vais mettre dans multer
            id="image"
            accept="image/*"
            onChange={handleFile}
            style={{ display: "none" }}
            // optional mais permet de dire que je veux que des fichiers images
          />
        </div>
        <div className="profilText">
          {" "}
          <button
            id="buttonProfil"
            style={{ width: "20vmin" }}
            type="button"
            onClick={modifyOn}
          >
            Modifier mon profil
          </button>{" "}
          <div className="personalInfo">
            <div className={!modify ? "nameEmail" : "nameEmailMod"}>
              <div className="firstNameProfil">
                {" "}
                <h2>Prénom:</h2>
                {modifyActivate("firstname")}
              </div>
              <div className="lastNameProfil">
                <h2>Nom:</h2>
                {modifyActivate("lastname")}
              </div>
              <div className="emailProfil">
                {" "}
                <h2>Email:</h2>
                {modifyActivate("email")}
              </div>
            </div>
            <div className="position">
              <h2 id="positionTitle">Poste:</h2>
              <div className="modifyOption">{modifyActivate("position")}</div>
            </div>
            <div className={!modify ? "bio" : "bioMod"}>
              <h2>Bio:</h2>
              <div className="bioText"> {modifyActivate("bio")}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="decisionContainer">
        {" "}
        <div className="myDecisions">
          <h1 style={{ paddingLeft: "7vmin" }}>Mes décisions</h1>
          <img
            src="/src/assets/img/Line-4.png"
            alt=""
            style={{ width: "100vmin", height: "0.5vmin" }}
            id="line"
          />
        </div>
        <div className={userDecisions.length > 3 ? "sixCards" : "threecards"}>
          {" "}
          {userDecisions.map((decision) => (
            <CardsItem
              title={decision.title}
              lastname={decision.lastname}
              firstname={decision.firstname}
              status={decision.status}
              id_status={decision.id_status}
              image={decision.image}
              nbdec={decision.id}
            />
          ))}
        </div>
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
export default ProfilePage;
