export const getDates = (card, currentLanguage) => {


    const {
        image,
        mapImage,
        number,

        ua: {
            description: descriptionUK,
            imgAlt: imgAltUK,

            title: titleUK,

        },
        en: {
            description: descriptionEN,
            imgAlt: imgAltEN,

            title: titleEN,

        },
        _id,

    } = card;


    const datesForUsing =
        currentLanguage === 'ua'
            ? {
                description: descriptionUK,
                imgAlt: imgAltUK,

                title: titleUK,
            }
            : {
                description: descriptionEN,
                imgAlt: imgAltEN,

                title: titleEN,
            };


    const dates = { ...datesForUsing, image, mapImage, _id, number }


    return dates

}