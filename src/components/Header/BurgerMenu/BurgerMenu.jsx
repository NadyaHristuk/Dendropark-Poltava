import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useMedia } from '../../../hooks';
import { icons } from '../../../assets';

import s from './BurgerMenu.module.scss';

const BurgerMenu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { isMobile } = useMedia();
	const navRef = useRef();

	const { t } = useTranslation();

	const toggleMenu = (e) => {
		e.stopPropagation();
		setIsOpen(!isOpen);
	};

	const handleEscape = (e) => {
		if (e.key === 'Escape') setIsOpen(false);
	};

	const handleCloseBackdrop = (e) => {
		if (navRef.current && !navRef.current.contains(e.target)) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		if (isOpen) {
			document.addEventListener('keydown', handleEscape);
			document.addEventListener('click', handleCloseBackdrop);
		}

		return () => {
			document.removeEventListener('keydown', handleCloseBackdrop);
			document.removeEventListener('click', handleCloseBackdrop);
		};
	}, [isOpen]);

	return (
		<div className={s.wrapper}>
			<button onClick={toggleMenu} className={s.burgerBtn}>
				<svg className={s.burgerBtnIcon}>
					<use href={`${icons}#icon-burger`}></use>
				</svg>
			</button>
			{isOpen && (
				<nav className={s.burgerNav} ref={navRef}>
					<ul className={s.burgerList}>
						<li>
							<NavLink to="/" end>
								{t('header.navigation.main')}
							</NavLink>
						</li>
						<li>
							<NavLink to="/about">{t('header.navigation.about')}</NavLink>
						</li>
						<li>
							<NavLink to="/vzaemodia">
								{t('header.navigation.interaction')}
							</NavLink>
						</li>
						<li>
							<NavLink to="/chronicles">
								{t('header.navigation.materials')}
							</NavLink>
						</li>
						<li>
							<NavLink to="/service">{t('header.navigation.services')}</NavLink>
						</li>
						<li>
							<NavLink to="/contact">{t('header.navigation.contacts')}</NavLink>
						</li>
					</ul>
					{isMobile && (
						<address className={s.address}>
							<a href="tel:+380502894133">+38 (050) 289-41-33</a>
						</address>
					)}
				</nav>
			)}
		</div>
	);
};

export default BurgerMenu;
