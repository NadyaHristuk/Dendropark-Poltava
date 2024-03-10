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
        <use href="/src/assets/icons/sprite.svg#icon-attention1"></use>
      </svg>
      <h3 className={styles.title}>
        {t(`vzaemodia.${rule.title}`)} {index + 1}
      </h3>
      <p className={styles.text}>{t(`vzaemodia.${rule.text}`)}</p>
    </div>
  );
};
