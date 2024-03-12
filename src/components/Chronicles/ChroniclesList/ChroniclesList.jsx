import ChroniclesItem from '../ChroniclesItem/ChroniclesItem';
import { ChroniclesListUl } from './ChroniclesListUl';
import { useTranslation } from 'react-i18next';
import chronicles from '../сhronicles';
import { icons } from '../../../assets';
import css from './ChroniclesList.module.scss';
import { useMedia } from '../../../hooks/useMedia';

const ChroniclesList = () => {
	const { t } = useTranslation();
	const { isMobile } = useMedia();
	chronicles.sort((a, b) => b.date - a.date);

	return (
		<section id="litopys" className={css.chroniclesSection}>
			<h3 className={css.title}>{t('chronicles.chroniclesTitle')}</h3>
			{chronicles.length > 0 ? (
				isMobile ? (
					<ChroniclesListUl />
				) : (
					<div className={css.test}>
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
					</div>
				)
			) : (
				<p className={css.message}>
					<svg className={css.attention}>
						<use href={`${icons}#icon-attention1`}></use>
					</svg>
					Поки що не має нових подій, очікуйте згодом...
				</p>
			)}
		</section>
	);
};

export default ChroniclesList;
