import { LocationItem } from '../LocationItem/LocationItem';
import ParkLocationsData from './locations.json';
import { useTranslation } from 'react-i18next';
import css from './ParkLocations.module.scss';
import Container from '../../Container/Container';
import { SectionWrapper } from '../SectionWrapper/SectionWrapper';
export const ParkLocations = () => {
  const { t } = useTranslation();
  return (
    <SectionWrapper isLowPadding>
      <Container>
        <h2 className={css.locationsTitle}>{t('about.locationsTitle')}</h2>
        <p className={css.locationsDivision}>{t('about.locationsDivision')} </p>
        <ul className={css.parkLocationsList}>
          {ParkLocationsData.map((location, index) => (
            <LocationItem
              key={index}
              index={index}
              image={location.image}
              title={location.title}
              description={location.description}
            />
          ))}
        </ul>
      </Container>
    </SectionWrapper>
  );
};
