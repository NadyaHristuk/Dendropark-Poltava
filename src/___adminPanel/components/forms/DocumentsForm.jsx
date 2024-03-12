import { Button, Form, Input } from 'antd';
import { login } from '../../srviceApiAuth';

const DocumentsForm = () => {
	const onFinish = async (values) => {
		try {
			const response = await login({
				email: values.email,
				password: values.password,
			});
			console.log('Login response:', response);
		} catch (error) {
			throw new Error(error.message);
		}
	};
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
	// {
	//   "uk": {
	//     "title": "Назва документа",
	//     "subtitle": "Підзаголовок документа",
	//     "description": "Опис документа"
	//   },
	//   "en": {
	//     "title": "Document Title",
	//     "subtitle": "Document Subtitle",
	//     "description": "Document Description"
	//   },
	//   "document": "Document Content"
	// }
	return (
		<Form
			name="basic"
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 16 }}
			style={{ maxWidth: 600 }}
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete="off"
		>
			{/* uk */}
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
				<Input.Password />
			</Form.Item>

			<Form.Item
				label="Description"
				name="description"
				rules={[{ required: true, message: 'Please input description' }]}
			>
				<Input.Password />
			</Form.Item>
			{/* en */}
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
				<Input.Password />
			</Form.Item>

			<Form.Item
				label="DescriptionEn"
				name="descriptionEn"
				rules={[{ required: true, message: 'Please input description' }]}
			>
				<Input.Password />
			</Form.Item>

			<Form.Item
				label="Document"
				name="document"
				rules={[{ required: true, message: 'Please input document link' }]}
			>
				<Input.Password />
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
