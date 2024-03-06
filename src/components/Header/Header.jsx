import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/vzaemodia">Vzaemodia</NavLink></li>
          <li><NavLink to="/chronicles">Chronicles</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};
