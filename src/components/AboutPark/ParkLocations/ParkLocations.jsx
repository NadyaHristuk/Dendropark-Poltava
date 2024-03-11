import { ParkLocationsData } from './locations.js';
import { useTranslation } from 'react-i18next';
import css from './ParkLocations.module.scss';
import Container from '../../Container/Container';
import { SectionWrapper } from '../SectionWrapper/SectionWrapper';
import { LocationItem } from '../LocationItem/LocationItem';

export const ParkLocations = () => {
  const { t } = useTranslation();
  return (
    <SectionWrapper isLowPadding>
      <Container>
        <h2 className={css.locationsTitle} id="parkLocation">
          {t('about.locationsTitle')}
        </h2>
        <p className={css.locationsDivision}>{t('about.locationsDivision')} </p>

        <ul className={css.parkLocationsList}>
          {ParkLocationsData.map((location, index) => (
            <LocationItem key={index} index={index} card={location} />
          ))}
        </ul>
      </Container>
    </SectionWrapper>
  );
};
