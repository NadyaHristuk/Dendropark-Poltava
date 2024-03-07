import { useTranslation } from 'react-i18next';
import styles from './OrganizatorsListItem.module.scss';

export const OrganizatorsListItem = ({ rule }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.listItem}>
      <div className={styles.iconContainer}>
        <svg
          className={styles.icon}
          width="44"
          height="44"
          aria-label="arrow-forward"
        >
          <use href=""></use>
        </svg>
      </div>

      <div className={styles.textContainer}>
        {' '}
        <h3>{t(`vzaemodia.${rule.title}`)}</h3>
        <p>{t(`vzaemodia.${rule.text}`)}</p>
      </div>
    </div>
  );
};
