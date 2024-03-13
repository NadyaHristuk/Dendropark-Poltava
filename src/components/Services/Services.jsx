import infoData from './servicesInfo.json';
import storeData from './servicesStore.js';
import { ServicesInfo } from './ServicesInfo/ServicesInfo';
import { ServicesStore } from './ServicesStore/ServicesStore';
import css from './ServicesInfo/ServicesInfo.module.scss';
export const Services = () => {
	return (
		<>
			<section id="services" className={css.services_wrapper}>
				<h2 className={css.title}>Наші послуги</h2>
				<ServicesInfo items={infoData} />
				<h2 className={css.title_store}>Ви можете придбати саджанці:</h2>
				<ServicesStore items={storeData} />
			</section>
		</>
	);
};
