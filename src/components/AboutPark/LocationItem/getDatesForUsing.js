export const getDates = (card, currentLanguage) => {
  const {
    image,
    mapImage,

    ua: {
      description: descriptionUA,
      imgAlt: imgAltUA,
      number: numberUA,
      title: titleUA,
    },
    en: {
      description: descriptionEN,
      imgAlt: imgAltEN,
      number: numberEN,
      title: titleEN,
    },
    _id,
  } = card;

  const datesForUsing =
    currentLanguage === "ua"
      ? {
          description: descriptionUA,
          imgAlt: imgAltUA,
          number: numberUA,
          title: titleUA,
        }
      : {
          description: descriptionEN,
          imgAlt: imgAltEN,
          number: numberEN,
          title: titleEN,
        };

  const dates = { ...datesForUsing, image, mapImage, _id };

  return dates;
};
