import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import scss from './Logo.module.scss';
import { logo1x, logo2x } from '../../../assets';

const Logo = () => {
	const { t } = useTranslation();
	const titleArr = t('logo.title').split(' ');
	const logoTitleSpan = titleArr.splice(1, 1).toString();
	const logoTitleFirstWord = titleArr.splice(0, 1).toString();
	const logoTitleLastWord = titleArr.toString();
	return (
		<Link to="/" className={scss.link}>
			<img
				className={scss.icon}
				src={logo1x}
				srcSet={`${logo1x} 1x, ${logo2x} 2x`}
				alt={t('logo.alt')}
			/>
			<p className={scss.title}>
				{logoTitleFirstWord}
				<br />
				<span> {logoTitleSpan} </span>
				{logoTitleLastWord}
			</p>
		</Link>
	);
};

export default Logo;
