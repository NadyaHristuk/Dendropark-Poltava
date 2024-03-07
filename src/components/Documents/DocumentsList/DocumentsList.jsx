import DocumentsItem from '../DocumentsItem/DocumentsItem';
import { useTranslation } from 'react-i18next';
import css from './DocumentsList.module.scss';

const DocumentsList = ({ items }) => {
  const { t } = useTranslation();
  return (
    <section className={css.documentsSection}>
      <h3 className={css.title}>{t('chronicles.documentsTitle')}</h3>
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
      </section>
  );
};

export default DocumentsList;
