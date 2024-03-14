import Modal from 'react-modal';
import scss from './ModalWrapper.module.scss';
import './ModalWrapper.module.scss';

export const modalWrapper = (WrappedComponent) => {
	return function ModalWrapper(props) {
		Modal.setAppElement('#root');

		return (
			<div>
				<WrappedComponent />
				<Modal
					isOpen={props.isOpen}
					onRequestClose={props.isClose}
					contentLabel="Example Modal"
					className={scss.modal}
					overlayClassName={scss.overlay}
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
