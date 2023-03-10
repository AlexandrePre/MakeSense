import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import NavBar from "../dashboard/NavBardash";
import { authContext } from "../../hooks/authContext";
import "./ModifyProfil.css";

function ModifyProfil() {
  const { auth } = useContext(authContext);
  const [input, setInput] = useState({});

  const navigate = useNavigate();

  const putUserInfo = () => {
    api.get(`user/${auth.data.id}`).then((response) => {
      setInput(response.data);
    });
  };
  const handleChange = (e) => {
    if (input) {
      setInput({ ...input, [e.target.name]: e.target.value });
    }
  };

  const handleSubmission = (e) => {
    e.preventDefault();

    api
      .put(`/user/${auth.data.id}`, input)
      .then((res) => {
        if (res.status === 200) {
          navigate("/dashboard/profil");
        }
      })
      .catch((err) => err.response);
  };

  useEffect(() => {
    putUserInfo();
  }, [input.image]);

  return (
    <div>
      <NavBar profileImage={input.image} />
      {/* {profilImage && <NavBar profileImage={profilImage} />} */}

      <form
        action="/action_page.php"
        onSubmit={handleSubmission}
        id="modifyForm"
      >
        <div className="formContainer">
          {" "}
          <div className="firstNameMod">
            {" "}
            <h3 id="label">Prénom</h3>
            <input
              type="text"
              className="imputProfil"
              id="fname"
              name="firstname"
              placeholder="Votre prénom.."
              onChange={handleChange}
              defaultValue={input.firstname}
            />
          </div>
          <div className="lastNameMod">
            {" "}
            <h3 id="label">Nom</h3>
            <input
              type="text"
              className="imputProfil"
              id="lname"
              name="lastname"
              placeholder="Votre nom.."
              onChange={handleChange}
              defaultValue={input.lastname}
            />
          </div>
          <div className="emailMod">
            {" "}
            <h3 id="label">Email</h3>
            <input
              type="text"
              className="imputProfil"
              id="e-mail"
              name="email"
              placeholder="Votre email."
              onChange={handleChange}
              defaultValue={input.email}
            />
          </div>
          <div className="poste">
            {" "}
            <h3 id="label">Poste</h3>
            <input
              type="text"
              className="imputProfil"
              id="position"
              name="position"
              placeholder="Votre poste."
              onChange={handleChange}
              defaultValue={input.position}
            />
          </div>
          <div className="bioForm">
            {" "}
            <h3 id="label">Bio</h3>
            <textarea
              type="text"
              className="imputProfil"
              id="bio"
              name="bio"
              placeholder="Ecris ta bio.."
              onChange={handleChange}
              defaultValue={input.bio}
            />
          </div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default ModifyProfil;
