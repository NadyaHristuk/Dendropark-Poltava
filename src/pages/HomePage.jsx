import Calendar from '../components/Calendar/Calendar';
import ChroniclesList from '../components/Chronicles/ChroniclesList/ChroniclesList';
import Container from '../components/Container/Container';

const HomePage = () => {
  return (
    <Container>
      <Calendar />
      <ChroniclesList />
    </Container>
  );
};

export default HomePage;
