import PropTypes from 'prop-types';

const Display = ({ result }) => (
  <div className="display" data-testid="display">
    {result}
  </div>
);

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
