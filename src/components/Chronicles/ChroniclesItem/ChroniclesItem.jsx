import { useState } from 'react';
import ChroniclesModal from '../../Modal/ChroniclesModal/ChroniclesModal';
import css from './ChroniclesItem.module.scss';

const ChroniclesItem = ({ url, title, description }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    console.log('modalIsOpen');
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <img className={css.photo} src={url} alt={title} loading="lazy" />
      <div className={css.info}>
        <h4 className={css.title}>{title}</h4>
        <p className={css.description}>{description}</p>
        <button className={css.button} onClick={openModal}>
          Читати далі
        </button>
      </div>
      {modalIsOpen && (
        <ChroniclesModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          url={url}
          title={title}
          description={description}
        />
      )}
    </>
  );
};

export default ChroniclesItem;
