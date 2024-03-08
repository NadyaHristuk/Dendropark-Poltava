import Modal from 'react-modal';
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
        <img className={css.photo} src={url} alt={title} loading="lazy" />
        <div className={css.info}>
          <h4 className={css.title}>{title}</h4>
          <p className={css.description}>{description}</p>
        </div>
      </div>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default ChroniclesModal;
