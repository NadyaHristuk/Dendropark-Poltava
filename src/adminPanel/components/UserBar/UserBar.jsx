import { LoginOutlined, LogoutOutlined } from '@ant-design/icons';

import s from './UserBar.module.scss';
import { Link } from 'react-router-dom';
import { logout } from '../../srviceApiAuth';
import { useCustomContext } from '../../../context/Context';

const UserBar = () => {
	const isAuth = localStorage.getItem('token');
	const { adminEmail, setAdminEmail } = useCustomContext();

	const removeToken = () => {
		localStorage.removeItem('token');
	};
	const delay = 3600000; // 1 hour
	setTimeout(removeToken, delay);

	const signOut = () => {
		setAdminEmail('');
		logout(adminEmail);
		localStorage.removeItem('token');
	};

	return (
		<div className={s.wrapper}>
			{isAuth ? (
				<Link to="/admin" onClick={signOut} className={s.link}>
					Вийти: <LogoutOutlined className={s.icon} />
				</Link>
			) : (
				<Link to="/admin/login" className={s.link}>
					Увійти: <LoginOutlined className={s.icon} />
				</Link>
			)}
		</div>
	);
};

export default UserBar;
