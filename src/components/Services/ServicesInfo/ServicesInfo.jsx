import css from './ServicesInfo.module.css';

export const ServicesInfo = ({ items }) => {
	return (
		<ul>
			{items.map(({ text, title, id }) => (
				<li key={id} className={css.services_item}>
					<h3 className={css.item_title}>{title}</h3>

					<p className={css.item_description}>{text}</p>
				</li>
			))}
		</ul>
	);
};
