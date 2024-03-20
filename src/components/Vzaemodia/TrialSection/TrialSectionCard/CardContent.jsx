import styles from "./TrialSectionCard.module.scss";
import { TrialPicture } from "../TrialPicture/TrialPicture";
import icons from "../../../../assets/icons/sprite.svg";
import { useTranslation } from "react-i18next";
import { CardMap } from "./CardMap/CardMap";
import { useMedia } from "../../../../hooks/useMedia";

export const CardContent = ({ card, handleClick, isMapOpen, lang }) => {
  const { t } = useTranslation();
  const { isMobile } = useMedia();
  const text = lang === "ua" ? card.ua.text : card.en.text;

  return (
    <div className={styles.father}>
      <div
        className={
          !isMapOpen
            ? ` ${styles.mapContainerInContent} `
            : ` ${styles.mapContainerInContentOpen} `
        }
      >
        <CardMap
          mapImage={card.mapImage}
          handleClick={handleClick}
          //   isMobileMapOpen={isMapOpen}
        />
      </div>

      <div
        className={
          !isMapOpen ? `${styles.listItemWrapperClose}` : `${styles.listItemWrapper}`
        }
      >
        <span className={styles.trialLength}>{card.distance}</span>
        <div
          className={
            isMapOpen && isMobile ? styles.imgContainerMobile : styles.imgContainer
          }
        >
          <TrialPicture
            image={card.image}
            imgAlt={lang === "ua" ? card.ua.imgAlt : card.en.imgAlt}
          />
        </div>
        <div className={styles.textWrapper}>
          <span className={styles.trialLengthText}>{card.distance}</span>
          <div>
            <h3 className={styles.cardTitle}>
              {lang === "ua" ? card.ua.title : card.en.title}
            </h3>
            <p className={styles.cardText} dangerouslySetInnerHTML={{ __html: text }} />
            <button onClick={handleClick} className={styles.button} type="button">
              {t("vzaemodia.cardButtonText")}
              <svg
                className={styles.iconArrow}
                width="20"
                height="20"
                aria-label="arrow-forward"
              >
                <use href={`${icons}#icon-arrow-up`}></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
