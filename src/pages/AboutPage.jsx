import { ParkDescription } from '../components/AboutPark/ParkDescription/ParkDescription';
import { ParkLocations } from '../components/AboutPark/ParkLocations/ParkLocations';
import Container from '../components/Container/Container';

const AboutPage = () => {
  return (
    <>
      <h1>Про парк</h1>
      <ParkDescription />
      <Container>
        <ParkLocations />
      </Container>
    </>
  );
};

export default AboutPage;
