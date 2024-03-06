import scss from './AdministrationItem.module.scss';

const AdministrationItem = ({ name, photo, photoRetina, text }) => {
  return (
    <li className={scss.item}>
      <img
        className={scss.photo}
        src={photo}
        alt={name}
        srcSet={`${photo} 1x, ${photoRetina} 2x`}
      />
      <div className={scss.info}>
        <h3 className={scss.name}>{name}</h3>
        <p className={scss.text}>{text}</p>
      </div>
    </li>
  );
};

export default AdministrationItem;
