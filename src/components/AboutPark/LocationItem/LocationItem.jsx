import { Picture } from '../Picture/Picture';
import css from './LocationItem.module.scss';
import { arabicToRoman } from './romanNumerals';
import { icons } from '../../../assets';
import { useState } from 'react';
import { useMedia } from '../../../hooks/useMedia';

export const LocationItem = ({ card, index }) => {
  const [isMapOpen, setIsMapOpen] = useState(false);
  const { isTablet, isDesktop, isMobile } = useMedia();

  const toggleMap = () => {
    setIsMapOpen((prevState) => !prevState);
  };

  return (
    <li className={css.locationItem} id={card.locationID}>
      {isMobile ? (
        <>
          <div className={css.numberSign}>{arabicToRoman(card.number)}</div>
          <div className={css.sliderContainer}>
            <div
              className={`${css.pictureContainer} ${
                isMapOpen && css.pictureContainerOpen
              }`}
            >
              <Picture pictures={card.pictures} />
            </div>

            <div
              className={`${css.pictureContainer} ${css.mapPictureContainer} ${
                isMapOpen && css.pictureContainerOpen
              }`}
            >
              <button onClick={toggleMap}>
                <svg className={css.crossIcon}>
                  <use href={`${icons}#icon-mi_close`}></use>
                </svg>
              </button>
              <Picture pictures={card.pictureMap} />
            </div>
          </div>
          <h3 className={css.cardTitle}>
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
        </>
      ) : (
        <>
          <div className={css.textCard}>
            <div className={css.numberSign}>{arabicToRoman(card.number)}</div>
            <h3 className={css.cardTitle}>
              {arabicToRoman(card.number)}. {card.title}
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
          </div>
          <div className={css.picturesBox}>
            <div className={css.sliderContainer}>
              <div
                className={`${css.pictureContainer} ${
                  isMapOpen && css.pictureContainerOpen
                }`}
              >
                <Picture pictures={card.pictures} />
              </div>

              {
                <div
                  className={`${css.pictureContainer} ${
                    css.mapPictureContainer
                  } ${isMapOpen && css.pictureContainerOpen}`}
                >
                  <button onClick={toggleMap}>
                    <svg className={css.crossIcon}>
                      <use href={`${icons}#icon-mi_close`}></use>
                    </svg>
                  </button>

                  <Picture pictures={card.pictureMap} />
                </div>
              }
            </div>
          </div>
        </>
      )}
    </li>
  );
};
