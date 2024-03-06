import css from './services-store.module.css';

export const ServicesStore = ({ items }) => {
	return (
		<ul className={css.store_list}>
			{items.map(({ id, img, title, text, price }) => (
				<li key={id} className={css.store_item}>
					<img className={css.store_img} src={img} alt={title} />
					<p className={css.store_subtitle}>{title}</p>
					<p className={css.store_descr}>{text}</p>
					<p className={css.store_price}>Ціна: {price}</p>
					<a className={css.store_btn} href="#">
						Купити
					</a>
				</li>
			))}
		</ul>
	);
};
