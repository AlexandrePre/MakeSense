/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable camelcase */
import PropTypes from "prop-types";

function ImpactedPeolpeItem({ image, handleShow, firstname, lastname }) {
  const showTexte = () => {
    document.getElementById(
      "imageImpacted"
    ).innerHTML = `${firstname} ${lastname}`;
  };

  const hideTexte = () => {
    document.getElementById("imageImpacted").innerHTML = "";
  };

  return (
    <div>
      <img
        onMouseEnter={showTexte}
        onMouseLeave={hideTexte}
        onKeyDown=""
        src={image}
        alt={firstname}
        onClick={handleShow}
      />
    </div>
  );
}

ImpactedPeolpeItem.propTypes = {
  image: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  handleShow: PropTypes.func.isRequired,
};

export default ImpactedPeolpeItem;
