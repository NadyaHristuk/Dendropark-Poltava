import { useRef, useState } from 'react';
import { icons } from '../../../assets';
import { CSSTransition } from 'react-transition-group';
import scss from './MapItem.module.scss';
import './transition.scss';
import { HashLink } from 'react-router-hash-link';
import { arabicToRoman } from '../../AboutPark/LocationItem/romanNumerals';

const MapItem = ({ item, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const nodeRef = useRef(null);

  const handleChange = () => {
    setIsVisible(!isVisible);
  };

  return (
    <li
      className={`${scss.item} ${scss[className]}`}
      onMouseEnter={handleChange}
      onMouseLeave={handleChange}
    >
      {arabicToRoman(item.number)}

      <CSSTransition
        in={isVisible}
        timeout={200}
        classNames="my-node"
        unmountOnExit={true}
        nodeRef={nodeRef}
      >
        <div className={scss.modal} ref={nodeRef}>
          <div className={scss.content}>
            <button className={scss.close} onClick={handleChange}>
              <svg className={scss.closeIcon}>
                <use href={`${icons}#icon-close`}></use>
              </svg>
            </button>
            <div className={scss.number}>{arabicToRoman(item.number)}</div>
            <h3 className={scss.title}>{item.title}</h3>
            <p className={scss.description}>{item.description}</p>
            <HashLink
              smooth
              to={`/about#${item.locationID}`}
              className={scss.link}
            >
              Детальніше
              <svg className={scss.linkIcon}>
                <use href={`${icons}#icon-arrow-up`}></use>
              </svg>
            </HashLink>
          </div>
        </div>
      </CSSTransition>
    </li>
  );
};

export default MapItem;
