import { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { HashLink } from 'react-router-hash-link';
import { icons } from '../../../assets';
import scss from './MapItem.module.scss';
import './transition.scss';
import { useTranslation } from 'react-i18next';

const MapItem = ({ item, className }) => {
	const [isVisible, setIsVisible] = useState(false);
	const nodeRef = useRef(null);
	const {t} = useTranslation();
	const savedLanguage = localStorage.getItem('LANGUAGE_KEY') || 'ua';

	let lang;

	savedLanguage === 'ua' ? (lang = 'uk') : (lang = 'en');

	const handleChange = () => {
		setIsVisible(!isVisible);
	};

	return (
		<li
			className={`${scss.item} ${scss[className]}`}
			onMouseEnter={handleChange}
			onMouseLeave={handleChange}
		>
			{item[lang].number}

			<CSSTransition
				in={isVisible}
				timeout={200}
				classNames="my-node"
				unmountOnExit={true}
				nodeRef={nodeRef}
			>
				<div className={scss.modal} ref={nodeRef}>
					<div className={scss.content}>
						<button className={scss.close} onClick={handleChange}>
							<svg className={scss.closeIcon}>
								<use href={`${icons}#icon-close`}></use>
							</svg>
						</button>
						<div className={scss.number}>{item[lang].number}</div>
						<h3 className={scss.title}>{item[lang].title}</h3>
						<p className={scss.description}>{item[lang].description}</p>
						<HashLink smooth to={`/about#${item._id}`} className={scss.link}>
							{t('about.detailLink')}
							<svg className={scss.linkIcon}>
								<use href={`${icons}#icon-arrow-up`}></use>
							</svg>
						</HashLink>
					</div>
				</div>
			</CSSTransition>
		</li>
	);
};

export default MapItem;
