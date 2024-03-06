import mobileImg from './mobile-ecotrials.jpg';
import tabletImg from './tablet-ecotrials.jpg';
import desctopImg from './desctop-ecotrials.jpg';
import styles from './Picture.module.scss';

export const Picture = () => {
  return (
    <picture>
      <source
        className={styles.picture}
        srcSet={`
            ${desctopImg} 1x,
            ${desctopImg} 2x
          `}
        media="(min-width: 1440px)"
        width="1440"
        height="567"
        type="image/jpg"
      />
      <source
        className={styles.picture}
        srcSet={`
            ${tabletImg} 1x,
            ${tabletImg} 2x
          `}
        media="(min-width: 960px)"
        width="960"
        height="567"
        type="image/jpg"
      />
      <source
        className={styles.picture}
        srcSet={`
            ${mobileImg} 1x,
            ${mobileImg} 2x
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
