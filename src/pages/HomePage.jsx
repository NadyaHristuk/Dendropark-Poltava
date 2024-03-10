import { AttentionVisitors } from '../components/AttentionVisitors/AttentionVisitors';
// import s from './Home.module.scss';
import Calendar from '../components/Calendar/Calendar';
import ChroniclesList from '../components/Chronicles/ChroniclesList/ChroniclesList';
import Container from '../components/Container/Container';
import { HelpPark } from '../components/HelpPark/HelpPark/HelpPark';

const HomePage = () => {
  return (
    // <div className={s.container}>
    <Container>
      <AttentionVisitors />
      <HelpPark />
      <Calendar />
      <ChroniclesList />
    </Container>
    // </div>
  );
};

export default HomePage;
