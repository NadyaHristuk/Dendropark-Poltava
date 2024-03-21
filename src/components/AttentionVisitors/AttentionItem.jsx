// import { Link } from 'react-router-dom';
import { HashLink, HashLink as Link } from 'react-router-hash-link';
import icons from '../../assets/icons/sprite.svg';
import css from './AttentionVisitors.module.scss';

export const AttentionItem = ({
  title,
  description,
  moreInfo,
  link,
  iconId,
}) => {
  return (
    <li className={css.item}>
      <svg width="44" height="44" className={css.itemIcon}>
        <use href={`${icons}${iconId}`}></use>
      </svg>
      <p className={css.point}>{title}</p>
      <p className={css.description}>{description}</p>
      <HashLink smooth to={link} className={css.moreInfo}>
        {moreInfo}
        <svg width="25" height="25" className={css.iconArrow}>
          <use href={`${icons}#icon-arrow-up`}></use>
        </svg>
      </HashLink>
    </li>
  );
};
