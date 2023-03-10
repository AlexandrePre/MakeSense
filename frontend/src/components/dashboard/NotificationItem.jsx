/* eslint-disable camelcase */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import api from "../../services/api";
import profil from "../../assets/img/profil.png";

function NotificationItem({
  nbdec,
  title,
  lastname,
  firstname,
  image,
  nbauth,
}) {
  const updateNotif = () => {
    api
      .put(`authorization/notification/${nbauth}`)
      .then((response) => response.status === 200);
  };
  return (
    <Link className="linkNotif" to={`/dashboard/decision/${nbdec}`}>
      <div
        className="notifItem"
        style={{ textDecoration: "none" }}
        onClick={updateNotif}
        role="presentation"
      >
        <div className="notifuser">
          <img id="notifimage" src={image || profil} alt="imgprofile" />
          {lastname} {firstname} vous a notifié dans la décision : &nbsp;
        </div>
        <h2 className="notifTitle" style={{ textDecoration: "none" }}>
          {title}
        </h2>
      </div>
    </Link>
  );
}

NotificationItem.propTypes = {
  title: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  nbdec: PropTypes.number.isRequired,
  nbauth: PropTypes.number.isRequired,
};

export default NotificationItem;
