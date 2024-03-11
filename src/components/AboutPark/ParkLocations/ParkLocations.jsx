import { ParkLocationsData } from './locations.js';
import { useTranslation } from 'react-i18next';
import css from './ParkLocations.module.scss';
import Container from '../../Container/Container';
import { SectionWrapper } from '../SectionWrapper/SectionWrapper';
import { LocationItem } from '../LocationItem/LocationItem';
import { usePagination } from '../../../hooks/usePagination.js';
import Pagination from '../../Pagination/Pagination.jsx';

export const ParkLocations = () => {
  const { t } = useTranslation();
  const { currentPosts, ...options } = usePagination({
    postPerPage: 3,
    data: ParkLocationsData,
  });
  return (
    <SectionWrapper isLowPadding>
      <Container>
        <h2 className={css.locationsTitle} id="parkLocation">
          {t('about.locationsTitle')}
        </h2>
        <p className={css.locationsDivision}>{t('about.locationsDivision')} </p>

        <ul className={css.parkLocationsList}>
          {currentPosts.map((location, index) => (
            <LocationItem key={index} index={index} card={location} />
          ))}
        </ul>
        <Pagination props={options} />
      </Container>
    </SectionWrapper>
  );
};
