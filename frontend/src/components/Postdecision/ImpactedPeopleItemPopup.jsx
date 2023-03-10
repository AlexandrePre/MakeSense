/* eslint-disable camelcase */
import PropTypes from "prop-types";

function ExpertPeolpeItem({ image, handleShow, firstname, lastname }) {
  return (
    <div className="popupFlex">
      <div onClick={handleShow} role="presentation">
        <img src={image} alt="toto" />
      </div>
      <div className="popupColumn">
        <div>{firstname}</div>
        <div>{lastname}</div>
      </div>
    </div>
  );
}

ExpertPeolpeItem.propTypes = {
  image: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  handleShow: PropTypes.func.isRequired,
};

export default ExpertPeolpeItem;
