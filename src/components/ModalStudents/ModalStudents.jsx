import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import scss from './ModalStudents.module.scss';
import ComponentWithModal from '../ModalWrapper/ModalWrapper';
import data from './modalStudents.json';
import StudentsItems from './StudentsItems/StudentsItems';
import { icons } from '../../assets';
import { useEffect } from 'react';

const ModalStudents = () => {
	const { t } = useTranslation();
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [shuffledData, setShuffledData] = useState([]);

	useEffect(() => {
		const shuffledArray = [...data].sort(() => Math.random() - 0.5);
		setShuffledData(shuffledArray);
	}, [modalIsOpen]);

	const openModal = () => {
		setModalIsOpen(true);
	};
	const closeModal = () => {
		setModalIsOpen(false);
	};
	return (
		<>
			<button type="button" onClick={openModal}>
				GOIT STUDENTS
			</button>
			<ComponentWithModal isOpen={modalIsOpen} isClose={closeModal}>
				<div className={scss.modal_wrapper}>
					<button className={scss.btn_close} type="button" onClick={closeModal}>
						<svg width={14} height={14}>
							<use href={`${icons}#icon-close`}></use>
						</svg>
					</button>
					<h2 className={scss.title}>{t('studentModals.title')}</h2>
					<p className={scss.subtitle}>{t('studentModals.subTitle')}</p>
					<ul className={scss.list_wrapper}>
						{shuffledData.map(({ name, role, linkedin }) => (
							<StudentsItems
								key={name}
								name={name}
								role={role}
								linkedin={linkedin}
							/>
						))}
					</ul>
				</div>
			</ComponentWithModal>
		</>
	);
};

export default ModalStudents;
