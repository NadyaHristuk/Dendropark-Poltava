import React from 'react';
import icons from '../../assets/icons/sprite.svg';
import css from './HelpPark.module.scss';

export const HelpParkItem = ({ iconId, title, subtitle }) => {
  return (
    <li className={css.item}>
      <div className={css.iconBox}>
        <svg className={css.icon} width="20" height="20">
          <use href={`${icons}${iconId}`}></use>
        </svg>
      </div>
      <div>
        <p className={css.itemTitle}>{title}</p>
        <p className={css.itemSubtitle}>{subtitle}</p>
      </div>
    </li>
  );
};
