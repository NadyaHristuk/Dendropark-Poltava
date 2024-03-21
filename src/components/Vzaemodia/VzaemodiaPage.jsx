import { TitleSection } from "./TitleSection/TitleSection";
import { TrialSection } from "./TrialSection/TrialSection";
import { OrganizatorsSection } from "./OrganizatorsSection/OrganizatorsSection";
import { RulesSection } from "./RulesSection/RulesSection";
import CalendarIframe from "../Calendar/CalendarIframe";
import { SectionWrapper } from "./SectionWrapper/SectionWrapper";
import Map from "../Map/Map";
import { ScrollToTop } from "../ScrollToTop/ScrollToTop";

const VzaemodiaPage = () => {
  return (
    <>
      <TitleSection />
      <SectionWrapper>
        <Map />
      </SectionWrapper>
      <TrialSection />
      <OrganizatorsSection />
      <SectionWrapper>
        <CalendarIframe />
      </SectionWrapper>
      <RulesSection />
      <ScrollToTop />
    </>
  );
};

export default VzaemodiaPage;
