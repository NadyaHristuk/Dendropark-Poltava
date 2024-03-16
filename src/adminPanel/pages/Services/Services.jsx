import styles from '../Documents/Documents.module.scss';
import { PanellList } from '../../components/PanellList/PanellList';
import { ChangedProvider } from '../../components/PanellList/ChangeContext';
import {
	fetchOurServices,
	deleteOurServices,
} from '../../serviceApiOurServices';
import OurServicesForm from '../../components/forms/OurServicesForm';

const Services = () => {
	return (
		<div className={styles.father}>
			<ChangedProvider>
				<div className={styles.container1}>
					{' '}
					<OurServicesForm name="postForm" />
				</div>

				<div className={styles.container2}>
					<PanellList
						Form={OurServicesForm}
						getOperation={fetchOurServices}
						deleteOperation={deleteOurServices}
						path="/services"
					/>
				</div>
			</ChangedProvider>
		</div>
	);
};
export default Services;
