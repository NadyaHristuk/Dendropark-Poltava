import { Button, Form, Input } from 'antd';
import { postDocument, updateDocument } from '../../serviceApiDocuments';

const DocumentsForm = ({ name, document }) => {
	const onFinish = async (values) => {
		const formData = {
			uk: {
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
				: await updateDocument(document._id, formData);

		return response;
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<Form
			name={name}
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 16 }}
			style={{ maxWidth: 600 }}
			initialValues={{
				remember: true,
				title: document?.uk.title,
				subtitle: document?.uk.subtitle,
				description: document?.uk.description,
				titleEn: document?.en.title,
				subtitleEn: document?.en.subtitle,
				descriptionEn: document?.en.description,
				document: document?.document,
			}}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete="off"
		>
			{/* uk */}
			<p>Заповніть Українською</p>
			<Form.Item
				label="Title"
				name="title"
				rules={[{ required: true, message: 'Please input title' }]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label="Subtitle"
				name="subtitle"
				rules={[{ required: true, message: 'Please input subtitle' }]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label="Description"
				name="description"
				rules={[{ required: true, message: 'Please input description' }]}
			>
				<Input />
			</Form.Item>
			{/* en */}
			<p>Заповніть Англійською</p>
			<Form.Item
				label="TitleEn"
				name="titleEn"
				rules={[{ required: true, message: 'Please input title' }]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label="SubtitleEn"
				name="subtitleEn"
				rules={[{ required: true, message: 'Please input subtitle' }]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label="DescriptionEn"
				name="descriptionEn"
				rules={[{ required: true, message: 'Please input description' }]}
			>
				<Input />
			</Form.Item>
			<p>Додайте посилання на документ</p>
			<Form.Item
				label="Document"
				name="document"
				rules={[{ required: true, message: 'Please input document link' }]}
			>
				<Input />
			</Form.Item>

			<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default DocumentsForm;
