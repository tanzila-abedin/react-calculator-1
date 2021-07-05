import PropTypes from 'prop-types';

const Button = ({ buttonName, handleClick }) => (
  <button
    type="button"
    onClick={() => handleClick(buttonName)}
  >
    {buttonName}
  </button>
);

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
