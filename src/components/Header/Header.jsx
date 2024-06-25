import { useMedia } from '../../hooks/useMedia';
import { useLocation } from 'react-router-dom';
import Logo from './Logo';
import MenuList from './Menu/MenuList';
import Menu from './Menu';
import scss from './Header.module.scss';

const Header = () => {
  const { isDesktop, isTablet, isMobile } = useMedia();
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      {!path.includes('/admin') ? (
        <header className={scss.header}>
          <div className={scss.logoWrapper}>
            <Logo />
          </div>
          {isDesktop && <MenuList />}
          {(isTablet || isMobile) && <Menu />}
        </header>
      ) : null}
    </>
  );
};

export default Header;
