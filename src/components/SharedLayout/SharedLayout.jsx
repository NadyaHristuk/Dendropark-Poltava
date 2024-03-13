import { useOutlet } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';

export const SharedLayout = () => {
	const outlet = useOutlet();

	return (
		<>
			<Header />
			<main>
				{outlet} {/* Тут рендериться компонент для активного маршруту */}
			</main>
			<Footer />
		</>
	);
};

export default SharedLayout;
