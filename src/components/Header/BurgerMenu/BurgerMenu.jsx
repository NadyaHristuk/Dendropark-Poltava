import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useMedia } from '../../../hooks';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isMobile } = useMedia();

  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleMenu}>☰</button>
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
          {isMobile && (
            <li>{<a href="tel:+380502894133">+38 (050) 289-41-33</a>}</li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default BurgerMenu;
