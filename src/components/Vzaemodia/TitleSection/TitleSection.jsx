import { Picture } from './Picture/Picture';
import { useTranslation } from 'react-i18next';
import titleSectionStyles from './TitleSection.module.scss';

export const TitleSection = () => {
  const { t } = useTranslation();
  return (
    <section className={titleSectionStyles.section} id="vzaemodia-section">
      <div className={titleSectionStyles.titleSectionContainer}>
        <div id="title-vzaemodia" className={titleSectionStyles.titleSectionTextContainer}>
          <h1 className={titleSectionStyles.title}>{t('vzaemodia.title')}</h1>
          <p className={titleSectionStyles.text}>{t('vzaemodia.heroInfo')}</p>
        </div>
      </div>
      <Picture />
    </section>
  );
};
