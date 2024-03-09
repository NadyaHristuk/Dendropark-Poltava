import React from 'react';
import { useTranslation } from 'react-i18next';
import css from './HelpPark.module.scss';
import { HelpParkItem } from './HelpParkItem';
import icons from '../../assets/icons/sprite.svg';
import { Visual } from './Visual/Visual';

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

        <div className={css.desktopDiv}>
          <p className={css.currentGoal}>{t('helpPark.currentGoal')}</p>

          <div className={css.grCodeWrap}>
            <a className={css.qrCodeLink} href="/">
              <svg className={css.qrCodeImg} width="196" height="195">
                <use href={`${icons}#icon-qrCode`}></use>
              </svg>
            </a>
          </div>
          <a className={css.helpLink} href="/">
            <svg className={css.heartIcon}>
              <use href={`${icons}#icon-simplethankyou`}></use>
            </svg>
            {t('helpPark.button')}
          </a>
        </div>
      </div>

      <Visual />
    </section>
  );
};
