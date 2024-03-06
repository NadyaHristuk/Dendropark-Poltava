import DocumentsItem from '../DocumentsItem/DocumentsItem';
import css from './DocumentsList.module.scss';

const DocumentsList = ({ items }) => {
  return (
    <>
      <h3 className={css.title}>Документи</h3>
      <ul className={css.list}>
        {items.map(({ id, title, subtitle, description, link }) => (
          <li key={id} className={css.item}>
            <DocumentsItem
              title={title}
              subtitle={subtitle}
              description={description}
              link={link}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default DocumentsList;
