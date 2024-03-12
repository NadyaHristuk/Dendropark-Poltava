import { Route, Routes } from 'react-router';
import CommonLayout from './CommonLayout/CommonLayout';
import Login from './pages/login/login';
import Documents from './pages/Documents/Documents';
import Trials from './pages/Trials/Trials';
import Products from './pages/Products/Products';
import Locations from './pages/Locations/Locations';
import Services from './pages/Services/Services';
import HelpPark from './pages/HelpPark/HelpPark';

const AdminPanel = () => {
	return (
		<Routes>
			<Route path="/" element={<CommonLayout />}>
				<Route path="product" element={<Products />} />
				<Route path="trials" element={<Trials />} />
				<Route path="events" element={<Locations />} />
				{/* замість локації мають бути події */}
				<Route path="documents" element={<Documents />} />
				<Route path="donation" element={<HelpPark />} />
				<Route path="services" element={<Services />} />
			</Route>
			<Route path="/login" element={<Login />} />
		</Routes>
	);
};

export default AdminPanel;
