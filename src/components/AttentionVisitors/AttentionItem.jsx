import React from 'react';
import { Link } from 'react-router-dom';
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
      <Link to={link} className={css.moreInfo}>
        {moreInfo}
        <svg width="25" height="25" className={css.iconArrow}>
          <use href={`${icons}#icon-arrow-up`}></use>
        </svg>
      </Link>
    </li>
  );
};
