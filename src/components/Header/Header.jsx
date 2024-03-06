import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LanguageSelector = ({ value, onChange }) => {
	return (
		<select value={value} onChange={(e) => onChange(e.target.value)}>
			<option value="en">English</option>
			<option value="ua">Українська</option>
		</select>
	);
};

export const Header = () => {
	const [language, setLanguage] = useState('en'); // Початкова мова - англійська
	const { t, i18n } = useTranslation();

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
		setLanguage(lng);
	};
	return (
		<header>
			<nav>
				<ul>
					<li>
						<NavLink to="/" end>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="/about">About</NavLink>
					</li>
					<li>
						<NavLink to="/vzaemodia">Vzaemodia</NavLink>
					</li>
					<li>
						<NavLink to="/chronicles">Chronicles</NavLink>
					</li>
					<li>
						<NavLink to="/services">Services</NavLink>
					</li>
					<li>
						<NavLink to="/contact">Contact</NavLink>
					</li>
				</ul>
				<LanguageSelector value={language} onChange={changeLanguage} />
			</nav>
		</header>
	);
};
