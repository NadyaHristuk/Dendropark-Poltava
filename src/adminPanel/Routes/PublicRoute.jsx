import { Navigate } from 'react-router-dom';

const PublicRoute = ({ element }) => {
	const isAuth = localStorage.getItem('token');

	return !isAuth ? element : <Navigate to="/admin/product" />;
};

export default PublicRoute;
