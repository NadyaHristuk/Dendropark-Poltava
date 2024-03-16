// import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useMedia } from '../../hooks/useMedia';

import Container from '../Container';
import s from './Header.module.scss';

import { logo1x, logo2x } from '../../assets';
import BurgerMenu from './BurgerMenu';
import LngSwitcher from './LngSwitcher/LngSwitcher';

const Header = () => {
	const { isMobile, isTablet, isDesktop } = useMedia(); // Визначаємо тип пристрою користувача

	const { t } = useTranslation();

	const titleArr = t('header.logo.title').split(' ');
	const logoTitleSpan = titleArr.splice(1, 1).toString();
	const logoTitleFirstWord = titleArr.splice(0, 1).toString();
	const logoTitleLastWord = titleArr.toString();

	return (
		<header className={s.header}>
			<Container className={s.container}>
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
						<br />
						<span> {logoTitleSpan} </span>
						{logoTitleLastWord}
					</p>
				</Link>
				{isDesktop && (
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
								<NavLink to="/contact">
									{t('header.navigation.contacts')}
								</NavLink>
							</li>
						</ul>
					</nav>
				)}
				{(isDesktop || isTablet) && (
					<address className={s.address}>
						<a href="https://t.me/DekorKultur" target="_blank">
							+38 (050) 289-41-33
						</a>
					</address>
				)}
				{/* <LngSwitcher2 /> */}
				<LngSwitcher />
				{(isTablet || isMobile) && <BurgerMenu />}
			</Container>
		</header>
	);
};

export default Header;
