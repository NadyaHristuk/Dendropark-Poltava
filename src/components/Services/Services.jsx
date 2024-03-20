import infoData from './servicesInfo.json';
import storeData from './servicesStore.js';
import { ServicesInfo } from './ServicesInfo/ServicesInfo';
import { ServicesStore } from './ServicesStore/ServicesStore';
import css from './ServicesInfo/ServicesInfo.module.scss';
import { useTranslation } from 'react-i18next';

export const Services = () => {
  const { t } = useTranslation();

  return (
    <>
      <section id="services-section" className={css.services_wrapper}>
        <h2 className={css.title}>{t('footer.sections.services.ourServicesText')}</h2>
        <ServicesInfo items={infoData} />
        <h2 className={css.title_store} id="seedlings-section">
          {t('footer.sections.services.canBuy')}:
        </h2>
        <ServicesStore items={storeData} />
      </section>
    </>
  );
};
