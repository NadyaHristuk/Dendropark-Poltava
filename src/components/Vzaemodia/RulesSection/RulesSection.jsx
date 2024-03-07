import { SectionWrapper } from '../SectionWrapper/SectionWrapper';
import { useTranslation } from 'react-i18next';
import { AvailableList } from './AvailableList/AvailableList';
import { RulesSectionList } from './RulesSectionList/RulesSectionList';
import styles from './RulesSection.module.scss';
import { rules } from './RulesSectionList/rules';

export const RulesSection = () => {
  const { t } = useTranslation();
  return (
    <SectionWrapper>
      <div className={styles.rulesContainer}>
        <div className={styles.rulesTextContainer}>
          <h2 className={styles.title}>{t('vzaemodia.rulesTitle')}</h2>
          <p className={styles.text}>{t('vzaemodia.rulesTextOne')}</p>
          <p className={styles.text}>{t('vzaemodia.rulesTextTwo')}</p>
          <AvailableList />
        </div>
        <RulesSectionList data={rules} />
        <p className={styles.goodLuckText}>{t('vzaemodia.goodLuckText')}</p>
      </div>
    </SectionWrapper>
  );
};
