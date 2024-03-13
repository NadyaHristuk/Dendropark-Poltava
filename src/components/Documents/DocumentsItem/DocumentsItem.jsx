import { icons } from '../../../assets';
import css from './DocumentsItem.module.scss';

export default function DocumentsItem({ title, subtitle, description, link }) {
	return (
		<>
			<div className={css.wraper}>
				<svg className={css.documentsIcon}>
					<use href={`${icons}#icon-document`}></use>
				</svg>
				<a className={css.link} href={link} target="_blank">
					{subtitle}
				</a>
				<svg className={css.arrowUpIcon}>
					<use href={`${icons}#icon-arrow-up`}></use>
				</svg>
			</div>
			<div className={css.description}>
				<p className={css.text}>{title}</p>
				<p className={css.text}>{description}</p>
			</div>
		</>
	);
}
