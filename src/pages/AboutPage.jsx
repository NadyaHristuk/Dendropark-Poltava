import { ParkDescription } from '../components/AboutPark/ParkDescription/ParkDescription';
import { ParkLocations } from '../components/AboutPark/ParkLocations/ParkLocations';

const AboutPage = () => {
  return (
    <>
      <h1>Про парк</h1>
      <ParkDescription />
      <ParkLocations />
    </>
  );
};

export default AboutPage;
