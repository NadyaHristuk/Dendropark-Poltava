import ChroniclesItem from '../ChroniclesItem/ChroniclesItem';
import { useTranslation } from 'react-i18next';
import css from './ChroniclesList.module.scss';

const сhronicles = [
  {
    id: 1,
    photo:
      'https://tamtour.com.ua/local/image/883/003/69262-800x600-cfakepathuman3.jpg',
    title: 'Назва події №1',
    description: 'Це опис першої події.',
  },
  {
    id: 2,
    photo:
      'https://ua.igotoworld.com/frontend/webcontent/images/tours/2702273_800x600_39758_800x600_dsc_0188a.jpg',
    title: 'Назва події №2',
    description: 'Це опис другої події.',
  },
  {
    id: 3,
    photo:
      'https://ua.igotoworld.com/frontend/webcontent/images/tours/2702054_800x600_poltava.jpg',
    title: 'Назва події №3',
    description: 'Це опис третьої події.',
  },
];

const ChroniclesList = () => {
  const { t } = useTranslation();
  return (
    <section>
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
