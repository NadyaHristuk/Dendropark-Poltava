import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import scss from './NotFound.module.scss';
const NotFound = () => {
  return (
    <section className={scss.section}>
      <Container>
        <h2 className={scss.title}>404</h2>
        <p className={scss.text}>
          Жаль, але, схоже, сторінку, яку ви шукаєте, не знайдено. Будь ласка,
          поверніться на домашню сторінку, натиснувши посилання нижче.
        </p>
        <Link className={scss.link} to="/">
          Повернутись на головну
        </Link>
      </Container>
    </section>
  );
};

export default NotFound;
