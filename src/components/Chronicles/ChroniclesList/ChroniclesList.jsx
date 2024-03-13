import { useState, useEffect } from 'react';
import ChroniclesItem from '../ChroniclesItem/ChroniclesItem';
import ChroniclesListUl from './ChroniclesListUl';
import { useTranslation } from 'react-i18next';
import { useMedia } from '../../../hooks/useMedia';
import { icons } from '../../../assets';
// import fetchChronicles from './ChroniclesApi.js'
import chronicles from '../сhronicles';
import css from './ChroniclesList.module.scss';

const ChroniclesList = () => {
	// const [chronicles, setChronicles] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const { t } = useTranslation();
	const { isMobile } = useMedia();

	// useEffect(() => {
	//     const fetchChroniclesList = async () => {
	//         try {
	//             setLoading(true);
	//             const response = await fetchChronicles();
	//             if (response) {
	//                 setChronicles(response.sort((a, b) => b.date - a.date));
	//             }
	//         } catch (error) {
	//             setError(error.message);
	//         } finally {
	//             setLoading(false);
	//         }
	//     };

	//     fetchChroniclesList();
	// }, []);

	return (
		<section id="litopys" className={css.chroniclesSection}>
			<h3 className={css.title}>{t('chronicles.chroniclesTitle')}</h3>
			{loading ? (
				<p className={css.message}>Завантаження...</p>
			) : error ? (
				<p className={css.message}>Помилка: {error}</p>
			) : chronicles.length > 0 ? (
				isMobile ? (
					<ChroniclesListUl />
				) : (
					<ul className={css.list}>
						{chronicles.map(({ id, photo, title, description }) => (
							<li key={id} className={css.item}>
								<ChroniclesItem
									id={id}
									url={photo}
									title={title}
									description={description}
								/>
							</li>
						))}
					</ul>
				)
			) : (
				<p className={css.message}>
					<svg className={css.icon_attention}>
						<use href={`${icons}#icon-attention`}></use>
					</svg>
					Поки що не має нових подій, очікуйте згодом...
				</p>
			)}
		</section>
	);
};

export default ChroniclesList;
