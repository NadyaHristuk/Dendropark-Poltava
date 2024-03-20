import { useTranslation } from 'react-i18next';
import scss from './AdministrationItem.module.scss';

const AdministrationItem = ({
	id,
	name,
	photoMob,
	photoMobRetina,
	photoTab,
	photoTabRetina,
	photoDesk,
	photoDeskRetina,
}) => {
	const { t } = useTranslation();

	return (
		<li className={scss.item}>
			<picture>
				<source
					media="(min-width: 1440px)"
					srcSet={`${photoDesk} 1x, ${photoDeskRetina} 2x`}
				/>
				<source
					media="(min-width: 960px )"
					srcSet={`${photoTab} 1x, ${photoTabRetina} 2x`}
				/>
				<source
					media="(min-width: 320px)"
					srcSet={`${photoMob} 1x, ${photoMobRetina} 2x`}
				/>
				<img className={scss.photo} src={photoMob} alt={name} />
			</picture>

			<div className={scss.info}>
				<h3 className={scss.name}>{t(`contacts.person${id}`)}</h3>
				<p className={scss.text}>{t(`contacts.person${id}Position`)}</p>
			</div>
		</li>
	);
};

export default AdministrationItem;
