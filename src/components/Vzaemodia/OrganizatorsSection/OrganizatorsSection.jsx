import { SectionWrapper } from '../SectionWrapper/SectionWrapper';
import { organizationRules } from './OrganizatorsList/organizationRules';
import { OrganizatorsList } from './OrganizatorsList/OrganizatorsList';
import { useTranslation } from 'react-i18next';
import styles from './OrgSection.module.scss';

export const OrganizatorsSection = () => {
  const { t } = useTranslation();
  return (
    <SectionWrapper>
      <div id="organizators-section" className={styles.organizatorsWrapper}>
        <div className={styles.organizationTextContainer}>
          <h2 className={styles.title}>
            {t('vzaemodia.organizationSectionTitle')}
          </h2>
          <p className={styles.text}>
            {t('vzaemodia.organizationSectionTextOne')}
          </p>
          <p className={styles.organizationTextTwo}>
            {t('vzaemodia.organizationSectionTextTwo')}
          </p>
        </div>
        <OrganizatorsList organizationRules={organizationRules} />
      </div>
    </SectionWrapper>
  );
};
