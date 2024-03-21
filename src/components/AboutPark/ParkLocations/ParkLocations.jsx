import { ParkLocationsData } from "./locations.js";
import { useTranslation } from "react-i18next";
import css from "./ParkLocations.module.scss";
import Container from "../../Container/Container";
import { SectionWrapper } from "../SectionWrapper/SectionWrapper";
import { LocationItem } from "../LocationItem/LocationItem";
import { usePagination } from "../../../hooks/usePagination.js";
import Slider from "../../Slider/Slider.jsx";
import { useEffect, useState } from "react";
import { fetchData } from "../api.js";

export const ParkLocations = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const newLocations = await fetchData();

        setLocations(newLocations);
      } catch (error) {}
    };
    fetchLocations();
  }, []);

  const { t } = useTranslation();
  const { chunkedData } = usePagination({
    perPage: 3,
    data: locations,
  });

  const list = (cards) => {
    return (
      <ul className={css.parkLocationsList}>
        {cards.map((card, idx) => (
          <LocationItem key={idx} index={idx} card={card} />
        ))}
      </ul>
    );
  };

  return (
    <SectionWrapper isLowPadding>
      <Container>
        <h2 className={css.locationsTitle} id="parkLocation">
          {t("about.locationsTitle")}
        </h2>
        <p className={css.locationsDivision}>{t("about.locationsDivision")} </p>
        <Slider currentPage={list} chunkedData={chunkedData} />
      </Container>
    </SectionWrapper>
  );
};
