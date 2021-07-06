import PropTypes from 'prop-types';

const Button = ({ buttonName, handleClick }) => {
  // eslint-disable-next-line no-nested-ternary
  const buttonClass = buttonName === 'AC' ? 'hvr-ripple-out' : buttonName === '=' ? 'hvr-ripple-out equalButton' : 'hvr-fade';
  return (
    <button
      className={buttonClass}
      type="button"
      onClick={() => handleClick(buttonName)}
    >
      {buttonName}
    </button>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
