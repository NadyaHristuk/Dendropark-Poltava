import { useState } from 'react';
// import scss from './ModalStudents.module.scss';
import ComponentWithModal from '../ModalWrapper/ModalWrapper';

const ModalStudents = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <>
      <button type="button" onClick={openModal}>
        OPEN
      </button>
      <ComponentWithModal isOpen={modalIsOpen} isClose={closeModal}>
        {/* {({ closeModal }) => ( */}
        <>
          <p>Hello</p>
          <h2>crrcrec</h2>
          <button type="button" onClick={closeModal}>
            close Modal
          </button>
        </>
        // )}
      </ComponentWithModal>
    </>
  );
};

export default ModalStudents;
