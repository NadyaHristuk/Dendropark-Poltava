import mobile1x from '../../../assets/images/About/subonik-mobile-1x.jpg';
import mobile2x from '../../../assets/images/About/subonik-mobile-2x.jpg';
import tablet1x from '../../../assets/images/About/subonik-tablet-1x.jpg';
import tablet2x from '../../../assets/images/About/subonik-tablet-2x.jpg';
import desktop1x from '../../../assets/images/About/subonik-desktop-1x.jpg';
import desktop2x from '../../../assets/images/About/subonik-desktop-2x.jpg';

export const subotnikPicture = {
    mobile: {
        sizes: { height: 212, width: 310 },
        images: { oneX: mobile1x, twoX: mobile2x },
    },
    tablet: {
        sizes: { height: 302, width: 630 },
        images: { oneX: tablet1x, twoX: tablet2x },
    },
    desktop: {
        sizes: { height: 302, width: 630 },
        images: { oneX: desktop1x, twoX: desktop2x },
    },
};