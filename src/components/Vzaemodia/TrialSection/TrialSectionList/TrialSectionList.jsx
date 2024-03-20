import { usePagination } from "../../../../hooks/usePagination";
import { TrialSectionCard } from "../TrialSectionCard/TrialSectionCard";
import i18n from "../../../../utils/localization/i18n.js";
import styles from "./TrialSectionList.module.scss";
import Slider from "../../../Slider/Slider.jsx";
import { useState, useEffect } from "react";

export const TrialSectionList = ({ trialsData }) => {
  const PER_PAGE = 3;
  const { chunkedData } = usePagination({ perPage: PER_PAGE, data: trialsData });

  const { language } = i18n;
  const [lang, setLang] = useState(language);
  useEffect(() => {
    setLang(language);
  }, [language]);

  const list = (cards) => {
    return (
      <ul className={styles.list}>
        {cards.map((card, idx) => (
          <TrialSectionCard key={idx} card={card} lang={lang} />
        ))}
      </ul>
    );
  };

  return (
    <>
      {PER_PAGE >= trialsData.length ? (
        <ul className={styles.list}>
          {trialsData.map((card, idx) => (
            <TrialSectionCard key={idx} card={card} lang={lang} />
          ))}
        </ul>
      ) : (
        <Slider currentPage={list} chunkedData={chunkedData ? chunkedData : []} />
      )}
    </>
  );
};
