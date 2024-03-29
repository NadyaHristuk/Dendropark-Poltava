import { SectionWrapper } from '../SectionWrapper/SectionWrapper';
import { organizationRules } from './OrganizatorsList/organizationRules';
import { OrganizatorsList } from './OrganizatorsList/OrganizatorsList';
import { useTranslation } from 'react-i18next';
import styles from './OrgSection.module.scss';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export const OrganizatorsSection = ({trialsData}) => {
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    if (trialsData && location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [trialsData, location.hash]);

  return (
    <SectionWrapper>
      <div className={styles.organizatorsWrapper} id="organizators-section">
        <div className={styles.organizationTextContainer}>
          <h2 className={styles.title}>{t('vzaemodia.organizationSectionTitle')}</h2>
          <p className={styles.text}>{t('vzaemodia.organizationSectionTextOne')}</p>
          <p className={styles.organizationTextTwo}>{t('vzaemodia.organizationSectionTextTwo')}</p>
        </div>
        <OrganizatorsList organizationRules={organizationRules} />
      </div>
    </SectionWrapper>
  );
};
