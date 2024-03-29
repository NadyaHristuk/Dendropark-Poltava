import { usePagination } from "../../../../hooks/usePagination";
import { TrialSectionCard } from "../TrialSectionCard/TrialSectionCard";
import i18n from "../../../../utils/localization/i18n.js";
import styles from "./TrialSectionList.module.scss";
import Slider from "../../../Slider/Slider.jsx";
import { useState, useEffect } from "react";
import { useMedia } from "../../../../hooks/useMedia.js";

export const TrialSectionList = ({ trialsData }) => {
  const { isMobile } = useMedia();
  const PER_PAGE = isMobile ? 2 : 3;
  const { chunkedData } = usePagination({ perPage: PER_PAGE, data: trialsData });

  const { language } = i18n;
  const [lang, setLang] = useState(language);
  useEffect(() => {
    setLang(language);
  }, [language]);

  useEffect(() => {
    // Перевіряємо наявність хешу в URL
    const hash = window.location.hash;
    if (hash) {
      // Видаляємо символ "#" для отримання ідентифікатора
      const id = hash.replace('#', '');
      // Знаходимо елемент
      const element = document.getElementById(id);
      if (element) {
        // Прокручуємо до елементу
        element.scrollIntoView({behavior: 'smooth'});
      }
    }
  }, []);

  const list = (cards) => {
    return (
     <ul className={styles.list}>
      {Array.isArray(cards) ? cards.map((card, idx) => (
        <TrialSectionCard key={idx} card={card} lang={lang} />
      )) : null}
    </ul>
    );
  };

  return (
    <>
      {PER_PAGE >= trialsData.length ? (
        <ul className={styles.list}>
          {Array.isArray(trialsData) ? trialsData.map((card, idx) => (
            <TrialSectionCard key={idx} card={card} lang={lang} />
          )) : null}
        </ul>
      ) : (
        <Slider currentPage={list} chunkedData={chunkedData ? chunkedData : []} />
      )}
    </>
  );
};
