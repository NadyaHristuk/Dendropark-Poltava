import { SectionWrapper } from '../SectionWrapper/SectionWrapper';
import { useTranslation } from 'react-i18next';
import { AvailableList } from './AvailableList/AvailableList';
import { RulesSectionList } from './RulesSectionList/RulesSectionList';
import data from '../jsons/rules.json';

export const RulesSection = () => {
  const { t } = useTranslation();
  return (
    <SectionWrapper>
      <div>
        <h2>{t('vzaemodia.rulesTitle')}</h2>
        <p>{t('vzaemodia.rulesTextOne')}</p>
        <p>{t('vzaemodia.rulesTextTwo')}</p>
        <AvailableList />
      </div>
      <RulesSectionList data={data} />
      <p>{t('vzaemodia.goodLuckText')}</p>
    </SectionWrapper>
  );
};
