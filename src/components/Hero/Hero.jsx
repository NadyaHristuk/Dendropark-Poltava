import { HashLink } from 'react-router-hash-link';
import Map from '../Map/Map';
import scss from './Hero.module.scss';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className={scss.hero}>
      <div className={scss.info}>
        <p className={scss.text}>
          {t('hero.textFirst')}
          <span className={scss.textColor}>{t('hero.textColor')}</span>
          {t('hero.textLast')}
        </p>
        <div className={scss.wrapper}>
          <h1 className={scss.title}>
            {t('hero.title')}
          </h1>
          <HashLink smooth to="/about#parkLocation" className={scss.link}>
            {t('hero.link')}
          </HashLink>
        </div>
      </div>

      <Map />
    </section>
  );
};

export default Hero;
