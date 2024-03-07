import infoData from './servicesInfo.json';
import storeData from './servicesStore.js';
import { ServicesInfo } from './ServicesInfo/ServicesInfo';
import { ServicesStore } from './ServicesStore/ServicesStore';
import Container from '../Container/Container.jsx';
import css from './ServicesInfo/ServicesInfo.module.scss';
export const Services = () => {
	return (
		<Container>
			<h2 className={css.title}>Наші послуги</h2>
			<ServicesInfo items={infoData} />
			<h2 className={css.title_store}>Ви можете придбати садженці:</h2>
			<ServicesStore items={storeData} />
		</Container>
	);
};
