import { useEffect, useState } from 'react';
import { List } from 'antd';
import s from './DocumentList.module.scss';
import ModalForm from '../Modal/Modal';
import { useChanged } from './ContextProvider/useChanged';
import { PanellListItem } from './PanellListItem';
import DeleteModal from '../Modal/DeleteModal';

export const PanellList = ({ getOperation, deleteOperation, Form }) => {
	const [modalIsOpen, setIsOpen] = useState(false);
	const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
	const [idToDelete, setIdToDelete] = useState('');
	const [currentItem, setCurrentItem] = useState({});
	const [items, setItems] = useState([]);
	const { changed, setChanged } = useChanged();
	const [pagination, setPagination] = useState({
		current: 1,
		pageSize: 3,
		total: 0,
	});

	useEffect(() => {
		const getData = async () => {
			const currentItems = await getOperation();

			setItems(currentItems);
			setPagination((prevPagination) => ({
				...prevPagination,
				total: currentItems.total,
			}));
		};

		getData();
		return () => setChanged(false);
	}, [getOperation, changed, setChanged]);

	const deleteCurrentDocument = async (id) => {
		await deleteOperation(id)
			.then(() => {
				const updateDocuments = items.filter((document) => document._id !== id);
				setItems(updateDocuments);
				setDeleteModalIsOpen(false);
			})
			.catch((err) => console.log(err));
	};

	const closeModal = () => setIsOpen(false);
	const openModal = () => setIsOpen(true);
	const closeDeleteModal = () => setDeleteModalIsOpen(false);
	const openDeleteModal = (id) => {
		setIdToDelete(id);
		setDeleteModalIsOpen(true);
	};

	const openFormEdit = async (id) => {
		const dataItem = items.find((document) => document._id === id);

		await setCurrentItem(dataItem);
		openModal();
	};

	const handlePaginationChange = (newPage, newPageSize) => {
		setPagination({
			...pagination,
			current: newPage,
			pageSize: newPageSize,
		});
	};

	return (
		<>
			<List
				className={s.list}
				itemLayout="horizontal"
				pagination={{
					position: 'bottom',
					align: 'end',
					current: pagination.current,
					pageSize: pagination.pageSize,
					total: pagination.total,
					onChange: handlePaginationChange,
				}}
				dataSource={items}
				renderItem={(item) => (
					<PanellListItem
						item={item}
						openDeleteModal={openDeleteModal}
						openFormEdit={openFormEdit}
					/>
				)}
			/>
			<ModalForm modalIsOpen={modalIsOpen} closeModal={closeModal}>
				<Form
					name="updateForm"
					item={currentItem}
					setIsOpen={setIsOpen}
					modalIsOpen={modalIsOpen}
				/>
			</ModalForm>
			<DeleteModal
				modalIsOpen={deleteModalIsOpen}
				closeModal={closeDeleteModal}
			>
				<div className={s.deleteModalContainer}>
					<h3>Ви підтверджуєте що хочете це видалити?</h3>
					<div className={s.buttonsContainer}>
						<button
							className={s.cancelBtn}
							type="button"
							onClick={closeDeleteModal}
						>
							Скасувати
						</button>
						<button
							className={s.deleteBtn}
							type="button"
							onClick={() => deleteCurrentDocument(idToDelete)}
						>
							Видалити
						</button>
					</div>
				</div>
			</DeleteModal>
		</>
	);
};
