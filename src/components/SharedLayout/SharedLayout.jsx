import { useOutlet } from 'react-router-dom';

// import Header from '../Header';
import Footer from '../Footer';
import Header1 from "../Header1"
// import Header from "../Header"

export const SharedLayout = () => {
	const outlet = useOutlet();

	return (
		<>
			<Header1 />
			{/* <Header /> */}
			<main>
				{outlet} {/* Тут рендериться компонент для активного маршруту */}
			</main>
			<Footer />
		</>
	);
};

export default SharedLayout;
