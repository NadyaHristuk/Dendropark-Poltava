import { Picture } from './Picture/Picture';
import { useTranslation } from 'react-i18next';
import titleSectionStyles from './TitleSection.module.scss';
import { SectionWrapper } from '../SectionWrapper/SectionWrapper';

export const TitleSection = () => {
  const { t } = useTranslation();
  return (
    <SectionWrapper>
      <div className={titleSectionStyles.titleSectionContainer}>
        <div className={titleSectionStyles.titleSectionTextContainer}>
          <h1 className={titleSectionStyles.title}>{t('vzaemodia.title')}</h1>
          <p className={titleSectionStyles.text}>{t('vzaemodia.heroInfo')}</p>
        </div>
        <Picture />
      </div>
    </SectionWrapper>
  );
};
