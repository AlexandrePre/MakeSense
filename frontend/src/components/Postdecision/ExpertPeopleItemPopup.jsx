/* eslint-disable camelcase */
import PropTypes from "prop-types";

function ExpertPeolpeItemPopup({
  image,
  handleShowExpert,
  firstname,
  lastname,
}) {
  return (
    <div className="popupFlex">
      <div onClick={handleShowExpert} role="presentation">
        <img src={image} alt="toto" />
      </div>
      <div className="popupColumn">
        <div>{firstname}</div>
        <div>{lastname}</div>
      </div>
    </div>
  );
}

ExpertPeolpeItemPopup.propTypes = {
  image: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  handleShowExpert: PropTypes.func.isRequired,
};

export default ExpertPeolpeItemPopup;
