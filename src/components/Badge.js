import PropTypes from 'prop-types';

const Badge = (props) => {
  const { tech } = props;

  return (
    <li>{tech}</li>
  );
};

Badge.propTypes = {
  tech: PropTypes.string.isRequired,
};

export default Badge;
