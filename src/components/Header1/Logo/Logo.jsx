import { Link } from 'react-router-dom';
import scss from './Logo.module.scss';
import { logo1x, logo2x } from '../../../assets';

const Logo = () => {
	return (
		<Link to="/" className={scss.link}>
			<img
				className={scss.icon}
				src={logo1x}
				srcSet={`${logo1x} 1x, ${logo2x} 2x`}
				alt="Полтавський міський парк"
			/>
			<p className={scss.title}>
				Полтавський <span className={scss.titleColor}>міський</span> парк
			</p>
		</Link>
	);
};

export default Logo;
