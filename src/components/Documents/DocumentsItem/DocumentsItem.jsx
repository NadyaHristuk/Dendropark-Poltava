import css from './DocumentsItem.module.scss';

export default function DocumentsItem({ title, subtitle, description, link }) {
  return (
    <>
      <a className={css.link} href={link} target="_blank">
        {subtitle}
      </a>
      <p className={css.title}>{title}</p>
      <p className={css.description}>{description}</p>
    </>
  );
}
