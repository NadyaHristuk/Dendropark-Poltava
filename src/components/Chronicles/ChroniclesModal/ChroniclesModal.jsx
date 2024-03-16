import { icons } from '../../../assets';
import css from './ChroniclesModal.module.scss';
import ComponentWithModal from '../../ModalWrapper/ModalWrapper';

const ChroniclesModal = ({ url, title, description, isOpen, isClose }) => {
	return (
		<ComponentWithModal isOpen={isOpen} isClose={isClose}>
			<div className={css.modal_wrapper}>
				<div className={css.container}>
					<div className={css.thumb}>
						<img className={css.photo} src={url} alt={title} loading="lazy" />
					</div>
					<div className={css.info}>
						<h4 className={css.title}>{title}</h4>
						<p className={css.description}>{description}</p>
					</div>
				</div>
				<button onClick={isClose}>
					<svg className={css.closeIcon}>
						<use href={`${icons}#icon-close`}></use>
					</svg>
				</button>
			</div>
		</ComponentWithModal>
	);
};

export default ChroniclesModal;
