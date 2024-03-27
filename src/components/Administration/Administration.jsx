import { useTranslation } from 'react-i18next';
import scss from './Administration.module.scss';
import AdministrationItem from './AdministrationItem/AdministrationItem';
import data from './data';

const Administration = () => {
  const { t } = useTranslation();

  return (
    <section id="administration-section" className={scss.section}>
      <h2 className={scss.title}>{t('contacts.titleAdministration')}</h2>
      <ul className={scss.list}>
        {data?.map((person) => (
          <AdministrationItem key={person.id} {...person} />
        ))}
      </ul>
    </section>
  );
};

export default Administration;
