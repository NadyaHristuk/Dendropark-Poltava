import LocationsForm from '../../components/forms/LocationsForm';
import { ChangedProvider } from '../../components/PanellList/ContextProvider/ChangeContext';
import { PanellList } from '../../components/PanellList/PanellList';
import { fetchLocations, deleteLocation } from '../../serviceApiLocations';
import styles from './Locations.module.scss';

const Locations = () => {
	return (
		<div className={styles.father}>
			<ChangedProvider>
				<div className={styles.container1}>
					{' '}
					<LocationsForm name="postForm" />
				</div>

				<div className={styles.container2}>
					<PanellList
						Form={LocationsForm}
						getOperation={fetchLocations}
						deleteOperation={deleteLocation}
						path="/locations"
					/>
				</div>
			</ChangedProvider>
		</div>
	);
};

export default Locations;
