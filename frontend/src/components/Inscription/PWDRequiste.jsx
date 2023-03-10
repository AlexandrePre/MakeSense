import PropTypes from "prop-types";
import "./PWDRequiste.css";

function PWDRequisite({
  capsLetterFlag,
  numberFlag,
  pwdLengthFlag,
  specialCharFlag,
  text,
  imageInvalide,
  imageValide,
  className,
}) {
  return (
    <div id="message">
      <div className={className}>
        <p> {text}</p>
        <img
          src={
            // eslint-disable-next-line no-bitwise
            pwdLengthFlag & capsLetterFlag & numberFlag & specialCharFlag
              ? imageValide
              : imageInvalide
          }
          alt="logo"
        />
      </div>
    </div>
  );
}

PWDRequisite.propTypes = {
  capsLetterFlag: PropTypes.string.isRequired,
  numberFlag: PropTypes.string.isRequired,
  pwdLengthFlag: PropTypes.string.isRequired,
  specialCharFlag: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imageInvalide: PropTypes.bool.isRequired,
  imageValide: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
};

export default PWDRequisite;
