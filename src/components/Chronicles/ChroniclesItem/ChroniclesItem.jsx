import { useState } from 'react';
import { icons } from '../../../assets';
import ChroniclesModal from '../../Modal/ChroniclesModal/ChroniclesModal';
import { useMedia } from '../../../hooks/useMedia';
import css from './ChroniclesItem.module.scss';

const ChroniclesItem = ({ url, title, description }) => {
	const [modalIsOpen, setIsOpen] = useState(false);

	const { isMobile } = useMedia();

	const shortDescription = description.slice(0, isMobile ? 80 : 300) + '...';

	const openModal = () => {
		setIsOpen(true);
		document.body.style.overflow = 'hidden';
	};

	const closeModal = () => {
		setIsOpen(false);
		document.body.style.overflow = '';
	};

	return (
		<>
			<div className={css.thumb}>
				<img className={css.photo} src={url} alt={title} loading="lazy" />
			</div>
			<div className={css.info}>
				<h4 className={css.title}>{title}</h4>
				<p className={css.description}>{shortDescription}</p>
				<button className={css.button} onClick={openModal}>
					Читати далі{' '}
					<svg className={css.arrowUpIcon}>
						<use href={`${icons}#icon-arrow-up`}></use>
					</svg>
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
