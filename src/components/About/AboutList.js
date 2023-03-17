import propTypes from 'prop-types';

const AboutList = (props) => {
  const {
    experience: {
      name,
      items,
    },
  } = props;

  return (
    <ul className={name.toLowerCase()}>
      <h3>{name}</h3>
      {items.map((item) => (
        <li key={item.id}>{item.skill}</li>
      ))}
    </ul>
  );
};

AboutList.propTypes = {
  experience: propTypes.instanceOf(Object).isRequired,
};

export default AboutList;
