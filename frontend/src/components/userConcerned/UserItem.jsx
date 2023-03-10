/* eslint-disable camelcase */
import PropTypes from "prop-types";
import "./ProfilAllUser.css";
import profil from "../../assets/img/profil.png";
import star from "../../assets/img/star.png";
import star_click from "../../assets/img/star_click.png";

function UserItem({
  lastname,
  firstname,
  id,
  onclick,
  expert,
  clicked,
  isExpert,
  image,
}) {
  return (
    <div className="userContainer">
      <div className={clicked ? "UserItemOn" : "UserItemOff"}>
        <div
          className="div1"
          onClick={onclick}
          key={id}
          onKeyDown={onclick}
          role="presentation"
        >
          <img src={image || profil} alt="insta" />
        </div>
        <div
          className="div2"
          onClick={onclick}
          key={id}
          onKeyDown={onclick}
          role="presentation"
        >
          {firstname} {lastname}
        </div>
        <div className="div3">
          <img
            onClick={expert}
            src={isExpert ? star_click : star}
            alt="logo"
            key={id}
            onKeyDown={onclick}
            role="presentation"
          />
        </div>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  lastname: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onclick: PropTypes.string.isRequired,
  expert: PropTypes.string.isRequired,
  clicked: PropTypes.bool.isRequired,
  isExpert: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired,
};

export default UserItem;
