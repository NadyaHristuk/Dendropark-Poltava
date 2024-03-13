/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';
import { icons } from '../../../assets';
import s from './LngSwitcher.module.scss';

import { useTranslation } from 'react-i18next';

const LngSwitcher = () => {
	const dropDownRef = useRef();
	const { i18n } = useTranslation();
	const [language, setLanguage] = useState(i18n.language);
	const [dropDown, setDropDown] = useState(false);

	const handleChangeLang = (lang) => {
		setLanguage(lang);
		i18n.changeLanguage(lang);
		setDropDown(false);
	};

	const handleEscape = (e) => {
		if (e.key === 'Escape') setDropDown(false);
	};

	const handleCloseBackdrop = (e) => {
		if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
			setDropDown(false);
		}
	};

	useEffect(() => {
		if (dropDown) {
			document.addEventListener('keydown', handleEscape);
			document.addEventListener('click', handleCloseBackdrop);
		}

		return () => {
			document.removeEventListener('keydown', handleCloseBackdrop);
			document.removeEventListener('click', handleCloseBackdrop);
		};
	}, [dropDown]);

	const handleOpen = (e) => {
		e.stopPropagation();
		setDropDown((prevDropDown) => !prevDropDown);
	};

	return (
		<div className={s.wrapper}>
			<div className={s.select} onClick={handleOpen}>
				<p className={s.text}>{language.toUpperCase()}</p>
				<svg width="17" height="17" className={s.icon}>
					<use href={`${icons}#icon-select-arrow`}></use>
				</svg>
			</div>
			{dropDown && (
				<div className={s.dropDown} ref={dropDownRef}>
					<div className={s.language} onClick={() => handleChangeLang('ua')}>
						UA
					</div>
					<div className={s.language} onClick={() => handleChangeLang('en')}>
						EN
					</div>
				</div>
			)}
		</div>
	);
};

export default LngSwitcher;
