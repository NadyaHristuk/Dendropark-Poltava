import { SectionWrapper } from "../SectionWrapper/SectionWrapper";
import { TrialSectionList } from "./TrialSectionList/TrialSectionList";
import { fetchTrials } from "../../../adminPanel/serviceApiTrials.js";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import styles from "./TrialSection.module.scss";

export const TrialSection = ({ trialsData }) => {
    const { t } = useTranslation();

    return (
        <SectionWrapper>
            <h2 id="trials-section" className={styles.hidden}>
                {t("vzaemodia.trialTitle")}
            </h2>
            <TrialSectionList trialsData={trialsData} />
        </SectionWrapper>
    );
};
