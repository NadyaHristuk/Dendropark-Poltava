import Container from '../Container/Container';
import s from './Calendar.module.scss';
import CalendarIframe from './CalendarIframe';

const Calendar = () => {
  return (
    <section className={s.section}>
      <Container>
        <h2 className={s.title}>Календар подій</h2>
        <p className={s.describe}>
          Дізнайтеся про заплановані заходи, а також часові обмеження щодо
          використання парку.
        </p>
        <CalendarIframe />
      </Container>
    </section>
  );
};

export default Calendar;
