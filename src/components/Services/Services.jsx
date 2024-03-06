import infoData from './servicesInfo.json';
import storeData from './servicesStore.json';
import { ServicesInfo } from './ServicesInfo/ServicesInfo';
import { ServicesStore } from './ServicesStore/ServicesStore';

export const Services = () => {
	return (
		<>
			<ServicesInfo items={infoData} />
			<ServicesStore items={storeData} />
		</>
	);
};
