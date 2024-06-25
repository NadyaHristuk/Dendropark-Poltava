import { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useMedia } from '../../../hooks';
import MenuList from './MenuList';
import scss from './Menu.module.scss';
import './transition.scss';
import sprite from '../../../assets/icons/sprite.svg';

const Menu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const menuRef = useRef(null);
  const nodeRef = useRef(null);
  const { isMobile, isTablet } = useMedia();

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const handleClickOutside = event => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpenMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  }, [location.pathname]);

  return (
    <div className={scss.menu} ref={menuRef}>
      {(isMobile || isTablet) && (
        <button onClick={toggleMenu}>
          <svg className={scss.burgerItem}>
            <use href={`${sprite}#burger_menu`}></use>
          </svg>
        </button>
      )}
      <CSSTransition in={isOpenMenu} classNames="my-node" unmountOnExit timeout={300} nodeRef={nodeRef}>
        <div className={scss.menuList} ref={nodeRef}>
          <MenuList handleClick={() => setIsOpenMenu(false)} />
        </div>
      </CSSTransition>
    </div>
  );
};

export default Menu;
