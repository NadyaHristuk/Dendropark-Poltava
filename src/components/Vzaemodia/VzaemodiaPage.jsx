import { TitleSection } from "./TitleSection/TitleSection";
import { TrialSection } from "./TrialSection/TrialSection";
import { OrganizatorsSection } from "./OrganizatorsSection/OrganizatorsSection";
import { RulesSection } from "./RulesSection/RulesSection";
import CalendarIframe from "../Calendar/CalendarIframe";
import { SectionWrapper } from "./SectionWrapper/SectionWrapper";
import Map from "../Map/Map";
import { ScrollToTop } from "../ScrollToTop/ScrollToTop";
import { useEffect, useState } from "react";
import { fetchTrials } from "../../adminPanel/serviceApiTrials";

const VzaemodiaPage = () => {
  const [trialsData, setTrialsData] = useState([]);

  useEffect(() => {
    const fetchTrialsData = async () => {
      try {
        const trials = await fetchTrials();
        setTrialsData(trials);
      } catch (error) {
        console.error("Error fetching trials data:", error);
      }
    };
    fetchTrialsData();
  }, []);

  return (
    <>
      <TitleSection />
      <SectionWrapper>
        <Map />
      </SectionWrapper>
      <TrialSection trialsData={trialsData} />
      <OrganizatorsSection trialsData={trialsData} />
      <SectionWrapper>
        <CalendarIframe />
      </SectionWrapper>
      <RulesSection />
      <ScrollToTop />
    </>
  );
};

export default VzaemodiaPage;
