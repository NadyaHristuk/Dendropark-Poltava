import css from './services-store.module.scss';
import { usePagination } from '../../../hooks/usePagination';
import { useEffect, useState } from 'react';

import Slider from '../../Slider/Slider';
import { useMedia } from '../../../hooks/useMedia';
import { fetchProducts } from '../../../adminPanel/serviceApiProducts';

export const ServicesStore = () => {
	const { isMobile } = useMedia();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [products, setProducts] = useState([]);

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

	const countEl = isMobile ? 3 : 6;

	const { chunkedData } = usePagination({
		perPage: countEl,
		data: products,
	});

	const list = (cards) => {
		return (
			<ul className={css.store_list}>
				{cards.map(({ _id, title, description, price, image }) => (
					<li key={_id} className={css.store_item}>
						<div className={css.store_subitem}>
							<picture className={css.itemImage} alt={title}>
								<source
									srcSet={`${image} 1x, ${image} 2x`}
									type="image/webp"
									media="(min-width: 960px)"
								/>
								<source
									srcSet={`${image} 1x, ${image} 2x`}
									type="image/webp"
									media="(min-width: 320px)"
								/>
								<img className={css.img} src={image} alt={title} width="312" />
							</picture>
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
				))}
			</ul>
		);
	};

	return (
		<div>
			<Slider chunkedData={chunkedData} currentPage={list} />
		</div>
	);
};
