import s from './service-pagination.module.scss';
import sprite from '../../../assets/icons/sprite.svg';

const ServicePagination = ({
	totalPages,
	setCurrentPage,
	currentPage,
	goToNextPage,
	goToPrevPage,
}) => {
	const visiblePages = 4;
	const pages = [];

	let startPage = Math.max(1, currentPage - visiblePages / 2);
	let endPage = startPage + visiblePages - 1;

	if (endPage > totalPages) {
		endPage = totalPages;
		startPage = Math.max(1, endPage - visiblePages + 1);
	}

	for (let i = startPage; i <= endPage; i += 1) pages.push(i);

	const elements = pages.map((page, index) => {
		const fullClassName =
			page === currentPage ? `${s.circle} ${s.active}` : s.circle;

		return (
			<button
				key={index}
				className={s.btn}
				onClick={() => setCurrentPage(page)}
			>
				<span className={fullClassName}></span>
			</button>
		);
	});

	return (
		<div className={s.box}>
			<button type="button" className={s.button} onClick={goToPrevPage}>
				<svg className={s.arrow}>
					<use href={`${sprite}#icon-arrow-left`}></use>
				</svg>
			</button>
			<div className={s.wrapper}>{elements}</div>
			<button type="button" className={s.button} onClick={goToNextPage}>
				<svg className={s.arrow}>
					<use href={`${sprite}#icon-arrow-right`}></use>
				</svg>
			</button>
		</div>
	);
};

export default ServicePagination;
