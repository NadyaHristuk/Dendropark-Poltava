import { useState, useEffect } from 'react';
import ChroniclesItem from '../ChroniclesItem/ChroniclesItem';
import ChroniclesListUl from './ChroniclesListUl';
import { useTranslation } from 'react-i18next';
import { useMedia } from '../../../hooks/useMedia';
import { icons } from '../../../assets';
import fetchChronicles from './ChroniclesApi.js';
// import chronicles from '../сhronicles';
import { LANGUAGE_STORAGE_KEY } from '../../../constants';
import css from './ChroniclesList.module.scss';

const ChroniclesList = ({ paddingTop }) => {
	const [chronicles, setChronicles] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const { t } = useTranslation();
	const { isMobile } = useMedia();
	const paddingTopValue = isMobile ? '150' : paddingTop;

	const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) || 'ua';
	console.log(savedLanguage);
	// console.log(chronicles);

	useEffect(() => {
		const fetchChroniclesList = async () => {
			try {
				setLoading(true);
				const response = await fetchChronicles();
				if (response) {
					setChronicles(response.slice(0,8).sort((a, b) => b.date - a.date));
				}
			} catch (error) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
		};

		fetchChroniclesList();
	}, []);

	return (
		<section
			id="litopys"
			className={css.chroniclesSection}
			style={{ paddingTop: `${paddingTopValue}px` }}
		>
			<h3 className={css.title}>{t('chronicles.chroniclesTitle')}</h3>
			{loading ? (
				<p className={css.message}>Loading...</p>
			) : error ? (
				<p className={css.message}>Error: {error}</p>
			) : chronicles.length > 0 ? (
				isMobile ? (
					<ChroniclesListUl items={chronicles}/>
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
