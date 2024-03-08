import styles from './TrialPicture.module.scss';

//props for srcSet
// {
//   mob, mob_x2, tab, tab_x2, imgAlt;
// }

export const TrialPicture = ({ tab_x2, imgAlt }) => {
  return (
    <img
      className={styles.picture}
      src={`${tab_x2}`}
      alt={`${imgAlt}`}
      width="470"
      height="450"
      aria-label="hero-image"
    />
    // <picture>
    //   <source
    //     className={styles.picture}
    //     srcSet={`
    //         ${tab} 1x,
    //         ${tab_x2} 2x
    //       `}
    //     media="(min-width: 1440px)"
    //     width="470"
    //     height="450"
    //     type="image/webp"
    //   />
    //   <source
    //     className={styles.picture}
    //     srcSet={`
    //         ${tab} 1x,
    //         ${tab_x2} 2x
    //       `}
    //     media="(min-width: 960px)"
    //     width="470"
    //     height="450"
    //     type="image/jpg"
    //   />
    //   <source
    //     className={styles.picture}
    //     srcSet={`
    //         ${mob} 1x,
    //         ${mob_x2} 2x
    //       `}
    //     media="(min-width: 300px)"
    //     width="310"
    //     height="200"
    //     type="image/jpg"
    //   />
    //   <img
    //     className={styles.picture}
    //     src={`${mob_x2}`}
    //     alt={`${imgAlt}`}
    //     width="470"
    //     height="450"
    //     aria-label="hero-image"
    //   />
    // </picture>
  );
};
