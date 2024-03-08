import { useTranslation } from 'react-i18next';

import Container from '../Container/Container';
import CalendarIframe from './CalendarIframe';
import s from './Calendar.module.scss';

const Calendar = () => {
  const { t } = useTranslation();

  return (
    <section className={s.section}>
      <Container>
        <h2 className={s.title}>{t('calendar.title')}</h2>
        <p className={s.description}>{t('calendar.description')}</p>
        <CalendarIframe />
      </Container>
    </section>
  );
};

export default Calendar;
