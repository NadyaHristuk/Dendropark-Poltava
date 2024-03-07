import { LocationItem } from '../LocationItem/LocationItem';
import ParkLocationsData from './locations.json';
import { useTranslation } from 'react-i18next';

export const ParkLocations = () => {
  const { t } = useTranslation();
  return (
    <>
      <h2>{t('about.locationsTitle')}</h2>
      <p>{t('about.locationsDivision')} </p>
      <ul>
        {ParkLocationsData.map((location, index) => (
          <LocationItem
            key={index}
            image={location.image}
            title={location.title}
            description={location.description}
          />
        ))}
      </ul>
    </>
  );
};
