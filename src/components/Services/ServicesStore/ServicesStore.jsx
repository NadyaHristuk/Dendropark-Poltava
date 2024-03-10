import css from './services-store.module.scss';
import { useState, useEffect } from 'react';
import { usePagination } from '../../../hooks/usePagination';
import ServicePagination from '../ServicesInfo/ServicePagination';
import data from '../servicesStore';

export const ServicesStore = ({ items }) => {
	const [pageSize, setPageSize] = useState(3); // Початковий розмір сторінки - 3
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(
		Math.ceil(items.length / pageSize)
	);
	const { currentPosts, ...options } = usePagination({
		postPerPage: 3,
		data,
	});

	useEffect(() => {
		function updatePageSize() {
			const windowWidth = window.innerWidth;
			if (windowWidth >= 960) {
				setPageSize(6);
			} else if (windowWidth >= 390) {
				setPageSize(3);
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
			<ul className={css.store_list}>
				{currentItems.map(
					({
						id,
						imgMob,
						imbMobRetina,
						imgTab,
						imgTabRetina,
						title,
						text,
						price,
					}) => (
						<li key={id} className={css.store_item}>
							<div className={css.store_subitem}>
								<picture className={css.itemImage} alt={title}>
									<source
										srcSet={`${imgTab} 1x, ${imgTabRetina} 2x`}
										type="image/webp"
										media="(min-width: 960px)"
									/>
									<source
										srcSet={`${imgMob} 1x, ${imbMobRetina} 2x`}
										type="image/webp"
										media="(min-width: 320px)"
									/>
									<img
										className={css.img}
										src={imgTab}
										alt="Team GoIT"
										width="312"
									/>
								</picture>
								<div className={css.store_scroll_wrapper}>
									<p className={css.store_subtitle}>{title}</p>
									<p className={css.store_descr}>{text}</p>
								</div>
								<p className={css.store_price}>Ціна: {price}</p>
							</div>
							<a
								className={css.store_btn}
								target="_blank"
								href="https://t.me/alyonaplants"
							>
								Купити
							</a>
						</li>
					)
				)}
			</ul>

			<ServicePagination
				totalPages={totalPages}
				setCurrentPage={setCurrentPage}
				currentPage={currentPage}
				goToNextPage={handleNextPage}
				goToPrevPage={handlePrevPage}
			/>
		</div>
	);
};
