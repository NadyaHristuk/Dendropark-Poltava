import { Route, Routes } from 'react-router';
import CommonLayout from './CommonLayout/CommonLayout';
import Login from './pages/login/Login';
import Documents from './pages/Documents/Documents';
import Trials from './pages/Trials/Trials';
import Products from './pages/Products/Products';
import Locations from './pages/Locations/Locations';
import Services from './pages/Services/Services';
import HelpPark from './pages/HelpPark/HelpPark';
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';
import Welcome from './pages/Welcome/Welcome';
import Events from './pages/Events/Events';

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
				<Route
					path="donation"
					element={<PrivateRoute element={<HelpPark />} />}
				/>
				<Route
					path="services"
					element={<PrivateRoute element={<Services />} />}
				/>
				<Route path="events" element={<PrivateRoute element={<Events />} />} />
			</Route>
			<Route path="/login" element={<PublicRoute element={<Login />} />} />
		</Routes>
	);
};

export default AdminPanel;
