import { ParkLocation } from '../ParkLocation/ParkLocation';
import ParkLocationsData from './locations.json';

export const ParkLocations = () => {
  return (
    <>
      <h2>Локації парку</h2>
      <p>Територія парку поділена на окремі ділянки: </p>
      <ul>
        {ParkLocationsData.map((location, index) => (
          <ParkLocation
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
