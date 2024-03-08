import ChroniclesItem from '../ChroniclesItem/ChroniclesItem';
import { useTranslation } from 'react-i18next';
import сhronicles from '../сhronicles'
import css from './ChroniclesList.module.scss';

const ChroniclesList = () => {
  const { t } = useTranslation();

  сhronicles.sort((a, b) => b.date - a.date);
  
  return (
    <section className={css.chroniclesSection}>
      <h3 className={css.title}>{t('chronicles.chroniclesTitle')}</h3>
      <ul className={css.list}>
        {сhronicles.map(({ id, photo, title, description }) => (
          <li key={id} className={css.item}>
            <ChroniclesItem
              url={photo}
              title={title}
              description={description}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ChroniclesList;

