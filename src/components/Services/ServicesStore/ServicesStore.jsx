import css from './services-store.module.scss';
import { useState } from 'react';
export const ServicesStore = ({ items }) => {
	const pageSize = 6;
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(
		Math.ceil(items.length / pageSize)
	);
	// Визначте бажаний розмір сторінки

	const currentItems = items.slice(
		(currentPage - 1) * pageSize,
		currentPage * pageSize
	);

	const handlePrevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	return (
		<div>
			<ul className={css.store_list}>
				{currentItems.map(({ id, img, title, text, price }) => (
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
			<button onClick={handlePrevPage} disabled={currentPage === 1}>
				Попередня
			</button>
			<button onClick={handleNextPage} disabled={currentPage === totalPages}>
				Наступна
			</button>
		</div>
	);
};

// import css from './services-store.module.css';

// export const ServicesStore = ({ items }) => {
// 	return (
// 		<ul className={css.store_list}>
// 			{items.map(({ id, img, title, text, price }) => (
// 				<li key={id} className={css.store_item}>
// <img className={css.store_img} src={img} alt={title} />
// <p className={css.store_subtitle}>{title}</p>
// <p className={css.store_descr}>{text}</p>
// <p className={css.store_price}>Ціна: {price}</p>
// <a className={css.store_btn} href="#">
// 	Купити
// </a>
// 				</li>
// 			))}
// 		</ul>
// 	);
// };
