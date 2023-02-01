import propTypes from 'prop-types';
import { IoCloseSharp } from 'react-icons/io5';
import ModalTechList from './ModalTechList';
import ModalButtons from './ModalButtons';

const Modal = (props) => {
  const {
    project: {
      title,
      description,
      images,
      technologies,
      links,
    },
    curtainVisibility,
    modalVisibility,
    handleClose,
  } = props;

  return (
    <div className={`modal-curtain ${curtainVisibility}`}>
      <article className={`modal ${modalVisibility}`}>
        <IoCloseSharp onClick={handleClose} className="modal-cross" />
        <h2 className="modal-title">{title}</h2>
        <ModalTechList technologies={technologies} />
        <img src={images[1]} alt="Project screenshot" className="modal-img" />
        <p className="modal-txt">{description}</p>
        <ModalButtons links={links} />
      </article>
    </div>
  );
};

Modal.propTypes = {
  project: propTypes.instanceOf(Object).isRequired,
  curtainVisibility: propTypes.string.isRequired,
  modalVisibility: propTypes.string.isRequired,
  handleClose: propTypes.func.isRequired,
};

export default Modal;
