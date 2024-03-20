import { Button, Form, Input, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { postLocation, updateLocation } from '../../serviceApiLocations';
import { useState } from 'react';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useChanged } from '../PanellList/ContextProvider/useChanged';

const LocationsForm = ({ name, item, isOpen, setIsOpen }) => {
	const [image, setImage] = useState(null);
	const [imageMap, setImageMap] = useState(null);
	const { setChanged } = useChanged();

	const onFinish = async (values) => {
		const formData = new FormData();
		formData.append('ua[title]', values.title);
		formData.append('ua[imgAlt]', values.imgAlt);
		formData.append('ua[description]', values.description);
		formData.append('en[title]', values.titleEn);
		formData.append('en[imgAlt]', values.imgAltEn);
		formData.append('en[description]', values.descriptionEn);
		formData.append('number', values.number);
		formData.append('numberArabic', values.numberArabic);
		formData.append('image', image);
		formData.append('mapImage', imageMap);

		const response =
			name === 'postForm'
				? await postLocation(formData)
				: await updateLocation(item._id, formData);

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
				distance: item?.distance,
				number: item?.number,
				numberArabic: item?.numberArabic,
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
				label="ImgAlt"
				name="imgAlt"
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
				<ReactQuill style={{ fontWeight: 'normal' }} theme="snow" />
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
			<p style={{ marginBottom: 10 }}>Номер локації римськими та арабськими цифрами</p>
			<Form.Item
				label="Number"
				name="number"
				rules={[
					{
						required: name === 'postForm' ? true : false,
						message: 'Please input distance',
					},
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				label="NumberArabic"
				name="numberArabic"
				rules={[
					{
						required: name === 'postForm' ? true : false,
						message: 'Please input distance',
					},
				]}
			>
				<Input />
			</Form.Item>
			<p style={{ marginBottom: 10 }}>Завантажте Фото й Мапу</p>
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
					name="image"
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
			<Form.Item
				name="mapImage"
				label="MapImage"
				valuePropName="fileList"
				getValueFromEvent={normFile}
				rules={[
					{
						required: name === 'postForm' ? true : false,
						message: 'Please upload a file!',
					},
				]}
			>
				<Upload.Dragger
					name="mapImage"
					listType="picture"
					maxCount={1}
					beforeUpload={(file) => {
						setImageMap(file);
						return false;
					}}
				>
					<Button icon={<UploadOutlined />}>Завантажте мапу</Button>
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

export default LocationsForm;
