import scss from "./StudentsItems.module.scss";
import { icons } from "../../../assets";
import { useState } from "react";
import { LANGUAGE_STORAGE_KEY } from "../../../constants";

const StudentsItems = ({ name, role, linkedin, src }) => {
  const [language] = useState(
    localStorage.getItem(LANGUAGE_STORAGE_KEY) ?? "ua"
  );

  return (
    <li className={scss.list_item}>
      <a target="_blank" className={scss.link} href={linkedin}>
        <img className={scss.img} src={src} alt="photo-student" />
        <div className={scss.wrapper}>
          <p className={scss.name}>{name[language]}</p>
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
