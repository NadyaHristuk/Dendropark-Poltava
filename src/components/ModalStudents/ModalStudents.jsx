import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import scss from './ModalStudents.module.scss';
import ComponentWithModal from '../ModalWrapper/ModalWrapper';
import StudentsItems from './StudentsItems/StudentsItems';
import { icons } from '../../assets';
import { useEffect } from 'react';
import data from './data';

const ModalStudents = ({ isOpen, isClose }) => {
	const { t } = useTranslation();
	const [shuffledData, setShuffledData] = useState([]);

	useEffect(() => {
		const shuffledArray = [...data].sort(() => Math.random() - 0.5);
		setShuffledData(shuffledArray);
	}, [isOpen]);

	return (
		<ComponentWithModal isOpen={isOpen} isClose={isClose}>
			<div className={scss.modal_wrapper}>
				<button className={scss.btn_close} type="button" onClick={isClose}>
					<svg>
						<use href={`${icons}#icon-close`}></use>
					</svg>
				</button>
				<div className={scss.tablet_wrapper}>
					<h2 className={scss.title}>{t('studentModals.title')}</h2>
					<p className={scss.subtitle}>{t('studentModals.subTitle')}</p>
					<ul className={scss.list_wrapper}>
						{shuffledData.map(({ name, role, linkedin, src }) => (
							<StudentsItems
								key={name}
								name={name}
								role={role}
								linkedin={linkedin}
								src={src}
							/>
						))}
					</ul>
				</div>
			</div>
		</ComponentWithModal>
	);
};

export default ModalStudents;
