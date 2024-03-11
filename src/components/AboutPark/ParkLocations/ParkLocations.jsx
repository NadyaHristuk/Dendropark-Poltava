import { ParkLocationsData } from './locations.js';
import { useTranslation } from 'react-i18next';
import css from './ParkLocations.module.scss';
import Container from '../../Container/Container';
import { SectionWrapper } from '../SectionWrapper/SectionWrapper';
import { LocationItem } from '../LocationItem/LocationItem';
import { usePagination } from '../../../hooks/usePagination.js';
import Slider from '../../Slider/Slider.jsx';

export const ParkLocations = () => {
  const { t } = useTranslation();
  const { chunkedData } = usePagination({
    perPage: 3,
    data: ParkLocationsData,
  });

  const list = (cards) => {
    return (
      <ul className={css.parkLocationsList}>
        {cards.map((card, idx) => (
          <LocationItem key={idx} index={idx} card={card} />
        ))}
      </ul>
    );
  };

  return (
    <SectionWrapper isLowPadding>
      <Container>
        <h2 className={css.locationsTitle} id="parkLocation">
          {t('about.locationsTitle')}
        </h2>
        <p className={css.locationsDivision}>{t('about.locationsDivision')} </p>
        <Slider currentPage={list} chunkedData={chunkedData} />
      </Container>
    </SectionWrapper>
  );
};
