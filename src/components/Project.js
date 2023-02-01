import { useState } from 'react';
import PropTypes from 'prop-types';
import { IoArrowForwardSharp } from 'react-icons/io5';
import Badge from './Badge';
import Modal from './Modal';

const Project = (props) => {
  const { project } = props;

  const [modalVisibility, setModalVisibility] = useState('invisible');
  const [curtainVisibility, setCurtainVisibility] = useState('invisible');

  const openModal = () => {
    setCurtainVisibility('curtain-transition');
    setModalVisibility('modal-transition');

    setTimeout(() => {
      setCurtainVisibility('');
      setModalVisibility('');
    }, 0);
  };

  const closeModal = () => {
    setModalVisibility('modal-transition');
    setCurtainVisibility('curtain-transition');

    setTimeout(() => {
      setModalVisibility('invisible');
      setCurtainVisibility('invisible');
    }, 500);
  };

  return (
    <article className="project-card">
      <img
        src={project.images[0]}
        alt="project_image"
        className="project-img"
      />
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <ul className="tech-list">
          {project.technologies.map((technology) => (
            <Badge key={technology.id} tech={technology.tech} />
          ))}
        </ul>
        <button
          type="button"
          className="project-btn"
          onClick={openModal}
        >
          See this project
          <IoArrowForwardSharp className="arrow-right" />
        </button>
      </div>
      <Modal
        project={project}
        curtainVisibility={curtainVisibility}
        modalVisibility={modalVisibility}
        handleClose={closeModal}
      />
    </article>
  );
};

Project.propTypes = {
  project: PropTypes.instanceOf(Object).isRequired,
};

export default Project;
