export const getDates = (card, currentLanguage) => {
  const {
    image,
    mapImage,
    number: number,
    ua: { description: descriptionUA, imgAlt: imgAltUA, title: titleUA },
    en: { description: descriptionEN, imgAlt: imgAltEN, title: titleEN },
    _id,
  } = card;

  const datesForUsing =
    currentLanguage === "ua"
      ? {
          description: descriptionUA,
          imgAlt: imgAltUA,
          title: titleUA,
        }
      : {
          description: descriptionEN,
          imgAlt: imgAltEN,
          title: titleEN,
        };

  const dates = { ...datesForUsing, number, image, mapImage, _id };

  return dates;
};
