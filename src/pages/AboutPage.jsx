import { ParkDescription } from '../components/AboutPark/ParkDescription/ParkDescription';
import { ParkLocations } from '../components/AboutPark/ParkLocations/ParkLocations';
import 'overlayscrollbars/styles/overlayscrollbars.css';
import { ScrollToTop } from '../components/ScrollToTop/ScrollToTop';

const AboutPage = () => {
	return (
		<>
			<ParkDescription />
			<ParkLocations />
			<ScrollToTop />
		</>
	);
};

export default AboutPage;
