import propTypes from 'prop-types';
import { BsGithub, BsFillArrowRightCircleFill } from 'react-icons/bs';

const ModalButtons = (props) => {
  const { links } = props;

  return (
    <div className="modal-btn-container">
      <a
        href={links[0]}
        rel="noopener noreferrer"
        target="_blank"
        className="modal-btn"
      >
        <span>See Live</span>
        <BsFillArrowRightCircleFill className="modal-icon" />
      </a>
      <a
        href={links[1]}
        rel="noopener noreferrer"
        target="_blank"
        className="modal-btn"
      >
        <span>See Code</span>
        <BsGithub className="modal-icon" />
      </a>
    </div>
  );
};

ModalButtons.propTypes = {
  links: propTypes.instanceOf(Array).isRequired,
};

export default ModalButtons;
