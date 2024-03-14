import { Button, Form, Input } from 'antd';
import { postOurServices } from '../../serviceApiOurServices';

const OurServicesForm = () => {
	const onFinish = async (values) => {
		const response = await postOurServices({
			uk: {
				title: values.title,
				description: values.description,
			},
			en: {
				title: values.titleEn,
				description: values.descriptionEn,
			},
			document: values.document,
		});
		console.log('Login response:', response);
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

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
			<p>Заповніть Українською</p>
			<Form.Item
				label="Назва послуги:"
				name="title"
				rules={[{ required: true, message: 'Please input title' }]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label="Опис послуги:"
				name="description"
				rules={[{ required: true, message: 'Please input description' }]}
			>
				<Input />
			</Form.Item>

			<p>Заповніть Англійською</p>
			<Form.Item
				label="Title:"
				name="titleEn"
				rules={[{ required: true, message: 'Please input title' }]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label="Description:"
				name="descrintionEn"
				rules={[{ required: true, message: 'Please input description' }]}
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
export default OurServicesForm;
