import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { logo1x } from '../../assets';
import { logo2x } from '../../assets';

// import { logo1x, logo2x } from '../../assets';

const LanguageSelector = ({ value, onChange }) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="ua">UA</option>
      <option value="en">EN</option>
    </select>
  );
};

export const Header = () => {
  const [language, setLanguage] = useState('ua'); // Початкова мова - українська
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };
  return (
    <header>
      <div>
        <Link to="/">
          <picture>
            <source srcSet="../../assets/images/header/logo@1x.png 1x, ../../assets/images/header/logo@2x.png 1 2x" />
            <img
              src="../../assets/images/header/"
              alt="Portrait of the client"
            />
          </picture>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end>
              {t('header.navigation.main')}
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">{t('header.navigation.about')}</NavLink>
          </li>
          <li>
            <NavLink to="/vzaemodia">
              {t('header.navigation.interaction')}
            </NavLink>
          </li>
          <li>
            <NavLink to="/chronicles">
              {t('header.navigation.materials')}
            </NavLink>
          </li>
          <li>
            <NavLink to="/service">{t('header.navigation.services')}</NavLink>
          </li>
          <li>
            <NavLink to="/contact">{t('header.navigation.contacts')}</NavLink>
          </li>
        </ul>
        <LanguageSelector value={language} onChange={changeLanguage} />
      </nav>
    </header>
  );
};
