import css from './ServicesInfo.module.scss';
import { icons } from '../../../assets';
import { useState, useEffect } from 'react';

export const ServicesInfo = ({ items }) => {
	const [pageSize, setPageSize] = useState(5); // Початковий розмір сторінки - 3
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(
		Math.ceil(items.length / pageSize)
	);

	useEffect(() => {
		function updatePageSize() {
			const windowWidth = window.innerWidth;
			if (windowWidth >= 960) {
				setPageSize(5);
			} else if (windowWidth >= 390) {
				setPageSize(5);
			}
		}

		updatePageSize();

		window.addEventListener('resize', updatePageSize);

		return () => {
			window.removeEventListener('resize', updatePageSize);
		};
	}, []);

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
			<ul className={css.services_list}>
				{currentItems.map(({ text, title, id }) => (
					<li key={id} className={css.services_item}>
						<div className={css.item_icon}>
							<svg className={css.item_icon_svg} width="20" height="19">
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
			<button onClick={handlePrevPage} disabled={currentPage === 1}>
				Попередня
			</button>
			<button onClick={handleNextPage} disabled={currentPage === totalPages}>
				Наступна
			</button>
		</div>
	);
};

// import css from './ServicesInfo.module.scss';
// import { icons } from '../../../assets';

// export const ServicesInfo = ({ items }) => {
// 	return (
// 		<ul className={css.services_list}>
// 			{items.map(({ text, title, id }) => (
// 				<li key={id} className={css.services_item}>
// 					<div className={css.item_icon}>
// 						<svg className={css.item_icon_svg} width="26" height="29">
// 							<use href={`${icons}#icon-services`}></use>
// 						</svg>
// 					</div>
// 					<div className={css.item_wrapper}>
// 						<h3 className={css.item_title}>{title}</h3>
// 						<p className={css.item_description}>{text}</p>
// 					</div>
// 				</li>
// 			))}
// 		</ul>
// 	);
// };
