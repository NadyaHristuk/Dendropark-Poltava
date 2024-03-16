import QRCode from 'react-qr-code';
import css from './QrCode.module.scss';
import { useTranslation } from 'react-i18next';
import icons from '/src/assets/icons/sprite.svg';
import { useMedia } from '../../../hooks/useMedia';
import { useEffect } from 'react';
import { fetchHelpParkData } from '../../../adminPanel/serviceApiHelpPark';
import { useState } from 'react';

export const QrCode = () => {
	const { t } = useTranslation();
	const { isMobile, isTablet, isDesktop } = useMedia();
	const [donation, setDonation] = useState(null)

	useEffect(() => {
		const getLinkHelpParkData = async() => {
			try {
				const data = await fetchHelpParkData()
				setDonation(data[0])
			} catch (error) {
				console.log((error.message))
			}
		}

		getLinkHelpParkData()
	}, [])

	return (
		<div className={css.desktopDiv}>
			<p className={css.currentGoal}>{t('helpPark.currentGoal')}</p>

			{(isMobile || isTablet) && (
				<>
					<div className={css.qrCodeWrap}>
						<QRCode
							className={css.qr}
							size={256}
							bgColor="transparent"
							fgColor="#014631"
							value="https://t.me/DekorKultur"
							viewBox={`0 0 256 256`}
						/>
					</div>
					<a
						className={css.helpLink}
						href="https://prytulafoundation.org/"
						target="_blank"
					>
						<svg className={css.heartIcon}>
							<use href={`${icons}#icon-simplethankyou`}></use>
						</svg>
						{t('helpPark.button')}
					</a>
				</>
			)}

			{isDesktop && (
				<div className={css.qrCodeWrap}>
					<QRCode
						className={css.qr}
						size={256}
						bgColor="transparent"
						fgColor="#014631"
						value="https://t.me/DekorKultur"
						viewBox={`0 0 256 256`}
					/>
					<a
						className={css.helpLink}
						href="https://prytulafoundation.org/"
						target="_blank"
					>
						<svg className={css.heartIcon}>
							<use href={`${icons}#icon-simplethankyou`}></use>
						</svg>
						{t('helpPark.button')}
					</a>
				</div>
			)}
		</div>
	);
};
