import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useMedia } from '../../hooks/useMedia';

import Container from '../Container';
import s from './Header.module.scss';

import { logo1x, logo2x } from '../../assets';

const LanguageSelector = ({ value, onChange }) => {
	return (
		<select value={value} onChange={(e) => onChange(e.target.value)}>
			<option value="ua">UA</option>
			<option value="en">EN</option>
		</select>
	);
};

const Header = () => {
	const { isMobile, isTablet, isDesktop } = useMedia(); // Визначаємо тип пристрою користувача

	const [language, setLanguage] = useState('ua'); // Початкова мова - українська
	const { t, i18n } = useTranslation();

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
		setLanguage(lng);
	};

	const titleArr = t('header.logo.title').split(' ');
	const logoTitleSpan = titleArr.splice(1, 1).toString();
	const logoTitleFirstWord = titleArr.splice(0, 1).toString();
	const logoTitleLastWord = titleArr.toString();

	return (
		<Container>
			<header className={s.header}>
				<Link to="/" className={s.logo}>
					<picture>
						<source srcSet={`${logo1x} 1x, ${logo2x} 2x`} />
						<img
							src={`${logo1x} 1x}`}
							alt={t('header.logo.alt')}
							className={s.logoImg}
						/>
					</picture>
					<p className={s.logoTitle}>
						{logoTitleFirstWord}
						<span> {logoTitleSpan} </span>
						{logoTitleLastWord}
					</p>
				</Link>
				<nav>
					<ul className={s.nav}>
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
				</nav>
				<address>
					{(isDesktop || isTablet) && (
						<a href="https://t.me/MaxMakukha" target="_blank">
							+38 (050) 289-41-33
						</a>
					)}
					{isMobile && <a href="tel:+380502894133">+38 (050) 289-41-33</a>}
				</address>
				<LanguageSelector value={language} onChange={changeLanguage} />
			</header>
		</Container>
	);
};

export default Header;
