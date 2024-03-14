import styles from '../Documents/Documents.module.scss';
import OurServicesForm from '../../components/forms/OurServicesForm';

const Services = () => {
	return (
		<div className={styles.father}>
			<div className={styles.container1}>
				{' '}
				<OurServicesForm />
			</div>

			<div className={styles.container2}></div>
		</div>
	);
};
export default Services;
