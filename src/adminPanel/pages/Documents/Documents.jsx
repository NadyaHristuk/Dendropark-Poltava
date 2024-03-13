import DocumentsForm from '../../components/forms/DocumentsForm';
import styles from './Documents.module.scss';

const Documents = () => {
	return (
		<div className={styles.father}>
			<div className={styles.container1}>
				{' '}
				<DocumentsForm />
			</div>

			<div className={styles.container2}></div>
		</div>
	);
};

export default Documents;
