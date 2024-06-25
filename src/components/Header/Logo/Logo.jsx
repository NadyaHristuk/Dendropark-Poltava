import { Link } from 'react-router-dom';
import scss from './Logo.module.scss';
import sprite from '../../../assets/icons/sprite.svg';

const Logo = () => {
  return (
    <>
      <Link to="https://study.nazk.gov.ua/" className={scss.link} target="_blank">
        <svg className={scss.office_of_integrity_nazk_logo_icon}>
          <use href={`${sprite}#office_of_integrity_nazk_logo`}></use>
        </svg>
      </Link>
      <Link to="/" className={scss.link}>
        <svg className={scss.open_school_logo_icon}>
          <use href={`${sprite}#open_school_logo`}></use>
        </svg>
      </Link>
    </>
  );
};

export default Logo;
