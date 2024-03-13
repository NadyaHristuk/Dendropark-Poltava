import { useTranslation } from 'react-i18next';
import { Picture } from '../Picture/Picture';
import { levVaingortPicture } from '../Picture/levVaingortPicture';
import { subotnikPicture } from '../Picture/subbotnikPicture';
import { yaninaYakivnaPicture } from '../Picture/yaninaYakivna';
import css from './HistoryCreation.module.scss';
import { icons } from '../../../assets';
import { useMedia } from '../../../hooks/useMedia';
import { useRef } from 'react';

export const HistoryCreation = ({ onClick, onPicturesContainerHeight }) => {
	const { isDesktop } = useMedia();
	const { t } = useTranslation();
	const picturesContainerRef = useRef(null);

	const handleReduceButtonClick = () => {
		if (picturesContainerRef.current) {
			const container = picturesContainerRef.current;
			const height = picturesContainerRef.current.offsetTop;
			onPicturesContainerHeight(height);
			container.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
				inline: 'nearest',
			});
		}
		onClick();
	};

	return (
		<div ref={picturesContainerRef} className={css.historyCreationContainer}>
			<p className={css.historyCreationText}>
				{t('about.descriptionFirstParagraph')}
				<br />
				{t('about.descriptionSecondParagraph')}
				<br />
				{t('about.descriptionThirdParagraph')}
			</p>
			<div
				className={`${css.historyCreationPicturesContainer} ${css.historyCreationSection}`}
			>
				<div className={` ${css.poltavBatleText}`}>
					<h2 className={css.historyCreationTitle}>
						{t('about.historyCreationTitle')}
					</h2>
					<p className={`${css.historyCreationText}`}>
						{t('about.historyCreationTextFirstArcticle')}
						<br />
						{t('about.historyCreationTextSecondArticle')}
					</p>
				</div>
				<div className={`${css.levVaingortContainer} `}>
					<Picture pictures={levVaingortPicture} />

					<p className={css.pictureDescription}>
						{t('about.levVaingortContainer')}
					</p>
				</div>

				{isDesktop ? (
					<div className={css.secondLayerContainer}>
						<div className={`${css.ninaYacenkoContainer}`}>
							<Picture pictures={yaninaYakivnaPicture} />

							<p
								className={`${css.pictureDescription} ${css.pictureDescriptionNinaYacenko}`}
							>
								{t('about.ninaYacenkoContainer')}
							</p>
						</div>
						<div className={`${css.subotnikContainer}`}>
							<Picture pictures={subotnikPicture} />
							<p className={`${css.pictureDescription} ${css.subotnikText}`}>
								{t('about.subotnikContainer')}
							</p>
						</div>
						<div
							className={`${css.historyCreationSection} ${css.historyDescriptionText} `}
						>
							<p className={css.historyCreationText}>
								{t('about.historyCreationSectionFirstArtickle')}
								<br />
								{t('about.historyCreationSectionSecondArtickle')}
								<br />
								{t('about.historyCreationSectionThirdArtickle')}
							</p>
						</div>
					</div>
				) : (
					<>
						<div className={`${css.ninaYacenkoContainer}`}>
							<Picture pictures={yaninaYakivnaPicture} />

							<p
								className={`${css.pictureDescription} ${css.pictureDescriptionNinaYacenko}`}
							>
								{t('about.ninaYacenkoContainer')}
							</p>
						</div>
						<div className={`${css.subotnikContainer}`}>
							<Picture pictures={subotnikPicture} />
							<p className={`${css.pictureDescription} ${css.subotnikText}`}>
								{t('about.subotnikContainer')}
							</p>
						</div>
					</>
				)}
			</div>
			<div
				className={`${css.historyCreationSection} ${css.historyDescriptionText} `}
			>
				<p className={css.historyCreationText}>
					{t('about.historyCreationSectionFirstArtickle')}
					<br />
					{t('about.historyCreationSectionSecondArtickle')}
					<br />
					{t('about.historyCreationSectionThirdArtickle')}
				</p>
			</div>{' '}
			<button className={css.reduceButton} onClick={handleReduceButtonClick}>
				{t('about.reduceButton')}
				<svg className={css.vectorIcon}>
					<use href={`${icons}#icon-Vector-top`}></use>
				</svg>
			</button>
		</div>
	);
};
