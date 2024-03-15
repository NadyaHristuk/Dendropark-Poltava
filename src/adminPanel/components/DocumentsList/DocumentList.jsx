import { useEffect, useState } from 'react';
import { List, Skeleton } from 'antd';
import s from './DocumentList.module.scss';
import { deleteDocument, fetchDocuments } from '../../serviceApiDocuments';
import ModalForm from '../Modal/Modal';
import DocumentsForm from '../forms/DocumentsForm';

const DocumentList = () => {
	const [modalIsOpen, setIsOpen] = useState(false);
	const [currentDocument, setCurrentDocuments] = useState({});
	const [documents, setDocuments] = useState([]);

	useEffect(() => {
		const getDocuments = async () => {
			const currentProducts = await fetchDocuments();

			setDocuments(currentProducts);
		};

		getDocuments();
	}, []);

	const deleteCurrentDocument = (id) => {
		deleteDocument(id)
			.then(() => {
				const updateDocuments = documents.filter(
					(document) => document._id !== id
				);
				setDocuments(updateDocuments);
			})
			.catch((err) => console.log(err));
	};

	const closeModal = () => setIsOpen(false);
	const openModal = () => setIsOpen(true);

	const openFormEdit = async (id) => {
		const document = documents.find((document) => document._id === id);

		setCurrentDocuments(document);

		openModal();
	};

	return (
		<>
			<List
				className={s.list}
				itemLayout="horizontal"
				pagination={{ position: 'bottom', align: 'end' }}
				dataSource={documents}
				renderItem={(item) => (
					<List.Item
						actions={[
							<a
								key="list-loadmore-edit"
								onClick={() => openFormEdit(item._id)}
							>
								edit
							</a>,
							<a
								key="list-loadmore-delete"
								onClick={() => deleteCurrentDocument(item._id)}
							>
								delete
							</a>,
						]}
					>
						<Skeleton loading={item.loading} active>
							<List.Item.Meta
								title={item.title}
								description={item.description}
							/>
						</Skeleton>
					</List.Item>
				)}
			/>
			<ModalForm modalIsOpen={modalIsOpen} closeModal={closeModal}>
				<DocumentsForm name="updateForm" document={currentDocument} />
			</ModalForm>
		</>
	);
};

export default DocumentList;
