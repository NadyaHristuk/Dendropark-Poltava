import { Picture } from '../Picture/Picture';
import { useTranslation } from 'react-i18next';
import css from './LocationItem.module.scss';
import { arabicToRoman } from './romanNumerals';
import { icons } from '../../../assets';
import { useRef, useState } from 'react';
import { useMedia } from '../../../hooks/useMedia';
import { useScrollBar } from '../../../hooks/use-scrollbar';

export const LocationItem = ({ card }) => {
	const { t } = useTranslation();
	const [isMapOpen, setIsMapOpen] = useState(false);
	const { isMobile } = useMedia();
	const textDescriptionWrapper = useRef(null);

	useScrollBar(textDescriptionWrapper);

	const toggleMap = () => {
		setIsMapOpen((prevState) => !prevState);
	};

	return (
		<li className={css.locationItem} id={card.locationID}>
			{isMobile ? (
				<>
					<div className={`${css.numberSign}`}>
						{arabicToRoman(card.number)}
					</div>
					<div className={css.sliderContainer}>
						<div
							className={`${css.pictureContainer} ${
								isMapOpen && css.pictureContainerOpen
							}`}
						>
							<Picture pictures={card.pictures} />
						</div>

						<div
							className={`${css.pictureContainer} ${css.mapPictureContainer} ${
								isMapOpen && css.pictureContainerOpen
							}`}
						>
							<button className={css.crossIconButton} onClick={toggleMap}>
								<svg className={css.crossIcon}>
									<use href={`${icons}#icon-mi_close`}></use>
								</svg>
							</button>
							<div>
								<Picture pictures={card.pictureMap} />
							</div>
						</div>
					</div>
					<h3 className={css.cardTitle}>
						{arabicToRoman(card.number)}. {t(card.title)}
					</h3>
					<div ref={textDescriptionWrapper}>
						<p className={css.locationItemDescr}>{t(card.description)}</p>
					</div>
					<button
						onClick={toggleMap}
						className={css.locationItemButton}
						type="button"
					>
						{t('about.lookMapButton')}
						<svg className={css.vectorIcon}>
							<use href={`${icons}#icon-Vector`}></use>
						</svg>
					</button>
				</>
			) : (
				<>
					<div className={css.textCard}>
						<div className={css.numberSign}>{arabicToRoman(card.number)}</div>
						<h3 className={css.cardTitle}>
							{arabicToRoman(card.number)}. {t(card.title)}
						</h3>

						<p className={css.locationItemDescr}>{t(card.description)}</p>

						<button
							onClick={toggleMap}
							className={css.locationItemButton}
							type="button"
						>
							{t('about.lookMapButton')}
							<svg className={css.vectorIcon}>
								<use href={`${icons}#icon-Vector`}></use>
							</svg>
						</button>
					</div>
					<div className={css.picturesBox}>
						<div className={css.sliderContainer}>
							<div
								className={`${css.pictureContainer} ${
									isMapOpen && css.pictureContainerOpen
								}`}
							>
								<Picture pictures={card.pictures} />
							</div>

							{
								<div
									className={`${css.pictureContainer} ${
										css.mapPictureContainer
									} ${isMapOpen && css.pictureContainerOpen}`}
								>
									<button className={css.crossIconButton} onClick={toggleMap}>
										<svg className={css.crossIcon}>
											<use href={`${icons}#icon-mi_close`}></use>
										</svg>
									</button>

									<Picture pictures={card.pictureMap} />
								</div>
							}
						</div>
					</div>
				</>
			)}
		</li>
	);
};
