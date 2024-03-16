import { Button, Form, Input } from 'antd';
import {
	postOurServices,
	updateOurServices,
} from '../../serviceApiOurServices';
import { useChanged } from '../PanellList/ChangeContext';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const OurServicesForm = ({ item, name, isOpen, setIsOpen }) => {
	const { setChanged } = useChanged();
	const onFinish = async (values) => {
		const formData = {
			uk: {
				title: values.title,
				description: values.description,
			},
			en: {
				title: values.titleEn,
				description: values.descriptionEn,
			},
		};

		const response =
			name === 'postForm'
				? await postOurServices(formData)
				: await updateOurServices(item._id, formData);

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
				title: item?.uk.title,
				description: item?.uk.description,
				titleEn: item?.en.title,
				descriptionEn: item?.en.description,
			}}
			onFinish={onFinish}
			autoComplete="off"
		>
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
				label="Description"
				name="description"
				rules={[
					{
						required: name === 'postForm' ? true : false,
						message: 'Please input description',
					},
				]}
			>
				<ReactQuill style={{ fontWeight: 'normal' }} theme="snow" />
			</Form.Item>

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
				<Input name="titleEn" />
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
				<ReactQuill style={{ fontWeight: 'normal' }} theme="snow" />
			</Form.Item>

			<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
				<Button type="primary" htmlType="submit">
					{name === 'postForm' ? 'Додати' : 'Оновити'}
				</Button>
			</Form.Item>
		</Form>
	);
};
export default OurServicesForm;
