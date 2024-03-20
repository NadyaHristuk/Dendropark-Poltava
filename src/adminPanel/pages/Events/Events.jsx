import { PanellList } from '../../components/PanellList/PanellList';
import { fetchEvents, deleteEvent } from '../../serviceApiEvents';
import styles from './Events.module.scss';
import { ChangedProvider } from '../../components/PanellList/ContextProvider/ChangeContext';
import EventsForm from '../../components/forms/EventsForm';

const Events = () => {
	return (
		<div className={styles.father}>
			<ChangedProvider>
				<div className={styles.container1}>
					<EventsForm name="postForm" />
				</div>
				<PanellList
					getOperation={fetchEvents}
					deleteOperation={deleteEvent}
					Form={EventsForm}
					path="/events"
				/>
			</ChangedProvider>
		</div>
	);
};

export default Events;
