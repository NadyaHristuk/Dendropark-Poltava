import Modal from 'react-modal';
import customStyles from './stylesModal';

export const modalWrapper = (WrappedComponent) => {
  return function ModalWrapper(props) {
    Modal.setAppElement('#root');

    return (
      <div>
        <WrappedComponent />
        <Modal
          isOpen={props.isOpen}
          onRequestClose={props.isClose}
          style={customStyles}
          contentLabel="Example Modal"
        >
          {props.children}
        </Modal>
      </div>
    );
  };
};

const WrappedComponent = ({ children }) => {
  return <>{children}</>;
};

const ComponentWithModal = modalWrapper(WrappedComponent);

export default ComponentWithModal;
