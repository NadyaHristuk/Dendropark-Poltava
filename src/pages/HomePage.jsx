<<<<<<< HEAD
import { AttentionVisitors } from '../components/AttentionVisitors/AttentionVisitors';

import s from './Home.module.scss';
import { useTranslation } from 'react-i18next';
=======
import Calendar from '../components/Calendar/Calendar';
import ChroniclesList from '../components/Chronicles/ChroniclesList/ChroniclesList';
import Container from '../components/Container/Container';
>>>>>>> ab6033451bc3590e0017a48a1e2d6cf734b65d6d

const HomePage = () => {
  return (
<<<<<<< HEAD
    <div className={s.container}>
      <AttentionVisitors></AttentionVisitors>
    </div>
=======
    <Container>
      <Calendar />
      <ChroniclesList />
    </Container>
>>>>>>> ab6033451bc3590e0017a48a1e2d6cf734b65d6d
  );
};

export default HomePage;
