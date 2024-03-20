import styles from "./CardMap.module.scss";
import icons from "../../../../../assets/icons/sprite.svg";

export const CardMap = ({ mapImage, handleClick }) => {
  return (
    <div className={styles.mapContainer}>
      <button className={styles.closeBtn} type="button" onClick={handleClick}>
        <svg className={styles.icon} width="34" height="34" aria-label="arrow-forward">
          <use href={`${icons}#icon-cross`}></use>
        </svg>
      </button>
      <img
        className={styles.pictureMap}
        src={`${mapImage}`}
        alt={`Map of the trial`}
        aria-label="hero-image"
      />
      {/* <picture>
        <source
          className={styles.pictureMap}
          srcSet={`
            ${mapImage} 1x,
            ${mapImage} 2x
          `}
          media="(min-width: 1440px)"
          width="1217"
          height="400"
          type="image/png"
        />
        <source
          className={styles.pictureMap}
          srcSet={`
            ${mapImage} 1x,
            ${mapImage} 2x
          `}
          media="(min-width: 960px)"
          width="818"
          height="400"
          type="image/png"
        />
        <source
          className={styles.pictureMap}
          srcSet={`
            ${mapImage} 1x,
            ${mapImage} 2x
          `}
          width="317"
          height="186"
          media="(min-width: 320px)"
          type="image/png"
        />
        <img
          className={styles.pictureMap}
          src={`${mapImage}`}
          alt={`Map of the trial`}
          aria-label="hero-image"
          width="818"
          height="400"
        />
      </picture> */}
    </div>
  );
};
