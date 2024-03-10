import css from './services-info-mobile.module.scss';
import { icons } from '../../../../assets';
import { useState, useEffect } from 'react';
import { usePagination } from '../../../../hooks/usePagination';
import ServicePagination from '../ServicePagination';
import data from '../../servicesInfo.json';
import { useMedia } from '../../../../hooks/useMedia';

const ServiceInfoMobile = ({ items }) => {
	const [pageSize, setPageSize] = useState(5); // Початковий розмір сторінки - 3

	const [currentPage, setCurrentPage] = useState(1);

	const [totalPages, setTotalPages] = useState(
		Math.ceil(items.length / pageSize)
	);

	const { currentPosts, ...options } = usePagination({
		postPerPage: 5,
		data,
	});

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
export default ServiceInfoMobile;
