import { useTranslation } from 'react-i18next';

export const AvailableList = () => {
  const { t } = useTranslation();
  return (
    <ul>
      <li>{t('vzaemodia.rulesListOne')}</li>
      <li>{t('vzaemodia.rulesListTwo')}</li>
      <li>{t('vzaemodia.rulesListThree')}</li>
      <li>{t('vzaemodia.rulesListFour')}</li>
    </ul>
  );
};
