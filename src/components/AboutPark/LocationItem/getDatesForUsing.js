export const getDates = (card, currentLanguage) => {


    const {
        image,
        mapImage,

        uk: {
            description: descriptionUK,
            imgAlt: imgAltUK,
            number: numberUK,
            title: titleUK,

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
        currentLanguage === 'ua'
            ? {
                description: descriptionUK,
                imgAlt: imgAltUK,
                number: numberUK,
                title: titleUK,
            }
            : {
                description: descriptionEN,
                imgAlt: imgAltEN,
                number: numberEN,
                title: titleEN,
            };


    const dates = { ...datesForUsing, image, mapImage, _id }


    return dates

}