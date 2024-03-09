import { AttentionVisitors } from '../components/AttentionVisitors/AttentionVisitors';
// import s from './Home.module.scss';
import Calendar from '../components/Calendar/Calendar';
import ChroniclesList from '../components/Chronicles/ChroniclesList/ChroniclesList';
import Container from '../components/Container/Container';
import Hero from '../components/Hero/Hero';

const HomePage = () => {
  return (
    // <div className={s.container}>
    <Container>
      <Hero />
      <AttentionVisitors></AttentionVisitors>
      <Calendar />
      <ChroniclesList />
    </Container>
    // </div>
  );
};

export default HomePage;
