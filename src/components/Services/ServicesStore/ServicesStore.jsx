import css from './services-store.module.scss';
import { usePagination } from '../../../hooks/usePagination';
import { useEffect, useState } from 'react';
import data from '../servicesStore';
import Slider from '../../Slider/Slider';
import { useMedia } from '../../../hooks/useMedia';
import { fetchProducts } from '../../../adminPanel/serviceApiProducts';
import i18n from '../../../utils/localization/i18n';

export const ServicesStore = () => {
	const { isMobile } = useMedia();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [products, setProducts] = useState([]);
	const [currentLanguage, setCurrentLanguage] = useState(
		i18n.language === 'ua' ? 'uk' : 'en'
	);
	useEffect(() => {
		async function fetchProductsList() {
			try {
				setLoading(true);
				const response = await fetchProducts();
				setProducts(response);
			} catch (error) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
		}
		fetchProductsList();
	}, []);

	useEffect(() => {
		const handleLanguageChange = () => {
			setCurrentLanguage(i18n.language === 'ua' ? 'uk' : 'en');
		};
		i18n.on('languageChanged', handleLanguageChange);

		return () => {
			i18n.off('languageChanged', handleLanguageChange);
		};
	}, []);

	const countEl = isMobile ? 3 : 6;

	const { chunkedData } = usePagination({
		perPage: countEl,
		data: products,
	});

	const list = (cards) => {
		return (
			<ul className={css.store_list}>
				{cards.map((item) => {
					const { title, description, price, imgAlt, _id } =
						item[currentLanguage];
					return (
						<li key={_id} className={css.store_item}>
							<div className={css.store_subitem}>
								<img
									className={css.img}
									src={item.image}
									alt={imgAlt}
									width="312"
								/>
								<div className={css.store_scroll_wrapper}>
									<p className={css.store_subtitle}>{title}</p>
									<p className={css.store_descr}>{description}</p>
								</div>
								<p className={css.store_price}>Ціна: {price} грн.</p>
							</div>
							<a
								className={css.store_btn}
								target="_blank"
								href="https://t.me/alyonaplants"
							>
								<span>Купити</span>
							</a>
						</li>
					);
				})}
			</ul>
		);
	};

	return (
		<div>
			<Slider chunkedData={chunkedData} currentPage={list} />
		</div>
	);
};
