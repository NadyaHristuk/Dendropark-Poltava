import { useTranslation } from 'react-i18next';
import styles from './OrganizatorsListItem.module.scss';
import icons from '../../../../assets/icons/sprite.svg';

export const OrganizatorsListItem = ({ rule }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.listItem}>
      <div className={styles.iconContainer}>
        <svg
          className={styles.icon}
          width="32"
          height="32"
          aria-label="arrow-forward"
        >
          <use href={`${icons}#icon-attention`}></use>
        </svg>
      </div>

      <div className={styles.textContainer}>
        {' '}
        <h3 className={styles.title}>{t(`vzaemodia.${rule.title}`)}</h3>
        <p className={styles.text}>{t(`vzaemodia.${rule.text}`)}</p>
      </div>
    </div>
  );
};
