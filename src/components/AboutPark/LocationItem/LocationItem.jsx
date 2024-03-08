import { Picture } from '../Picture/Picture';
import css from './LocationItem.module.scss';
import { arabicToRoman } from './romanNumerals';
import { icons } from '../../../assets';
import { useState } from 'react';

export const LocationItem = ({ card, index }) => {
  const [isMapOpen, setIsMapOpen] = useState(false);

  const toggleMap = () => {
    setIsMapOpen((prevState) => !prevState);
  };

  return (
    <li className={css.locationItem}>
      <div className={css.numberSign}>{arabicToRoman(index + 1)}</div>
      <div className={css.sliderContainer}>
        <div
          className={`${css.pictureContainer} ${
            isMapOpen && css.pictureContainerOpen
          }`}
        >
          <Picture pictures={isMapOpen ? card.pictures : card.pictureMap} />
        </div>
      </div>
      <h3>
        {arabicToRoman(index + 1)}. {card.title}
      </h3>
      <p className={css.locationItemDescr}>{card.description}</p>
      <button
        onClick={toggleMap}
        className={css.locationItemButton}
        type="button"
      >
        Подивитися на карті
        <svg className={css.vectorIcon}>
          <use href={`${icons}#icon-Vector`}></use>
        </svg>
      </button>
    </li>
  );
};
