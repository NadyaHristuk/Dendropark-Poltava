import scss from './StudentsItems.module.scss';
import { icons } from '../../../assets';

const StudentsItems = ({ name, role, linkedin, src }) => {
  return (
    <li className={scss.list_item}>
      <a target="_blank" className={scss.link} href={linkedin}>
        <img className={scss.img} src={src} alt="photo-student" />
        <div className={scss.wrapper}>
          <p className={scss.name}>{name}</p>
          <p className={scss.role}>{role}</p>
          <svg className={scss.linkedin_icon}>
            <use href={`${icons}#icon-linkedin`}></use>
          </svg>
        </div>
      </a>
    </li>
  );
};

export default StudentsItems;
