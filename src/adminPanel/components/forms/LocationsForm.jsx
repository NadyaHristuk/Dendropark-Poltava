import { Button, Form, Input, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { postLocation } from '../../serviceApiLocations';
import { useState } from 'react';

const LocationsForm = () => {
	const [image, setImage] = useState(null);
	const [imageMap, setImageMap] = useState(null);

	const onFinish = async (values) => {
		const formData = new FormData();
		formData.append('uk[title]', values.title);
		formData.append('uk[imgAlt]', values.imgAlt);
		formData.append('uk[description]', values.description);
		formData.append('en[title]', values.titleEn);
		formData.append('en[imgAlt]', values.imgAltEn);
		formData.append('en[description]', values.descriptionEn);
		formData.append('number', values.number);
		formData.append('locationId', values.locationId);
		formData.append('image', image);
		formData.append('mapImage', imageMap);

		const response = await postLocation(formData);
		return response;
	};

	const normFile = (e) => {
		if (Array.isArray(e)) {
			return e;
		}
		return e?.fileList;
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
	// {
	//   "uk": {
	//     "title": "Назва місця",
	//     "description": "Опис місця",
	//     "imgAlt": "Альтернативний текст для зображення"
	//   },
	//   "en": {
	//     "title": "Location Title",
	//     "description": "Location Description",
	//     "imgAlt": "Image Alt Text"
	//   },
	//     "number": "Номер",
	//   "locationId": "locationId",
	//   "image": "Прикріпленний файл"
	//    "mapImage": "Прикріпленний файл"
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
			<p>Заповніть Українською</p>
			<Form.Item
				label="LocationId"
				name="locationId"
				rules={[{ required: true, message: 'Please input distance' }]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				label="Number"
				name="number"
				rules={[{ required: true, message: 'Please input distance' }]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label="Title"
				name="title"
				rules={[{ required: true, message: 'Please input title' }]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label="ImgAlt"
				name="imgAlt"
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
				label="ImgAltEn"
				name="imgAltEn"
				rules={[{ required: true, message: 'Please input alternative text' }]}
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

			<p>Завантажте Фото й Мапу</p>
			<Form.Item
				name="image"
				label="Image"
				valuePropName="fileList"
				getValueFromEvent={normFile}
				rules={[
					{
						required: true,
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
					<Button icon={<UploadOutlined />}>Click or drag to upload</Button>
				</Upload.Dragger>
			</Form.Item>
			<Form.Item
				name="mapImage"
				label="MapImage"
				valuePropName="fileList"
				getValueFromEvent={normFile}
				rules={[
					{
						required: true,
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
					<Button icon={<UploadOutlined />}>Click or drag to upload</Button>
				</Upload.Dragger>
			</Form.Item>

			<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default LocationsForm;
