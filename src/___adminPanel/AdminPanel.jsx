import { Route, Routes } from 'react-router';
import CommonLayout from './CommonLayout/CommonLayout';
import Login from './pages/login/Login';

const AdminPanel = () => {
	return (
		<Routes>
			<Route path="/" element={<CommonLayout />}>
				<Route path="product" element={<div>Product</div>} />
				<Route path="trials" element={<div>Trials</div>} />
				<Route path="events" element={<div>Events</div>} />
				<Route path="documents" element={<div>Documents</div>} />
			</Route>
			<Route path="/login" element={<Login />} />
		</Routes>
	);
};

export default AdminPanel;
