import DocumentList from '../../components/DocumentsList/DocumentList';
import DocumentsForm from '../../components/forms/DocumentsForm';
import styles from './Documents.module.scss';

const Documents = () => {
	return (
		<div className={styles.father}>
			<div className={styles.container1}>
				<DocumentsForm name="postForm" />
			</div>
			<DocumentList />
		</div>
	);
};

export default Documents;
