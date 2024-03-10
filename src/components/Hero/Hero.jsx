import { HashLink } from 'react-router-hash-link';
import Map from '../Map/Map';
import scss from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={scss.hero}>
      <div className={scss.info}>
        <p className={scss.text}>
          Пам’ятка{' '}
          <span className={scss.textColor}>садово-паркового мистецтва</span>{' '}
          загальнодержавного значення
        </p>
        <div className={scss.wrapper}>
          <h1 className={scss.title}>
            Запрошуємо до Полтавського міського парку!
          </h1>
          <HashLink smooth to="/about#parkLocation" className={scss.link}>
            Локації парку
          </HashLink>
        </div>
      </div>

      <Map />
    </section>
  );
};

export default Hero;
