import { useState } from 'react';
import { icons } from '../../../assets';

import s from './LngSwitcher2.module.scss';

const LngSwitcher2 = () => {
  const [language, setLanguage] = useState('UA');
  const [dropDown, setDropDown] = useState(false);

  const handleClick = () => setDropDown(!dropDown);

  return (
    <div className={s.wrapper}>
      <div className={s.select} onClick={handleClick}>
        <p className={s.text}>{language}</p>
        <svg width="17" height="17" className={s.icon}>
          <use href={`${icons}#icon-select-arrow`}></use>
        </svg>
      </div>
      {dropDown && (
        <div className={s.dropDown}>
          <div className={s.language} onClick={() => setLanguage('UA')}>
            UA
          </div>
          <div className={s.language} onClick={() => setLanguage('EN')}>
            EN
          </div>
        </div>
      )}
    </div>
  );
};

export default LngSwitcher2;
