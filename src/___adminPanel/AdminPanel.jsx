import { Route, Routes } from 'react-router';
import CommonLayout from './CommonLayout/CommonLayout';
import Login from './pages/login/Login';
import DocumentForm from './components/forms/DocumentsForm';
import HelpParkForm from './components/forms/HelpParkForm';

const AdminPanel = () => {
	return (
		<Routes>
			<Route path="/" element={<CommonLayout />}>
				<Route path="product" element={<div>Product</div>} />
				<Route path="trials" element={<div>Trials</div>} />
				<Route path="events" element={<div>Events</div>} />
				<Route path="documents" element={<DocumentForm />} />
				<Route path="donation" element={<HelpParkForm />} />
				<Route path="services" element={<div>Services</div>} />
			</Route>
			<Route path="/login" element={<Login />} />
		</Routes>
	);
};

export default AdminPanel;
