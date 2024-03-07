import { useTranslation } from 'react-i18next';
import styles from './RulesSectionListItem.module.scss';

export const RulesSectionListItem = ({ rule, index }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.listItem}>
      <svg
        className={styles.icon}
        width="44"
        height="44"
        aria-label="arrow-forward"
      >
        <use href=""></use>
      </svg>
      <h3>
        {t(`vzaemodia.${rule.title}`)} {index + 1}
      </h3>
      <p>{t(`vzaemodia.${rule.text}`)}</p>
    </div>
  );
};
