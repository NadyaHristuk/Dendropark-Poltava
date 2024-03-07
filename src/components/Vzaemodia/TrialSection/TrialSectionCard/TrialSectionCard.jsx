import { TrialPicture } from '../TrialPicture/TrialPicture';
import styles from './TrialSectionCard.module.scss';
import { useTranslation } from 'react-i18next';

export const TrialSectionCard = ({ card }) => {
  const { t } = useTranslation();
  return (
    <li className={styles.listItem}>
      <div className={styles.listItemWrapper}>
        <span className={styles.trialLength}>{card.distance}</span>
        <div className={styles.imgContainer}>
          <TrialPicture
            mob={card.imageMob}
            mob_x2={card.imageMobHigh}
            tab={card.imageTab}
            tab_x2={card.imageTabHigh}
            imgAlt={card.imgAlt}
          />
        </div>
        <div className={styles.textWrapper}>
          <span className={styles.trialLengthText}>{card.distance}</span>
          <div>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardText}>{card.text}</p>
            <button className={styles.button} type="button">
              {t('vzaemodia.cardButtonText')}
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};
