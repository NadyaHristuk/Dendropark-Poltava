import { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';
import css from './QrCode.module.scss';
import icons from '/src/assets/icons/sprite.svg';
import { useMedia } from '../../../hooks/useMedia';
import { fetchHelpParkData } from '../../../adminPanel/serviceApiHelpPark';

export const QrCode = () => {
	const { isMobile, isTablet, isDesktop } = useMedia();
	const [donation, setDonation] = useState({});
	const savedLanguage = localStorage.getItem('LANGUAGE_KEY') || 'ua';

	useEffect(() => {
		const getDonations = async () => {
			try {
				const data = await fetchHelpParkData()
				setDonation(data[0])
			} catch (error) {
				console.log(error.message)
			}
		}

		getDonations();
	}, [])

	return (
		<div className={css.desktopDiv}>
			<p className={css.currentGoal}>{donation[savedLanguage]?.description}</p>

			{(isMobile || isTablet) && (
				<>
					<div className={css.qrCodeWrap}>
						<QRCode
							className={css.qr}
							size={256}
							bgColor="transparent"
							fgColor="#014631"
							value={donation?.link || ""}
							viewBox={`0 0 256 256`}
						/>
					</div>
					<a
						className={css.helpLink}
						href={donation.link}
						target="_blank"
					>
						<svg className={css.heartIcon}>
							<use href={`${icons}#icon-simplethankyou`}></use>
						</svg>
						{donation[savedLanguage]?.buttonText}
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
						value={donation?.link || ""}
						viewBox={`0 0 256 256`}
					/>
					<a
						className={css.helpLink}
						href={donation?.link}
						target="_blank"
					>
						<svg className={css.heartIcon}>
							<use href={`${icons}#icon-simplethankyou`}></use>
						</svg>
						{donation[savedLanguage]?.buttonText}
					</a>
				</div>
			)}
		</div>
	);
};