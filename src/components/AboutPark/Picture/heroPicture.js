import mobile1x from '../../../assets/images/About/Rectangle-1x.jpg';
import mobile2x from '../../../assets/images/About/Rectangle-2x.jpg';
import tablet1x from '../../../assets/images/About/Rectangle-tablet-1x.jpg';
import tablet2x from '../../../assets/images/About/Rectangle-tablet-2x.jpg';
import desktop1x from '../../../assets/images/About/Rectangle-desktop-1x.jpg';
import desktop2x from '../../../assets/images/About/Rectangle-desktop-2x.jpg';

export const heroPicture = {
  mobile: {
    sizes: { height: 372, width: 390 },
    images: { oneX: mobile1x, twoX: mobile2x },
  },
  tablet: {
    sizes: { height: 552, width: 960 },
    images: { oneX: tablet1x, twoX: tablet2x },
  },
  desktop: {
    sizes: { height: 881, width: 1440 },
    images: { oneX: desktop1x, twoX: desktop2x },
  },
};