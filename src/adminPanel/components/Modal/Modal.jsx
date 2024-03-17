import Modal from 'react-modal';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		maxHeight: '92vh',
		overflowY: 'auto',
	},
	overlay: {
		backgroundColor: 'rgba(0, 0, 0, 0.7)',
	},
};

Modal.setAppElement('#modal-root');

const ModalForm = ({ closeModal, modalIsOpen, children }) => {
	return (
		<Modal
			isOpen={modalIsOpen}
			onRequestClose={closeModal}
			style={customStyles}
			contentLabel="Example Modal"
		>
			{children}
		</Modal>
	);
};

export default ModalForm;
