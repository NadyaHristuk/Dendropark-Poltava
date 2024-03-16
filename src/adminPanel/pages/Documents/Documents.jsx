import { PanellList } from '../../components/PanellList/PanellList';
import DocumentsForm from '../../components/forms/DocumentsForm';
import { fetchDocuments, deleteDocument } from '../../serviceApiDocuments';
import styles from './Documents.module.scss';
import { ChangedProvider } from '../../components/PanellList/ChangeContext';

const Documents = () => {
	return (
		<div className={styles.father}>
			<ChangedProvider>
				<div className={styles.container1}>
					<DocumentsForm name="postForm" />
				</div>
				<PanellList
					getOperation={fetchDocuments}
					deleteOperation={deleteDocument}
					Form={DocumentsForm}
					path="/documents"
				/>
			</ChangedProvider>
		</div>
	);
};

export default Documents;
