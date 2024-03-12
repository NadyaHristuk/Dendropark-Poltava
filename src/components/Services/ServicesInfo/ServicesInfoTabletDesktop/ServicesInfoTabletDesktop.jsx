import css from './services-info-tablet-desktop.module.scss';

import { icons } from '../../../../assets';

const ServicesInfoTabletDesktop = ({ items }) => {
	return (
		<div>
			<ul className={css.services_list}>
				{items.map(({ text, title, id }) => (
					<li key={id} className={css.services_item}>
						<div className={css.item_icon}>
							<svg
								className={css.icon}
								width="32"
								height="32"
								aria-label="arrow-forward"
							>
								<use href={`${icons}#icon-services-heart`}></use>
							</svg>
						</div>
						<div className={css.item_wrapper}>
							<h3 className={css.item_title}>{title}</h3>
							<p className={css.item_description}>{text}</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ServicesInfoTabletDesktop;
