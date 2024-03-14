import { useEffect, useState } from 'react';
import { List, Skeleton } from 'antd';
import s from './DocumentList.module.scss';
import { deleteDocument, fetchDocuments } from '../../serviceApiDocuments';

const DocumentList = () => {
	const [documents, setDocuments] = useState([]);

	useEffect(() => {
		const getDocuments = async () => {
			const currentProducts = await fetchDocuments();

			setDocuments(currentProducts);
		};

		getDocuments();
	}, []);

	const updateDocument = () => {};

	return (
		<List
			className={s.list}
			itemLayout="horizontal"
			pagination={{ position: 'bottom', align: 'end' }}
			dataSource={documents}
			renderItem={(item) => (
				<List.Item
					actions={[
						<a key="list-loadmore-edit" onClick={updateDocument}>
							edit
						</a>,
						<a
							key="list-loadmore-delete"
							onClick={() => deleteDocument(item._id)}
						>
							delete
						</a>,
					]}
				>
					<Skeleton loading={item.loading} active>
						<List.Item.Meta title={item.title} description={item.description} />
					</Skeleton>
				</List.Item>
			)}
		/>
	);
};

export default DocumentList;
