import { TitleSection } from './TitleSection/TitleSection';
import { TrialSection } from './TrialSection/TrialSection';
import { OrganizatorsSection } from './OrganizatorsSection/OrganizatorsSection';
import { RulesSection } from './RulesSection/RulesSection';
import CalendarIframe from '../Calendar/CalendarIframe';
import { SectionWrapper } from './SectionWrapper/SectionWrapper';

const VzaemodiaPage = () => {
  return (
    <>
      <TitleSection />
      <TrialSection />
      <OrganizatorsSection />
      <SectionWrapper>
        <CalendarIframe />
      </SectionWrapper>
      <RulesSection />
    </>
  );
};

export default VzaemodiaPage;
