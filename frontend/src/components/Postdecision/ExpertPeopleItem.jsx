/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable camelcase */
import PropTypes from "prop-types";

function ExpertPeolpeItem({ image, handleShowExpert, firstname, lastname }) {
  const showTexte = () => {
    document.getElementById(
      "imageImpactedExpert"
    ).innerHTML = `${firstname} ${lastname}`;
  };

  const hideTexte = () => {
    document.getElementById("imageImpactedExpert").innerHTML = "";
  };

  return (
    <div>
      <img
        onMouseEnter={showTexte}
        onMouseLeave={hideTexte}
        onKeyDown=""
        src={image}
        alt={firstname}
        onClick={handleShowExpert}
      />
    </div>
  );
}

ExpertPeolpeItem.propTypes = {
  image: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  handleShowExpert: PropTypes.func.isRequired,
};

export default ExpertPeolpeItem;
