import { SectionWrapper } from '../SectionWrapper/SectionWrapper';
import { TrialSectionList } from './TrialSectionList/TrialSectionList';
import { useTranslation } from 'react-i18next';
import styles from './TrialSection.module.scss';

export const TrialSection = () => {
  const { t } = useTranslation();
  return (
    <SectionWrapper>
      <h2 id="trials-section" className={styles.hidden}>
        {t('vzaemodia.trialTitle')}
      </h2>
      <TrialSectionList />
    </SectionWrapper>
  );
};
