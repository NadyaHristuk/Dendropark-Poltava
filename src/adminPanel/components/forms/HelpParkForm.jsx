import { Button, Form, Input } from 'antd';
import { postHelpParkData, updateHelpParkData } from '../../serviceApiHelpPark';
import { useChanged } from '../PanellList/ContextProvider/useChanged';

const HelpParkForm = ({ name, item, isOpen, setIsOpen }) => {
	const { setChanged } = useChanged();
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

		const response =
			name === 'postForm'
				? await postHelpParkData(formData)
				: await updateHelpParkData(item._id, formData);
		if (isOpen) setIsOpen(false);
		if (response) setChanged(true);
		return response;
	};

	return (
		<Form
			name="basic"
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 16 }}
			style={{ maxWidth: 600 }}
			initialValues={{
				remember: true,
				description: item?.uk.description,
				descriptionEn: item?.en.description,
				link: item?.link,
				buttonText: item?.uk.buttonText,
				buttonTextEn: item?.en.buttonText,
			}}
			onFinish={onFinish}
			autoComplete="off"
		>
			<p style={{ marginBottom: 10 }}>Заповніть Українською</p>
			<Form.Item
				label="Description"
				name="description"
				rules={[
					{
						required: name === 'postForm' ? true : false,
						message: 'Please input title',
					},
				]}
			>
				<Input name="description" />
			</Form.Item>
			<Form.Item
				label="ButtonText"
				name="buttonText"
				rules={[
					{
						required: name === 'postForm' ? true : false,
						message: 'Please input button text',
					},
				]}
			>
				<Input />
			</Form.Item>

			<p style={{ marginBottom: 10 }}>Заповніть Англійською</p>
			<Form.Item
				label="DescriptionEn"
				name="descriptionEn"
				rules={[
					{
						required: name === 'postForm' ? true : false,
						message: 'Please input title english',
					},
				]}
			>
				<Input name="descriptionEn" />
			</Form.Item>
			<Form.Item
				label="buttonTextEn"
				name="buttonTextEn"
				rules={[
					{
						required: name === 'postForm' ? true : false,
						message: 'Please input button text english',
					},
				]}
			>
				<Input name="buttonTextEn" />
			</Form.Item>
			<Form.Item
				label="Link"
				name="link"
				rules={[
					{
						required: name === 'postForm' ? true : false,
						message: 'Please input link',
					},
				]}
			>
				<Input name="link" />
			</Form.Item>

			<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
				<Button type="primary" htmlType="submit">
					{name === 'postForm' ? 'Додати' : 'Оновити'}
				</Button>
			</Form.Item>
		</Form>
	);
};

export default HelpParkForm;
