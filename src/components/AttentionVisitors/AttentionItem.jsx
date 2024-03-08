import React from 'react';
import { Link } from 'react-router-dom';
import css from './AttentionVisitors.module.scss';

export const AttentionItem = ({ title, description, moreInfo, link }) => {
  return (
    <li className={css.item}>
      <div className={css.iconBox}></div>
      <p className={css.point}>{title}</p>
      <p className={css.description}>{description}</p>
      <Link to={link} className={css.moreInfo}>
        {moreInfo}
        {/* <svg className={css.iconArrow}>
          <use className={css.use} xlinkHref={'#icon-arrow-up'}></use>
        </svg> */}
      </Link>
    </li>
  );
};
