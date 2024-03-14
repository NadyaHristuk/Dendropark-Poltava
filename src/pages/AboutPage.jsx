import { ParkDescription } from '../components/AboutPark/ParkDescription/ParkDescription';
import { ParkLocations } from '../components/AboutPark/ParkLocations/ParkLocations';
import 'overlayscrollbars/styles/overlayscrollbars.css';

const AboutPage = () => {
	return (
		<>
			<ParkDescription />
			<ParkLocations />
		</>
	);
};

export default AboutPage;
