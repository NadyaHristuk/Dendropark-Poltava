import { useTranslation } from 'react-i18next';
import styles from './AvailableList.module.scss';

export const AvailableList = () => {
  const { t } = useTranslation();
  return (
    <ul className={styles.list}>
      <li className={styles.listItem}>{t('vzaemodia.rulesListOne')}</li>
      <li className={styles.listItem}>{t('vzaemodia.rulesListTwo')}</li>
      <li className={styles.listItem}>{t('vzaemodia.rulesListThree')}</li>
      <li className={styles.listItem}>{t('vzaemodia.rulesListFour')}</li>
    </ul>
  );
};
