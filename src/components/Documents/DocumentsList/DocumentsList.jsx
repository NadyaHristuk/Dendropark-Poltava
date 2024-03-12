import { useState, useEffect } from 'react';
import DocumentsItem from '../DocumentsItem/DocumentsItem';
import DocumentsListUI from './DocumentsListUI';
import { useTranslation } from 'react-i18next';
import { useMedia } from '../../../hooks/useMedia';
import fetchDocuments from './DocumentsApi';
import documents from '../documents';
import css from './DocumentsList.module.scss';

const DocumentsList = () => {
	const [documents, setDocuments] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const { t } = useTranslation();
	const { isMobile } = useMedia();

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
		<section className={css.documentsSection}>
			<h3 className={css.title}>{t('chronicles.documentsTitle')}</h3>
			{loading ? (
				<p>Loading...</p>
			) : error ? (
				<p>Error: {error}</p>
			) : documents.length > 0 ? (
				isMobile ? (
					<DocumentsListUI items={documents} />
				) : (
					<ul className={css.list}>
						{documents.map(({ id, title, subtitle, description, link }) => (
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
				)
			) : (
				<p>Поки що не має документів, спробуйте згодом...</p>
			)}
		</section>
	);
};

export default DocumentsList;
