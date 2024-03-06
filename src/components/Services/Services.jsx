import infoData from './servicesInfo.json';
import storeData from './servicesStore.json';
import { ServicesInfo } from './ServicesInfo/ServicesInfo';
import { ServicesStore } from './ServicesStore/ServicesStore';
import css from './ServicesInfo/ServicesInfo.module.scss';
export const Services = () => {
	return (
		<>
			<h2 className={css.title}>Наші послуги</h2>
			<ServicesInfo items={infoData} />
			<ServicesStore items={storeData} />
		</>
	);
};
