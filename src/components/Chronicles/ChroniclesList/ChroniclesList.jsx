import ChroniclesItem from '../ChroniclesItem/ChroniclesItem';
import { useTranslation } from 'react-i18next';
import chronicles from '../сhronicles';
import { icons } from '../../../assets';
import css from './ChroniclesList.module.scss';

const ChroniclesList = () => {
  const { t } = useTranslation();

  chronicles.sort((a, b) => b.date - a.date);

  return (
    <section id="litopys" className={css.chroniclesSection}>
      <h3 className={css.title}>{t('chronicles.chroniclesTitle')}</h3>
      {chronicles.length > 0 ? (
        <ul className={css.list}>
          {chronicles.map(({ id, photo, title, description }) => (
            <li key={id} className={css.item}>
              <ChroniclesItem
                id={id}
                url={photo}
                title={title}
                description={description}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.message}>
          <svg className={css.attention}>
            <use href={`${icons}#icon-attention1`}></use>
          </svg>
          Поки що не має нових подій, очікуйте згодом...
        </p>
      )}
    </section>
  );
};

export default ChroniclesList;
