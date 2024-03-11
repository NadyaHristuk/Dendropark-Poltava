import styles from './TrialSectionCard.module.scss';
import { TrialPicture } from '../TrialPicture/TrialPicture';
import icons from '../../../../assets/icons/sprite.svg';
import { useTranslation } from 'react-i18next';
import { CardMap } from './CardMap/CardMap';
import { useMedia } from '../../../../hooks/useMedia';

export const CardContent = ({ card, handleClick, isMapOpen }) => {
  const { t } = useTranslation();
  const { isMobile } = useMedia();
  return (
    <div className={styles.father}>
      <div
        className={
          !isMapOpen
            ? ` ${styles.mapContainerInContent} `
            : ` ${styles.mapContainerInContentOpen} `
        }
      >
        <CardMap
          mapMob={card.trialMap.mobile}
          mapTab={card.trialMap.tablet}
          mapDesc={card.trialMap.desctop}
          handleClick={handleClick}
          isMobileMapOpen={isMapOpen}
        />
      </div>

      <div
        className={
          !isMapOpen
            ? `${styles.listItemWrapperClose}`
            : `${styles.listItemWrapper}`
        }
      >
        <span className={styles.trialLength}>{card.distance}</span>
        <div
          className={
            isMapOpen && isMobile
              ? styles.imgContainerMobile
              : styles.imgContainer
          }
        >
          <TrialPicture
            mob={card.image.mobile}
            mob_x2={card.image.mobile_x2}
            tab={card.image.tablet}
            tab_x2={card.image.tablet_x2}
            imgAlt={card.imgAlt}
          />
        </div>
        <div className={styles.textWrapper}>
          <span className={styles.trialLengthText}>{card.distance}</span>
          <div>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardText}>{card.text}</p>
            <button
              onClick={handleClick}
              className={styles.button}
              type="button"
            >
              {t('vzaemodia.cardButtonText')}
              <svg
                className={styles.iconArrow}
                width="20"
                height="20"
                aria-label="arrow-forward"
              >
                <use href={`${icons}#icon-arrow-up`}></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
