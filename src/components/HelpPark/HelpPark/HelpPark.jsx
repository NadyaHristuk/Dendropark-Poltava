import React from 'react';
import { useTranslation } from 'react-i18next';
import css from './HelpPark.module.scss';
import { HelpParkItem } from '../HelpParkItem/HelpParkItem';
import { Visual } from '../Visual/Visual';
import { QrCode } from '../QrCode/QrCode';

export const HelpPark = () => {
  const { t } = useTranslation();
  const list = t('helpPark.list', { returnObjects: true });

  return (
    <section className={css.helpParkBox}>
      <h2 className={css.title}>{t('helpPark.title')}</h2>
      <p className={css.description}>{t('helpPark.description')}</p>

      <div className={css.flexWrap}>
        <div>
          <p className={css.goal}>{t('helpPark.goals')}</p>

          <ul className={css.list}>
            {list.map((item, index) => (
              <HelpParkItem
                key={index}
                iconId={item.iconId}
                title={item.title}
                subtitle={item.subtitle}
              />
            ))}
          </ul>
        </div>
        <QrCode />
      </div>

      <Visual />
    </section>
  );
};
