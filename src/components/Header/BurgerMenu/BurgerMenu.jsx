import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useMedia } from '../../../hooks';
import { icons } from '../../../assets';

import s from './BurgerMenu.module.scss';

const BurgerMenu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { isMobile } = useMedia();
	const navRef = useRef(null);

	const { t } = useTranslation();

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const handleEscKey = (event) => {
			if (event.key === 'Escape' && isOpen) {
				setIsOpen(false);
			}
		};

		const handleClickOutside = (event) => {
			if (navRef.current && !navRef.current.contains(event.target) && isOpen) {
				setIsOpen(false);
			}
		};

		document.addEventListener('keydown', handleEscKey);
		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('keydown', handleEscKey);
			document.removeEventListener('click', handleClickOutside);
		};
	}, [isOpen]);

	return (
		<div>
			<button onClick={toggleMenu} className={s.burgerBtn}>
				<svg className={s.burgerBtnIcon}>
					<use href={`${icons}#icon-burger`}></use>
				</svg>
			</button>
			{isOpen && (
				<nav className={s.burgerNav}>
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
							<NavLink to="/services">
								{t('header.navigation.services')}
							</NavLink>
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
