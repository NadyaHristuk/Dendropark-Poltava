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
	const lang = localStorage.getItem('LANGUAGE_KEY') || 'ua';

	const handleChange = () => {
		setIsVisible(!isVisible);
	};

	const cl = (className === "item-10" && lang === "ua") ? `${scss[className]} ${scss.detail}` : scss[className];

	return (
		<li
			className={`${scss.item} ${cl}`}
			onMouseEnter={handleChange}
			onMouseLeave={handleChange}
		>
			{item?.number}

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
						<div className={scss.number}>{item?.number}</div>
						<h3 className={scss.title}>{item[lang]?.title}</h3>
						<p className={scss.description}>{item[lang]?.description}</p>
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
