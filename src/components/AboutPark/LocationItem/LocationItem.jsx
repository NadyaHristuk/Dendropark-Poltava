import { Picture } from '../Picture/Picture';
import css from './LocationItem.module.scss';

export const LocationItem = ({ image, title, description }) => {
  return (
    <li className={css.locationItem}>
      <h3>{title}</h3>
      <p className={css.locationItemDescr}>{description}</p>
      <a className={css.locationItemButton} href="">
        Подивитися на карті
      </a>
    </li>
  );
};
