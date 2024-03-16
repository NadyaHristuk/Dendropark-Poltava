import { useTranslation } from 'react-i18next';
import css from './ParkDescription.module.scss';
import { useEffect, useState } from 'react';
import { HistoryCreation } from '../HistoryCreation/HistoryCreation';
import { Picture } from '../Picture/Picture';
import { heroPicture } from '../Picture/heroPicture';
import Container from '../../Container/Container';
import { SectionWrapper } from '../SectionWrapper/SectionWrapper';
import { useMedia } from '../../../hooks/useMedia';

export const ParkDescription = () => {
	const { t } = useTranslation();
	const [showMore, setShowMore] = useState(false);
	const { isMobile } = useMedia();
	const [containerHeight, setContainerHeight] = useState(0);

	const ParkDescriptionClass = `${css.descriptionTitle} ${
		showMore && isMobile && css.descriptionTitleShowMore
	}`;

	useEffect(() => {
		if (!showMore && containerHeight) {
			scrollTo({ top: containerHeight, behavior: 'smooth' });
		}
	}, [showMore, containerHeight]);

	return (
		<SectionWrapper topPadding>
			<Container>
				<h1 className={ParkDescriptionClass}>{t('about.sectionTitle')}</h1>
			</Container>
			<div
				className={`${css.heroPictureContainer} ${css.heroContainerDesktop}`}
			>
				<Picture pictures={heroPicture} />
			</div>

			{!showMore && (
				<Container>
					<p className={css.parkDesription}>
						{t('about.descriptionFirstParagraph')}
						<br />
						{t('about.descriptionSecondParagraph')}
						<br />
						{t('about.descriptionThirdParagraph')}
					</p>

					<button
						onClick={() => setShowMore(true)}
						className={css.readMoreButton}
					>
						{t('about.readMore')}
					</button>
				</Container>
			)}

			{showMore && (
				<HistoryCreation
					onClick={() => setShowMore(false)}
					setContainerHeight={setContainerHeight}
				/>
			)}
		</SectionWrapper>
	);
};
