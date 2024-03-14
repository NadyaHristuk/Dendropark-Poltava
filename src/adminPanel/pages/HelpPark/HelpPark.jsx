import HelpParkForm from '../../components/forms/HelpParkForm';
import styles from '../Documents/Documents.module.scss';

const HelpPark = () => {
	return (
		<div className={styles.father}>
			<div className={styles.container1}>
				{' '}
				<HelpParkForm />
			</div>

			<div className={styles.container2}></div>
		</div>
	);
};

export default HelpPark;
