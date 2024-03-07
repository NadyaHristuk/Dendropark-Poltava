import { AttentionVisitors } from '../components/AttentionVisitors/AttentionVisitors';

import s from './Home.module.scss';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <div className={s.container}>
      <AttentionVisitors></AttentionVisitors>
    </div>
  );
};

export default HomePage;
