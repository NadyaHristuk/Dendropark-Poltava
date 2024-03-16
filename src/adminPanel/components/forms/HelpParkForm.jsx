import { Button, Form, Input } from 'antd';
import { postHelpParkData } from '../../serviceApiHelpPark';

const HelpParkForm = () => {
	// const [image, setImage] = useState(null);

	const onFinish = async (values) => {
		const formData = {
			uk: {
				description: values.description,
				buttonText: values.buttonText,
			},
			en: {
				description: values.descriptionEn,
				buttonText: values.buttonTextEn,
			},
			link: values.link,
		};

		const response = await postHelpParkData(formData);
		return response;
	};

	return (
		<Form
			name="basic"
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 16 }}
			style={{ maxWidth: 600 }}
			initialValues={{ remember: true }}
			onFinish={onFinish}
			autoComplete="off"
		>
			<p>Заповніть Українською</p>
			<Form.Item
				label="Description"
				name="description"
				rules={[{ required: true, message: 'Please input title' }]}
			>
				<Input name="description" />
			</Form.Item>
			<Form.Item
				label="ButtonText"
				name="buttonText"
				rules={[{ required: true, message: 'Please input button text' }]}
			>
				<Input />
			</Form.Item>

			<p>Заповніть Англійською</p>
			<Form.Item
				label="DescriptionEn"
				name="descriptionEn"
				rules={[{ required: true, message: 'Please input title english' }]}
			>
				<Input name="descriptionEn" />
			</Form.Item>
			<Form.Item
				label="buttonTextEn"
				name="buttonTextEn"
				rules={[
					{ required: true, message: 'Please input button text english' },
				]}
			>
				<Input name="buttonTextEn" />
			</Form.Item>
			<Form.Item
				label="Link"
				name="link"
				rules={[{ required: true, message: 'Please input link' }]}
			>
				<Input name="link" />
			</Form.Item>

			<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default HelpParkForm;
