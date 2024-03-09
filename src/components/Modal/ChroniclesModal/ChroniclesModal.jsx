import Modal from 'react-modal';
import { icons } from '../../../assets';
// import closeIcon from "../../../assets/icons/mi_close.svg";
import css from './ChroniclesModal.module.scss';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#EDFAF6',
    border: '1px solid e1f4ee',
    borderRadius: '20px',
  },
};

const ChroniclesModal = ({ url, title, description, onRequestClose }) => {
  return (
    <Modal
      isOpen={true}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      style={customStyles}
    >
      <div className={css.container}>
        <div className={css.thumb}>
          <img className={css.photo} src={url} alt={title} loading="lazy" />
        </div>
        <div className={css.info}>
          <h4 className={css.title}>{title}</h4>
          <p className={css.description}>{description}</p>
        </div>
      </div>
      <button onClick={onRequestClose}>
        <svg className={css.closeIcon}>
          <use href={`${icons}#icon-close`}></use>
        </svg>
        {/* <img className={css.closeIcon} src={closeIcon} alt="Close Icon" /> */}
      </button>
    </Modal>
  );
};

export default ChroniclesModal;
