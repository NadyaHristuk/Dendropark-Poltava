import { Route, Routes } from 'react-router';
import CommonLayout from './CommonLayout/CommonLayout';
import Login from './pages/login/Login';
import Documents from './pages/Documents/Documents';
import Trials from './pages/Trials/Trials';
import Products from './pages/Products/Products';
import Locations from './pages/Locations/Locations';
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';
import Welcome from './pages/Welcome/Welcome';

const AdminPanel = () => {
	return (
		<Routes>
			<Route path="/" element={<CommonLayout />}>
				<Route index element={<Welcome />} />
				<Route
					path="product"
					element={<PrivateRoute element={<Products />} />}
				/>
				<Route path="trials" element={<PrivateRoute element={<Trials />} />} />
				<Route
					path="locations"
					element={<PrivateRoute element={<Locations />} />}
				/>
				<Route
					path="documents"
					element={<PrivateRoute element={<Documents />} />}
				/>
			</Route>
			<Route path="/login" element={<PublicRoute element={<Login />} />} />
		</Routes>
	);
};

export default AdminPanel;
