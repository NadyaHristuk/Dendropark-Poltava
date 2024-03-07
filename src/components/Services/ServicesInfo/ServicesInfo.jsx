import css from './ServicesInfo.module.scss';
import { icons } from '../../../assets';

export const ServicesInfo = ({ items }) => {
	return (
		<ul className={css.services_list}>
			{items.map(({ text, title, id }) => (
				<li key={id} className={css.services_item}>
					<div className={css.item_icon}>
						<svg className={css.item_icon_svg} width="26" height="29">
							<use href={`${icons}#icon-services`}></use>
						</svg>
					</div>
					<div className={css.item_wrapper}>
						<h3 className={css.item_title}>{title}</h3>
						<p className={css.item_description}>{text}</p>
					</div>
				</li>
			))}
		</ul>
	);
};
