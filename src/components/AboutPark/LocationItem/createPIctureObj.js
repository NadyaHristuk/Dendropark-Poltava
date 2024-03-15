export const createPictureObj = (image, imgAlt) => {
    return {
        alt: imgAlt, 
        desktop: {
            images: { oneX: image, twoX: image },
            sizes: {
                width: 579,
                height: 465,
            },
        },
        tablet: {
            images: { oneX: image, twoX: image },
            sizes: {
                width: 433,
                height: 330,
            },
        },
        mobile: {
            images: { oneX: image, twoX: image },
            sizes: {
                width: 310,
                height: 200,
            },
        },
    }
}