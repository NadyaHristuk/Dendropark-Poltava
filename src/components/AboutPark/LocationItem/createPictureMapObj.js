export const createPictureMapObj = (image, imgAlt) => {
    return {
        alt: imgAlt,
        desktop: {
            images: { oneX: image, twoX: image },
            sizes: {
                width: 519,
                height: 422,
            },
        },
        tablet: {
            images: { oneX: image, twoX: image },
            sizes: {
                width: 386,
                height: 295,
            },
        },
        mobile: {
            images: { oneX: image, twoX: image },
            sizes: {
                width: 278,
                height: 211,
            },
        },
    }
}