import React from 'react';
import { useTranslation } from 'react-i18next';
import { AttentionItem } from './AttentionItem';
import css from './AttentionVisitors.module.scss';

export const AttentionVisitors = () => {
  const { t } = useTranslation();

  return (
    <section className={css.container}>
      <h2>{t('title')}</h2>
      <p>{t('attentionVisitors.description')}</p>
      <ul>{/* {data}.map(({(title, description,moreInfo)})) */}</ul>
      {/* <AttentionItem /> */}
    </section>
  );
};
