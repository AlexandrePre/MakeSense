/* eslint-disable camelcase */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import profil from "../../assets/img/profil.png";

import "./Cards.css";

function CardsItem({
  nbdec,
  title,
  lastname,
  firstname,
  status,
  image,
  nbStatus,
}) {
  return (
    <Link to={`/dashboard/decision/${nbdec}`}>
      <div className="CardItem" style={{ textDecoration: "none" }}>
        <div
          style={{
            backgroundColor:
              nbStatus === 4
                ? " rgba(224, 177, 177, 0.28)"
                : "rgba(178, 224, 177, 0.28)",
            border: nbStatus === 4 ? " 1px solid #ff0000" : "1px solid #3c9625",
            color: nbStatus === 4 ? "#ff0000" : "#3c9625",
            textDecoration: "none",
          }}
          className="status"
        >
          {status}
        </div>
        <h2 className="black" style={{ textDecoration: "none" }}>
          {" "}
          {title}
        </h2>
        <div className="user">
          <img id="imgprofile" src={image || profil} alt="imgprofile" />
          <h4>
            par {lastname} {firstname}
          </h4>
        </div>
      </div>
    </Link>
  );
}

CardsItem.propTypes = {
  status: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  nbStatus: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  nbdec: PropTypes.number.isRequired,
};

export default CardsItem;
