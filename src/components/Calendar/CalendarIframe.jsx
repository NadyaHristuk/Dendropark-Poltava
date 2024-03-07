import s from './Calendar.module.scss';

const CalendarIframe = () => {
  return (
    <iframe
      src="https://calendar.google.com/calendar/embed?src=748c4564b5da26f60fe2204349efdc31902bc13e0f526fd3c890af8cbcabed9c%40group.calendar.google.com&ctz=Europe%2FKiev"
      className={s.iframe}
    ></iframe>
  );
};

export default CalendarIframe;
