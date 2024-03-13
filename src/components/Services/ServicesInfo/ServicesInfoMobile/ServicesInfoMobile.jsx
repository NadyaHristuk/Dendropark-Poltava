import css from './services-info-mobile.module.scss';
import { icons } from '../../../../assets';
import { usePagination } from '../../../../hooks/usePagination';
import data from '../../servicesInfo.json';
import { useMedia } from '../../../../hooks/useMedia';
import Slider from '../../../Slider/Slider';

const ServiceInfoMobile = () => {
	const { chunkedData } = usePagination({
		perPage: 5,
		data,
	});
	const { isMobile } = useMedia();

	const list = (cards) => {
		return (
			<ul className={css.services_list}>
				{cards.map(({ text, title, id }) => (
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
		);
	};
	return (
		<div>
			{isMobile && <Slider chunkedData={chunkedData} currentPage={list} />}
			{/* <ServicePagination
				totalPages={totalPages}
				setCurrentPage={setCurrentPage}
				currentPage={currentPage}
				goToNextPage={handleNextPage}
				goToPrevPage={handlePrevPage}
			/> */}
		</div>
	);
};
export default ServiceInfoMobile;
