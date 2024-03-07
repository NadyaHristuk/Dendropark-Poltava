import styles from './TrialPicture.module.scss';

export const TrialPicture = ({ mob, mob_x2, tab, tab_x2, imgAlt }) => {
  return (
    <picture>
      <source
        className={styles.picture}
        srcSet={`
            ${tab} 1x,
            ${tab_x2} 2x
          `}
        media="(min-width: 1440px)"
        width="470"
        height="451"
        type="image/webp"
      />
      <source
        className={styles.picture}
        srcSet={`
            ${tab} 1x,
            ${tab_x2} 2x
          `}
        media="(min-width: 960px)"
        width="470"
        height="451"
        type="image/jpg"
      />
      <source
        className={styles.picture}
        srcSet={`
            ${mob} 1x,
            ${mob_x2} 2x
          `}
        media="(min-width: 300px)"
        width="310"
        height="200"
        type="image/jpg"
      />
      <img
        className={styles.picture}
        src={`${mob_x2}`}
        alt={`${imgAlt}`}
        width="470"
        height="451"
        aria-label="hero-image"
      />
    </picture>
  );
};
