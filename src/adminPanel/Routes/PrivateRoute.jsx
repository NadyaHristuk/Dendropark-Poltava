import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
	const isAuth = localStorage.getItem('token');

	return isAuth ? element : <Navigate to="/admin/login" />;
};

export default PrivateRoute;
