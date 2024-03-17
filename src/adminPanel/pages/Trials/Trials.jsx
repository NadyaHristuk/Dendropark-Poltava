import styles from './Trials.module.scss';
import { PanellList } from '../../components/PanellList/PanellList';
import { ChangedProvider } from '../../components/PanellList/ContextProvider/ChangeContext';
import { fetchTrials, deleteTrial } from '../../serviceApiTrials';
import TrialsForm from '../../components/forms/TrialsForm';

const Trials = () => {
	return (
		<div className={styles.father}>
			<ChangedProvider>
				<div className={styles.container1}>
					{' '}
					<TrialsForm name="postForm" />
				</div>
				<div className={styles.container2}>
					<PanellList
						Form={TrialsForm}
						getOperation={fetchTrials}
						deleteOperation={deleteTrial}
						path="/trials"
					/>
				</div>
			</ChangedProvider>
		</div>
	);
};

export default Trials;
