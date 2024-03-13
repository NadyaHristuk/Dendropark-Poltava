import LocationsForm from '../../components/forms/LocationsForm';
import styles from './Locations.module.scss';

const Locations = () => {
	return (
		<div className={styles.father}>
			<div className={styles.container1}>
				{' '}
				<LocationsForm />
			</div>

			<div className={styles.container2}></div>
		</div>
	);
};

export default Locations;
