import { Picture } from '../Picture/Picture';
import { useTranslation } from 'react-i18next';
import css from './LocationItem.module.scss';
import { arabicToRoman } from './romanNumerals';
import { icons } from '../../../assets';
import { useEffect, useRef, useState } from 'react';
import { useMedia } from '../../../hooks/useMedia';
import { useScrollBar } from '../../../hooks/use-scrollbar';
import i18n from '../../../utils/localization/i18n.js';
import { createPictureMapObj } from './createPictureMapObj.js';
import { createPictureObj } from './createPictureObj.js';
import { getDates } from './getDatesForUsing.js';
import { useLocation } from 'react-router-dom';

export const LocationItem = ({ card }) => {
	const { t } = useTranslation();
	const [isMapOpen, setIsMapOpen] = useState(false);
	const { isMobile } = useMedia();
	const textDescriptionWrapper = useRef(null);
	const location = useLocation();

	useScrollBar(textDescriptionWrapper);

	const currentLanguage = i18n.language;

	const toggleMap = () => {
		setIsMapOpen((prevState) => !prevState);
	};

	const dates = getDates(card, currentLanguage);

	const { description, imgAlt, number, title, image, mapImage, _id } = dates;

	const pictureLocation = createPictureObj(image, imgAlt);
	const pictureMap = createPictureMapObj(mapImage, imgAlt);

	useEffect(() => {
		if (card && location.hash) {
			const id = location.hash.replace('#', '');
			const element = document.getElementById(id);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		}
	}, [card, location.hash]);

	return (
		<li className={css.locationItem} id={_id}>
			{isMobile ? (
				<>
					<div className={`${css.numberSign}`}>{number}</div>
					<div className={css.sliderContainer}>
						<div
							className={`${css.pictureContainer} ${
								isMapOpen && css.pictureContainerOpen
							}`}
						>
							<Picture pictures={pictureLocation} />
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
								<Picture pictures={pictureMap} />
							</div>
						</div>
					</div>
					<h3 className={css.cardTitle}>
						{number}. {title}
					</h3>
					<div ref={textDescriptionWrapper}>
						<p className={css.locationItemDescr}>{description}</p>
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
						<div className={css.numberSign}>{number}</div>
						<h3 className={css.cardTitle}>
							{number}. {title}
						</h3>
						<div ref={textDescriptionWrapper}>
							<p className={css.locationItemDescr}>{description}</p>
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
					</div>
					<div className={css.picturesBox}>
						<div className={css.sliderContainer}>
							<div
								className={`${css.pictureContainer} ${
									isMapOpen && css.pictureContainerOpen
								}`}
							>
								<Picture pictures={pictureLocation} />
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

									<Picture pictures={pictureMap} />
								</div>
							}
						</div>
					</div>
				</>
			)}
		</li>
	);
};
