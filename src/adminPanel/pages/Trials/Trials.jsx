import styles from './Trials.module.scss';
import TrialsForm from '../../components/forms/TrialsForm';

const Trials = () => {
	return (
		<div className={styles.father}>
			<div className={styles.container1}>
				{' '}
				<TrialsForm />
			</div>
			<div className={styles.container2}></div>
		</div>
	);
};

export default Trials;
