import s from './Calendar.module.scss';

const CalendarIframe = () => {
  return (
    <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Europe%2FKiev&bgcolor=%23ffffff&src=ZGVrb3JrdWx0dXIxQGdtYWlsLmNvbQ&src=OTIzYzY4NDQzYTdiMDc3ZjJlMzM2OWZlOTZmZTA3M2VlMWUzMmYyZjZlM2U4MTVkOGI0ZmI5ODdlNWQ5YjBkZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%23A79B8E"  className={s.iframe}></iframe>
  );
};

export default CalendarIframe;
