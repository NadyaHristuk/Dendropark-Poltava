import { LoginOutlined, LogoutOutlined } from '@ant-design/icons';

import s from './UserBar.module.scss';
import { Link } from 'react-router-dom';
import { logout } from '../../srviceApiAuth';
import { useCustomContext } from '../../../context/Context';

const UserBar = () => {
	const isAuth = localStorage.getItem('token');
	const { adminEmail, setAdminEmail } = useCustomContext();

	const signOut = () => {
		setAdminEmail('');
		logout(adminEmail);
		localStorage.removeItem('token');
	};

	return (
		<div className={s.wrapper}>
			{isAuth ? (
				<Link to="/admin" onClick={signOut} className={s.link}>
					<b>{adminEmail} </b>- Вийти: <LogoutOutlined className={s.icon} />
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
