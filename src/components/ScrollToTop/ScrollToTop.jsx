import React, { useState } from 'react';
import icons from '../../assets/icons/sprite.svg';
import css from './ScrollToTop.module.scss';

export const ScrollToTop = () => {
	const [visible, setVisible] = useState(false);

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 1000) {
			setVisible(true);
		} else if (scrolled <= 1000) {
			setVisible(false);
		}
	};

	const scroll = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	window.addEventListener('scroll', toggleVisible);

	return (
		<button
			style={{ display: visible ? 'inline' : 'none' }}
			className={css.buttonTop}
			onClick={scroll}
		>
			<svg className={css.icon} width="38" height="38">
				<use href={`${icons}#icon-to-top`}></use>
			</svg>
		</button>
	);
};
