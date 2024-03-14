// import { useState } from 'react';
import { Button, Form, Input } from 'antd';
// import { UploadOutlined } from '@ant-design/icons';
import { postHelpParkData } from '../../serviceApiHelpPark';

// const props = {
// 	name: 'file',
// 	action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
// 	headers: {
// 		authorization: 'authorization-text',
// 	},
// 	onChange(info) {
// 		if (info.file.status !== 'uploading') {
// 			console.log(info.file, info.fileList);
// 		}
// 		if (info.file.status === 'done') {
// 			message.success(`${info.file.name} file uploaded successfully`);
// 		} else if (info.file.status === 'error') {
// 			message.error(`${info.file.name} file upload failed.`);
// 		}
// 	},
// };

const HelpParkForm = () => {
	// const [image, setImage] = useState(null);

	const onFinish = async (values) => {
		// const formData = new FormData();
		// formData.append('uk[description]', values.description);
		// formData.append('uk[buttonText]', values.buttonText);
		// formData.append('en[description]', values.descriptionEn);
		// formData.append('en[buttonText]', values.buttonTextEn);
		// formData.append('link', values.link);
		// formData.append('image', image);
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

	// {
	//     "uk": {
	//         "buttonText": "Прогулянка в парку",
	//         "description": "Це опис прогулянки в парку.",
	//     },
	//     "en": {
	//         "buttonText": "Park Walk",
	//         "description": "This is a description of a walk in the park.",
	//     },
	//     "owner": "65eca34887b0cdc5bdd53ad8",
	//     "_id": "65f025cbaef0313843135303",
	//     "createdAt": "2024-03-12T09:52:11.073Z",
	//     "updatedAt": "2024-03-12T09:52:11.073Z"
	// }

	// const normFile = (e) => {
	// 	if (Array.isArray(e)) {
	// 		return e;
	// 	}
	// 	return e?.fileList;
	// };

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

			{/* <Form.Item
				label="Завантажте QR-code"
				name="qrCode"
				valuePropName="fileList"
				getValueFromEvent={normFile}
				rules={[{ required: true, message: 'Please input qr-code' }]}
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
					<Button icon={<UploadOutlined />}>Завантажити</Button>
				</Upload.Dragger>
			</Form.Item> */}

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
