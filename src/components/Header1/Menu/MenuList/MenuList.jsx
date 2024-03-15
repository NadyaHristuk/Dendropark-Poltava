import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import scss from './MenuList.module.scss';

const MenuList = () => {
	const { t } = useTranslation();
	return (
		<ul className={scss.list}>
			<li>
				<NavLink className={scss.link} to="/" end>
					{t('header.navigation.main')}
				</NavLink>
			</li>
			<li>
				<NavLink className={scss.link} to="/about">{t('header.navigation.about')}</NavLink>
			</li>
			<li>
				<NavLink className={scss.link} to="/vzaemodia">{t('header.navigation.interaction')}</NavLink>
			</li>
			<li>
				<NavLink className={scss.link} to="/chronicles">{t('header.navigation.materials')}</NavLink>
			</li>
			<li>
				<NavLink className={scss.link} to="/services">{t('header.navigation.services')}</NavLink>
			</li>
			<li>
				<NavLink className={scss.link} to="/contact">{t('header.navigation.contacts')}</NavLink>
			</li>
		</ul>
	);
};

export default MenuList;
