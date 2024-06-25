import { NavLink } from 'react-router-dom';
import scss from './MenuList.module.scss';

const MenuList = ({ handleClick }) => {
  return (
    <ul className={scss.list}>
      <li>
        <NavLink onClick={handleClick} className={scss.link} to="/" end>
          Участь у Спільноті доброчесності
        </NavLink>
      </li>
      <li>
        <NavLink onClick={handleClick} className={scss.link} to="/">
          Як працює спільнота
        </NavLink>
      </li>
      <li>
        <NavLink onClick={handleClick} className={scss.link} to="/">
          Хто вже учасник/-ця спільноти
        </NavLink>
      </li>
      <li>
        <NavLink onClick={handleClick} className={scss.link} to="/">
          Рейтинг
        </NavLink>
      </li>
      <li>
        <NavLink onClick={handleClick} className={scss.link} to="/">
          Відгуки
        </NavLink>
      </li>
      <li>
        <NavLink onClick={handleClick} className={scss.link} to="/">
          Відповіді на питання
        </NavLink>
      </li>
    </ul>
  );
};

export default MenuList;
