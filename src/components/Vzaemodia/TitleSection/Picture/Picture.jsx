import {
  mobileImg_x1,
  mobileImg_x2,
  tabletImg_x1,
  tabletImg_x2,
  desctopImg_x1,
  desctopImg_x2,
} from '/src/assets/images/Vzaemodia';

import styles from './Picture.module.scss';

export const Picture = () => {
  return (
    <picture>
      <source
        className={styles.picture}
        srcSet={`
            ${desctopImg_x1} 1x,
            ${desctopImg_x2} 2x
          `}
        media="(min-width: 1440px)"
        width="1440"
        height="567"
        type="image/webp"
      />
      <source
        className={styles.picture}
        srcSet={`
            ${tabletImg_x1} 1x,
            ${tabletImg_x2} 2x
          `}
        media="(min-width: 960px)"
        width="960"
        height="567"
        type="image/jpg"
      />
      <source
        className={styles.picture}
        srcSet={`
            ${mobileImg_x1} 1x,
            ${mobileImg_x2} 2x
          `}
        media="(min-width: 300px)"
        width="390"
        height="410"
        type="image/jpg"
      />
      <img
        className={styles.picture}
        src="/img/desctopHero/desctopHero-x1.jpg"
        alt="White swan on the lake. Sunny weather and calm atmosphere"
        width="1440"
        height="776"
        aria-label="hero-image"
      />
    </picture>
  );
};
