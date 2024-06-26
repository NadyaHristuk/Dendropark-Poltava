import { useTranslation } from 'react-i18next';
import css from './AttentionVisitors.module.scss';
import { AttentionItem } from './AttentionItem.jsx';

export const AttentionVisitors = () => {
  const { t } = useTranslation();
  const points = t('attentionVisitors.points', { returnObjects: true });
  return (
    <section className={css.container}>
      <h2 className={css.title}>{t('attentionVisitors.title')}</h2>
      <p className={css.paragraph}>{t('attentionVisitors.description')}</p>
      <ul className={css.list}>
      {
  Array.isArray(points) && points.map((point, index) => (
    <AttentionItem
      key={point.id || index} // Предпочтительнее использовать уникальный ID, если доступен
      title={point.title}
      description={point.description}
      moreInfo={point.moreInfo}
      link={point.link}
      iconId={point.iconId}
      itemId={point.itemId}
    />
  ))
}
      </ul>
    </section>
  );
};
