import ServiceInfoMobile from "./ServicesInfoMobile/ServicesInfoMobile";
import { useMedia } from "../../../hooks/useMedia";
import ServicesInfoTabletDesktop from "./ServicesInfoTabletDesktop/ServicesInfoTabletDesktop";
// import { useState } from "react";
// import { useEffect } from "react";
// import { fetchOurServices } from "../../../adminPanel/serviceApiOurServices";
// import i18n from "../../../utils/localization/i18n";
import { SyncLoader } from "react-spinners";

export const LoaderService = () => {
  return (
    <div
      style={{
        minHeight: "50dvh",
        display: "flex",
        justifyContent: "center",
        marginTop: "200px",
      }}
    >
      <SyncLoader loading={true} size={15} color="#36d7b7" />
    </div>
  );
};

export const ServicesInfo = ({ service, loading, error }) => {
  const { isMobile, isTablet, isDesktop } = useMedia();

  return (
    <>
      {loading ? ( // Відображаємо спінер, якщо завантажується
        <LoaderService />
      ) : isTablet || isDesktop ? (
        <ServicesInfoTabletDesktop items={service} />
      ) : isMobile ? (
        <ServiceInfoMobile items={service} />
      ) : null}
    </>
  );
};
