import { Button, Form, Input, Upload, InputNumber } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { postTrial } from '../../serviceApiTrials';

const TrialsForm = () => {
	const onFinish = async (values) => {
		const response = await postTrial({
			uk: {
				title: values.title,
				imgAlt: values.subtitle,
				text: values.text,
			},
			en: {
				title: values.titleEn,
				imgAlt: values.imgAltEn,
				text: values.textEn,
			},
			distance: values.distance,
		});
		console.log(' response:', response);
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
	//     "title": "Прогулянка в парку",
	//     "text": "Це опис прогулянки в парку.",
	//     "imgAlt": "Зображення парку"
	//   },
	//   "en": {
	//     "title": "Park Walk",
	//     "text": "This is a description of a walk in the park.",
	//     "imgAlt": "Park Image"
	//   },
	//     "distance": 10,
	//   "image": "Прикріпленний файл",
	//   "mapImage": "Прикріпленний файл"
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
				label="Distance"
				name="distance"
				rules={[{ required: true, message: 'Please input distance' }]}
			>
				<InputNumber />
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
				label="Text"
				name="text"
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
				label="TextEn"
				name="textEn"
				rules={[{ required: true, message: 'Please input description' }]}
			>
				<Input />
			</Form.Item>
			<p>Завантажте Фото й Карту</p>
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
				<Upload
					name="logo"
					action="https://dendropark-poltava-back.onrender.com/api/trials"
					listType="picture"
				>
					<Button icon={<UploadOutlined />}>Click to upload</Button>
				</Upload>
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
				<Upload
					name="logo"
					action="https://dendropark-poltava-back.onrender.com/api/trials"
					listType="picture"
				>
					<Button icon={<UploadOutlined />}>Click to upload</Button>
				</Upload>
			</Form.Item>

			<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default TrialsForm;
