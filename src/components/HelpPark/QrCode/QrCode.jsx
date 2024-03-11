import React from 'react';
import css from './QrCode.module.scss';
import { useTranslation } from 'react-i18next';
import icons from '/src/assets/icons/sprite.svg';

export const QrCode = () => {
  const { t } = useTranslation();

  return (
    <div className={css.desktopDiv}>
      <p className={css.currentGoal}>{t('helpPark.currentGoal')}</p>

      <div className={css.qrCodeWrap}>
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
  );
};
