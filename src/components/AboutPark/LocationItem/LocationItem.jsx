import { Picture } from '../Picture/Picture';
import { useTranslation } from 'react-i18next';
import css from './LocationItem.module.scss';
import { arabicToRoman } from './romanNumerals';
import { icons } from '../../../assets';
import { useRef, useState } from 'react';
import { useMedia } from '../../../hooks/useMedia';
import { useScrollBar } from '../../../hooks/use-scrollbar';
import i18n from '../../../utils/localization/i18n.js';
import { createPictureMapObj } from './createPictureMapObj.js';
import { createPictureObj } from './createPictureObj.js';

export const LocationItem = ({ card }) => {
	const { t } = useTranslation();
	const [isMapOpen, setIsMapOpen] = useState(false);
	const { isMobile } = useMedia();
	const textDescriptionWrapper = useRef(null);
	useScrollBar(textDescriptionWrapper);

	const currentLanguage = i18n.language;

	const toggleMap = () => {
		setIsMapOpen((prevState) => !prevState);
	};
	const {
		image,
		mapImage,

		uk: {
			description: descriptionUK,
			imgAlt: imgAltUK,
			number: numberUK,
			title: titleUK,
		},
		en: {
			description: descriptionEN,
			imgAlt: imgAltEN,
			number: numberEN,
			title: titleEN,
		},
		_id,
	} = card;

	const datesForUsing =
		currentLanguage === 'ua'
			? {
					description: descriptionUK,
					imgAlt: imgAltUK,
					number: numberUK,
					title: titleUK,
			  }
			: {
					description: descriptionEN,
					imgAlt: imgAltEN,
					number: numberEN,
					title: titleEN,
			  };

	const { description, imgAlt, number, title } = datesForUsing;

	const pictureLocation = createPictureObj(image, imgAlt);
	const pictureMap = createPictureMapObj(mapImage, imgAlt);

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
