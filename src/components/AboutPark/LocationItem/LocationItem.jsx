import { Picture } from '../Picture/Picture';
import css from './LocationItem.module.scss';
import { arabicToRoman } from './romanNumerals';
import { icons } from '../../../assets';

export const LocationItem = ({ image, title, description, index }) => {
  return (
    <li className={css.locationItem}>
      <div className={css.numberSign}>{arabicToRoman(index + 1)}</div>
      <h3>
        {arabicToRoman(index + 1)}. {title}
      </h3>
      <p className={css.locationItemDescr}>{description}</p>
      <button className={css.locationItemButton} type="button">
        Подивитися на карті
        <svg className={css.vectorIcon}>
          <use href={`${icons}#icon-Vector`}></use>
        </svg>
      </button>
    </li>
  );
};
