import mobileImg_x1 from '../../../../assets/images/Vzaemodia/mobile-ecotrials_x1.webp';
import mobileImg_x2 from '../../../../assets/images/Vzaemodia/mobile-ecotrials_x2.webp';
import tabletImg_x1 from '../../../../assets/images/Vzaemodia/tablet-ecotrials_x1.webp';
import tabletImg_x2 from '../../../../assets/images/Vzaemodia/tablet-ecotrials_x2.webp';
import desctopImg_x1 from '../../../../assets/images/Vzaemodia/desctop-ecotrials_x1.webp';
import desctopImg_x2 from '../../../../assets/images/Vzaemodia/desctop-ecotrials_x2.webp';
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
        type="image/jpg"
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
        alt="Sunshine weather, man holding box of fresh and juicy vegetables and in frame hands of women sprinking vegetables with water"
        width="1440"
        height="776"
        aria-label="hero-image"
      />
    </picture>
  );
};
