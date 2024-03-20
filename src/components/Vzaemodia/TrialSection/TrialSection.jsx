import { SectionWrapper } from "../SectionWrapper/SectionWrapper";
import { TrialSectionList } from "./TrialSectionList/TrialSectionList";
import { fetchTrials } from "../../../adminPanel/serviceApiTrials.js";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import styles from "./TrialSection.module.scss";

export const TrialSection = () => {
  const { t } = useTranslation();
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
    <SectionWrapper>
      <h2 id="trials-section" className={styles.hidden}>
        {t("vzaemodia.trialTitle")}
      </h2>
      <TrialSectionList trialsData={trialsData} />
    </SectionWrapper>
  );
};
