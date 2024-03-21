import { useState, useEffect } from "react";
import DocumentsItem from "../DocumentsItem/DocumentsItem";
import DocumentsListUI from "./DocumentsListUI";
import { useTranslation } from "react-i18next";
import { useMedia } from "../../../hooks/useMedia";
import { fetchDocuments } from "../../../adminPanel/serviceApiDocuments";
import { LANGUAGE_STORAGE_KEY } from "../../../constants";
import { icons } from "../../../assets";
import css from "./DocumentsList.module.scss";

const DocumentsList = () => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { t } = useTranslation();
  const { isMobile } = useMedia();
  const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) || "ua";

  useEffect(() => {
    async function fetchDocumentsList() {
      try {
        setLoading(true);
        const response = await fetchDocuments();
        if (response) {
          setDocuments(response);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchDocumentsList();
  }, []);

  return (
    <section className={css.documentsSection} id="documents-section">
      <h3 className={css.title}>{t("chronicles.documentsTitle")}</h3>
      {!loading && documents.length > 0 ? (
        isMobile ? (
          <DocumentsListUI items={documents} />
        ) : (
          <ul className={css.list}>
            {documents.map((document) => (
              <li key={document._id} className={css.item}>
                <DocumentsItem
                  title={document[savedLanguage].title}
                  subtitle={document[savedLanguage].subtitle}
                  description={document[savedLanguage].description}
                  link={document.document}
                />
              </li>
            ))}
          </ul>
        )
      ) : (
        <p className={css.message}>
          <svg className={css.icon_attention}>
            <use href={`${icons}#icon-attention`}></use>
          </svg>
          Поки що не має документів, спробуйте згодом...
        </p>
      )}
    </section>
  );
};

export default DocumentsList;
