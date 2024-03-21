import { useState, useEffect } from 'react';
import ChroniclesItem from '../ChroniclesItem/ChroniclesItem';
import ChroniclesListUl from './ChroniclesListUl';
import { useTranslation } from 'react-i18next';
import { useMedia } from '../../../hooks/useMedia';
import { icons } from '../../../assets';
import {fetchEvents} from '../../../adminPanel/serviceApiEvents.js';
import { LANGUAGE_STORAGE_KEY } from '../../../constants';
import css from './ChroniclesList.module.scss';

const ChroniclesList = () => {
	const [chronicles, setChronicles] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const { t } = useTranslation();
	const { isMobile} = useMedia();

	const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) || 'ua';

	useEffect(() => {
		const fetchChroniclesList = async () => {
			try {
				setLoading(true);
				const response = await fetchEvents();
				if (response) {
					setChronicles(response.slice(0, 8).sort((a, b) => b.date - a.date));
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
		>
			<h3 className={css.title}>{t('chronicles.chroniclesTitle')}</h3>
			{!loading && chronicles.length > 0 ? (
				isMobile ? (
					<ChroniclesListUl items={chronicles} />
				) : (
					<ul className={css.list}>
						{chronicles.map((item) => (
							<li key={item._id} className={css.item}>
								<ChroniclesItem
									id={item[savedLanguage]._id}
									url={item.image}
									title={item[savedLanguage].title}
									description={item[savedLanguage].description}
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