import css from './services-store.module.scss';
import { usePagination } from '../../../hooks/usePagination';
import data from '../servicesStore';
import Slider from '../../Slider/Slider';
import { useMedia } from '../../../hooks/useMedia';
export const ServicesStore = () => {
	const { isMobile } = useMedia();
	const countEl = isMobile ? 3 : 6;

	const { chunkedData } = usePagination({
		perPage: countEl,
		data,
	});

	const list = (cards) => {
		return (
			<ul className={css.store_list}>
				{cards.map(
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
										alt={title}
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
								<span>Купити</span>
							</a>
						</li>
					)
				)}
			</ul>
		);
	};

	return (
		<div>
			<Slider chunkedData={chunkedData} currentPage={list} />
		</div>
	);
};
