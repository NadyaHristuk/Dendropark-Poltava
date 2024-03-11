import { useTranslation } from 'react-i18next';
import { Picture } from '../Picture/Picture';
import { levVaingortPicture } from '../Picture/levVaingortPicture';
import { subotnikPicture } from '../Picture/subbotnikPicture';
import { yaninaYakivnaPicture } from '../Picture/yaninaYakivna';
import css from './HistoryCreation.module.scss';
import { icons } from '../../../assets';

export const HistoryCreation = ({ onClick }) => {
  const { t } = useTranslation();
  return (
    <div className={css.historyCreationContainer}>
      <p className={css.historyCreationText}>
        {t('about.descriptionFirstParagraph')}
        <br />
        {t('about.descriptionSecondParagraph')}
        <br />
        {t('about.descriptionThirdParagraph')}
      </p>
      <div
        className={`${css.historyCreationPicturesContainer} ${css.historyCreationSection}`}
      >
        <div className={` ${css.poltavBatleText}`}>
          <h2 className={css.historyCreationTitle}>Історія створення</h2>
          <p className={`${css.historyCreationText}`}>
            За часів Полтавської баталії ця територія була густою незайманою
            дібровою. Яківчанський ліс переходив у діброву на Монастирській
            горі. Під час Другої світової війни зелений масив був вирубаний
            націонал-соціалістами. Розбудова парку почалася у квітні 1962 р.
            Рішенням Ради Міністрів України від 4 березня 1962 року «Про
            закладку 9 показових парків у обласних центрах України» було
            передбачено створення в Полтаві дендропарку. <br />А вже 13—14
            квітня було закладено парк площею 17 га. У березні 1963 року його
            було включено до списку ботанічних садів і дендропарків України.
            Ініціаторами проєкту були головний архітектор міста Лев Вайнгорт та
            дендролог Яніна Яценко, яка віддала парку 40 років свого життя.
          </p>
        </div>

        <div className={`${css.levVaingortContainer} `}>
          <Picture pictures={levVaingortPicture} />

          <p className={css.pictureDescription}>
            Головний архітектор Лев Вайнгорт перед схемою майбутнього парку (16
            квітня 1962)
          </p>
        </div>
        <div className={`${css.ninaYacenkoContainer}`}>
          <Picture pictures={yaninaYakivnaPicture} />

          <p className={css.pictureDescription}>
            Яніна Яківна Яценко (31 травня 1926; Ставище Київської області - 2
            грудня 2016 р., м. Полтава) — засновник та забудовник Полтавського
            дендропарку, автор проекту «Парк на полі Полтавської битви».
          </p>
        </div>
        <div className={`${css.subotnikContainer}`}>
          <Picture pictures={subotnikPicture} />
          <p className={`${css.pictureDescription} ${css.subotnikText}`}>
            Суботник з метою лісонасаджень на території майбутнього дендропарку.
            13-14.04.1962 р.
          </p>
        </div>
      </div>
      <div className={css.historyCreationSection}>
        <p className={css.historyCreationText}>
          Схематичний план зон «Лісостепу» та «Української діброви» розробив
          тодішній головний архітектор міста Л.С. Вайнгорт та ландшафтний
          архітектор В. В. Жихарєв. Проект посадок на решті території виконала
          дендролог Я. Я. Яценко за порадами заввідділу дендрології Ботанічного
          саду АН УРСР професора Л. І. Рубцова. <br />
          Дендропарки України «Тростянець», «Софіївка», «Олександрія» надсилали
          посадковий матеріал, на базі якого і було створено колекцію порід
          дерев та кущів — понад 200 видів. <br />З 1977 року згідно з
          постановою Держкомприроди УРСР його оголошують заповідним зі статусом
          парку-пам'ятки садово-паркового мистецтва республіканського значення.
          У 1987 році відбувся Всесоюзний конкурс парків, де Полтавський міський
          парк (дендропарк) посів друге місце після Ізмайлівського парку міста
          Москви. У 1990 році парк отримує статус парку-пам'ятки
          садово-паркового мистецтва загальнодержавного значення.
        </p>
      </div>

      <button className={css.reduceButton} onClick={onClick}>
        Згорнути
        <svg className={css.vectorIcon}>
          <use href={`${icons}#icon-Vector-top`}></use>
        </svg>
      </button>
    </div>
  );
};
