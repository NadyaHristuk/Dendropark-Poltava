import { useTranslation } from 'react-i18next';
import css from './AttentionVisitors.module.scss';
import { AttentionItem } from './AttentionItem.jsx';

export const AttentionVisitors = () => {
  const { t } = useTranslation();
  const points = t('attentionVisitors.points', { returnObjects: true });

  console.log(points);
  return (
    <section className={css.container}>
      <h2 className={css.title}>{t('attentionVisitors.title')}</h2>
      <p className={css.paragraph}>{t('attentionVisitors.description')}</p>
      <ul className={css.list}>
        {/* {points.map((point, index) => (
          <AttentionItem
            key={index}
            title={point.title}
            description={point.description}
            moreInfo={point.moreInfo}
            link={point.link}
          />
        ))} */}
      </ul>
    </section>
  );
};
