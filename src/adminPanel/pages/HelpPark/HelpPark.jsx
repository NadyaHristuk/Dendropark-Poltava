import HelpParkForm from '../../components/forms/HelpParkForm';
import { PanellList } from '../../components/PanellList/PanellList';
import { ChangedProvider } from '../../components/PanellList/ContextProvider/ChangeContext';
import {
	fetchHelpParkData,
	deleteHelpParkData,
} from '../../serviceApiHelpPark';
import styles from '../Documents/Documents.module.scss';

const HelpPark = () => {
	return (
		<div className={styles.father}>
			<ChangedProvider>
				<div className={styles.container1}>
					{' '}
					<HelpParkForm name="postForm" />
				</div>

				<div className={styles.container2}>
					<PanellList
						Form={HelpParkForm}
						getOperation={fetchHelpParkData}
						deleteOperation={deleteHelpParkData}
						path="/donations"
					/>
				</div>
			</ChangedProvider>
		</div>
	);
};

export default HelpPark;
