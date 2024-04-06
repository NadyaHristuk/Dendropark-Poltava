import styles from "./Picture.module.scss";

export const Picture = ({ pictures }) => {
  return (
    <picture>
      <source
        className={pictures.hero ? pictures.styles : ""}
        srcSet={`${pictures.desktop.images.oneX} 1x, ${pictures.desktop.images.twoX} 2x`}
        media="(min-width: 1440px)"
        width={pictures.desktop.sizes.width}
        height={pictures.desktop.sizes.height}
        type="image/jpg"
      />
      <source
        className={pictures.hero ? pictures.styles : ""}
        srcSet={`${pictures.tablet.images.oneX} 1x, ${pictures.tablet.images.twoX} 2x`}
        media="(min-width: 960px) and (max-width: 1439px)"
        width={pictures.tablet.sizes.width}
        height={pictures.tablet.sizes.height}
        type="image/jpg"
      />
      <source
        className={pictures.hero ? pictures.styles : ""}
        srcSet={`${pictures.mobile.images.oneX} 1x, ${pictures.mobile.images.twoX} 2x`}
        media="(max-width: 959px)"
        width={pictures.mobile.sizes.width}
        height={pictures.mobile.sizes.height}
        type="image/jpg"
      />
      <img
        className={pictures.hero ? pictures.styles : ""}
        src={pictures.desktop.images.oneX}
        alt={pictures.alt ?? ""}
        width={pictures.desktop.sizes.width}
        height={pictures.desktop.sizes.height}
      />
    </picture>
  );
};
