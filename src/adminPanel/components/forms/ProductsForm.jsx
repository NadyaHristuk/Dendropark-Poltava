import { Button, Form, Input, Upload, InputNumber } from 'antd';
import { useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { postProduct, updateProduct } from '../../serviceApiProducts';
import { useChanged } from '../PanellList/ContextProvider/useChanged';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const ProductsForm = ({ name, item, isOpen, setIsOpen }) => {
	const [image, setImage] = useState(null);
	const { setChanged } = useChanged();
	const onFinish = async (values) => {
		const formData = new FormData();
		formData.append('ua[title]', values.title);
		formData.append('ua[imgAlt]', values.imgAlt);
		formData.append('ua[description]', values.description);
		formData.append('en[title]', values.titleEn);
		formData.append('en[imgAlt]', values.imgAltEn);
		formData.append('en[description]', values.descriptionEn);
		formData.append('price', values.price);
		formData.append('image', image);

		const response =
			name === 'postForm'
				? await postProduct(formData)
				: await updateProduct(item._id, formData);

		if (isOpen) setIsOpen(false);
		if (response) setChanged(true);
		return response;
	};

	const normFile = (e) => {
		if (Array.isArray(e)) {
			return e;
		}
		return e?.fileList;
	};

	return (
		<Form
			name="basic"
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 16 }}
			style={{ maxWidth: 600 }}
			initialValues={{
				remember: true,
				title: item?.ua.title,
				description: item?.ua.description,
				titleEn: item?.en.title,
				descriptionEn: item?.en.description,
				price: item?.price,
				imgAlt: item?.ua.imgAlt,
				imgAltEn: item?.en.imgAlt,
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
			<Form.Item
				label="ImgAlt"
				name="imgAlt"
				rules={[
					{
						required: name === 'postForm' ? true : false,
						message: 'Please input alternative text',
					},
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				label="Price"
				name="price"
				rules={[
					{
						required: name === 'postForm' ? true : false,
						message: 'Please input subtitle',
					},
				]}
			>
				<InputNumber name="price" />
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
			<Form.Item
				label="ImgAltEn"
				name="imgAltEn"
				rules={[
					{
						required: name === 'postForm' ? true : false,
						message: 'Please input alternative text',
					},
				]}
			>
				<Input />
			</Form.Item>
			<p style={{ marginBottom: 10 }}>Завантажте Фото</p>
			<Form.Item
				name="image"
				label="Image"
				valuePropName="fileList"
				getValueFromEvent={normFile}
				rules={[
					{
						required: name === 'postForm' ? true : false,
						message: 'Please upload a image!',
					},
				]}
			>
				<Upload.Dragger
					name="logo"
					listType="picture"
					maxCount={1}
					beforeUpload={(file) => {
						setImage(file);
						return false;
					}}
				>
					<Button icon={<UploadOutlined />}>Завантажте фото</Button>
				</Upload.Dragger>
			</Form.Item>

			<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
				<Button type="primary" htmlType="submit">
					{name === 'postForm' ? 'Додати' : 'Оновити'}
				</Button>
			</Form.Item>
		</Form>
	);
};

export default ProductsForm;
