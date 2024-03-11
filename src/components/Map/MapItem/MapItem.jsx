import { useRef, useState } from 'react';
import { icons } from '../../../assets';
import { CSSTransition } from 'react-transition-group';
import scss from './MapItem.module.scss';
import "./transition.scss"

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
      {item.number}

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
            <div className={scss.number}>{item.number}</div>
            <h3 className={scss.title}>{item.title}</h3>
            <p className={scss.description}>{item.description}</p>
            <a className={scss.link} href="">
              Детальніше
              <svg className={scss.linkIcon}>
                <use href={`${icons}#icon-arrow-up`}></use>
              </svg>
            </a>
          </div>
        </div>
      </CSSTransition>
    </li>
  );
};

export default MapItem;
