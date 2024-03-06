import Container from '../Container/Container';
import s from './Calendar.module.scss';

const Calendar = () => {
  return (
    <section className={s.section}>
      <Container>
        <h2 className={s.title}>Календар подій</h2>
        <p className={s.describe}>
          Дізнайтеся про заплановані заходи, а також часові обмеження щодо
          використання парку.
        </p>
        <iframe
          src="https://calendar.google.com/calendar/embed?src=748c4564b5da26f60fe2204349efdc31902bc13e0f526fd3c890af8cbcabed9c%40group.calendar.google.com&ctz=Europe%2FKiev"
          className={s.iframe}
        ></iframe>
      </Container>
    </section>
  );
};

export default Calendar;
