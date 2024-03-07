import { NavLink } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer>
      <div>© {new Date().getFullYear()} My Website</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/privacy-policy">Privacy Policy</NavLink>
          </li>
          <li>
            <NavLink to="/terms-of-service">Terms of Service</NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
