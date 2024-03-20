import { Button, Form, Input } from 'antd';
import { postDocument, updateDocument } from '../../serviceApiDocuments';
import { useChanged } from '../PanellList/ContextProvider/useChanged';

const DocumentsForm = ({ name, item, isOpen, setIsOpen }) => {
	const { setChanged } = useChanged();

	const onFinish = async (values) => {
		const formData = {
			ua: {
				title: values.title,
				subtitle: values.subtitle,
				description: values.description,
			},
			en: {
				title: values.titleEn,
				subtitle: values.subtitleEn,
				description: values.descriptionEn,
			},
			document: values.document,
		};

		const response =
			name === 'postForm'
				? await postDocument(formData)
				: await updateDocument(item._id, formData);
		if (isOpen) setIsOpen(false);
		if (response) setChanged(true);
		return response;
	};

	return (
		<Form
			name={name}
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 16 }}
			style={{ maxWidth: 500 }}
			initialValues={{
				remember: true,
				title: item?.ua.title,
				subtitle: item?.ua.subtitle,
				description: item?.ua.description,
				titleEn: item?.en.title,
				subtitleEn: item?.en.subtitle,
				descriptionEn: item?.en.description,
				document: item?.document,
			}}
			onFinish={onFinish}
			autoComplete="off"
		>
			{/* ua */}
			<p style={{ marginBottom: 10 }}>Заповніть Українською</p>
			<Form.Item
				label="Title"
				name="title"
				rules={[
					{
						required: name === 'postForm' ? true : false,
						message: 'Please input title',
					},
				]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label="Subtitle"
				name="subtitle"
				rules={[
					{
						required: name === 'postForm' ? true : false,
						message: 'Please input subtitle',
					},
				]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label="Description"
				name="description"
				rules={[
					{
						required: name === 'postForm' ? true : false,
						message: 'Please input description',
					},
				]}
			>
				<Input />
			</Form.Item>
			{/* en */}
			<p style={{ marginBottom: 10 }}>Заповніть Англійською</p>
			<Form.Item
				label="TitleEn"
				name="titleEn"
				rules={[
					{
						required: name === 'postForm' ? true : false,
						message: 'Please input title',
					},
				]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label="SubtitleEn"
				name="subtitleEn"
				rules={[
					{
						required: name === 'postForm' ? true : false,
						message: 'Please input subtitle',
					},
				]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label="DescriptionEn"
				name="descriptionEn"
				rules={[
					{
						required: name === 'postForm' ? true : false,
						message: 'Please input description',
					},
				]}
			>
				<Input />
			</Form.Item>
			<p style={{ marginBottom: 10 }}>Додайте посилання на документ</p>
			<Form.Item
				label="Document"
				name="document"
				rules={[
					{
						required: name === 'postForm' ? true : false,
						message: 'Please input document link',
					},
				]}
			>
				<Input />
			</Form.Item>

			<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
				<Button type="primary" htmlType="submit">
					{name === 'postForm' ? 'Додати' : 'Оновити'}
				</Button>
			</Form.Item>
		</Form>
	);
};

export default DocumentsForm;
