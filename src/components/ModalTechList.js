import propTypes from 'prop-types';

const ModalTechList = (props) => {
  const { technologies } = props;

  return (
    <ul className="modal-tech-list">
      {technologies.map((technology) => (
        <li key={technology.id}>
          {technology.tech}
        </li>
      ))}
    </ul>
  );
};

ModalTechList.propTypes = {
  technologies: propTypes.instanceOf(Array).isRequired,
};

export default ModalTechList;
