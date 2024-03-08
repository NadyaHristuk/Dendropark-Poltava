import css from './ChroniclesItem.module.scss';

const ChroniclesItem = ({ url, title, description }) => {
  return (
    <>
      <img className={css.photo} src={url} alt={title} />
      <div className={css.info}>
        <h4 className={css.title}>{title}</h4>
        <p className={css.description}>{description}</p>
        <button className={css.button}>Читати далі</button>
      </div>
    </>
  );
};

export default ChroniclesItem;
