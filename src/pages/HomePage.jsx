import { AttentionVisitors } from '../components/AttentionVisitors/AttentionVisitors';
import Calendar from '../components/Calendar/Calendar';
import ChroniclesList from '../components/Chronicles/ChroniclesList/ChroniclesList';
import Container from '../components/Container/Container';
import { HelpPark } from '../components/HelpPark/HelpPark/HelpPark';
import Hero from '../components/Hero/Hero';
import { Visual } from '../components/HelpPark/Visual/Visual';

const HomePage = () => {
  return (
    <>
      <Container>
        <Hero />
      </Container>

      <Container>
        <AttentionVisitors />
      </Container>

      <Container>
        <HelpPark />
      </Container>

      <Visual />

      <Container>
        <Calendar />
      </Container>

      <Container>
        <ChroniclesList />
      </Container>
    </>
  );
};

export default HomePage;
