import { useState } from 'react';
import { Button, Form, Input, InputNumber, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { postTrial, updateTrial } from '../../serviceApiTrials';
import { useChanged } from '../PanellList/ChangeContext';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TrialsForm = ({ name, item, isOpen, setIsOpen }) => {
	const [image, setImage] = useState(null);
	const [imageMap, setImageMap] = useState(null);
	const { setChanged } = useChanged();

	const onFinish = async (values) => {
		const formData = new FormData();
		formData.append('uk[title]', values.title);
		formData.append('uk[imgAlt]', values.imgAlt);
		formData.append('uk[text]', values.text);
		formData.append('en[title]', values.titleEn);
		formData.append('en[imgAlt]', values.imgAltEn);
		formData.append('en[text]', values.textEn);
		formData.append('distance', values.distance);
		formData.append('image', image);
		formData.append('mapImage', imageMap);

		const response =
			name === 'postForm'
				? await postTrial(formData)
				: await updateTrial(item._id, formData);

		if (isOpen) setIsOpen(false);
		if (response) setChanged(true);
	};

	const normFile = (e) => {
		if (Array.isArray(e)) {
			return e;
		}
		return e && e.fileList;
	};
	return (
		<Form
			name="basic"
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 16 }}
			style={{ maxWidth: 600, color: '#0F172A' }}
			initialValues={{
				remember: true,
				title: item?.uk.title,
				text: item?.en.text,
				titleEn: item?.en.title,
				textEn: item?.en.text,
				distance: item?.distance,
				imgAlt: item?.uk.imgAlt,
				imgAltEn: item?.en.imgAlt,
			}}
			onFinish={onFinish}
			autoComplete="off"
		>
			{/* uk */}
			<p style={{ marginBottom: 10 }}>Заповніть Українською</p>
			<Form.Item
				label="Distance"
				name="distance"
				rules={[
					{
						required: name === 'postForm' ? true : false,
						message: 'Please input distance',
					},
				]}
			>
				<InputNumber />
			</Form.Item>

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
				label="Text"
				name="text"
				rules={[
					{
						required: name === 'postForm' ? true : false,
						message: 'Please input description',
					},
				]}
			>
				<ReactQuill theme="snow" style={{ fontWeight: 400 }} />
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
				label="TextEn"
				name="textEn"
				rules={[
					{
						required: name === 'postForm' ? true : false,
						message: 'Please input description',
					},
				]}
			>
				<ReactQuill style={{ fontWeight: 'normal' }} theme="snow" />
			</Form.Item>
			<p style={{ marginBottom: 10 }}>Завантажте Фото й Карту</p>
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

export default TrialsForm;
