import React from 'react';
import { Button, Form, Input, message, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { postHelpParkData } from '../../serviceApiHelpPark';

const props = {
	name: 'file',
	action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
	headers: {
		authorization: 'authorization-text',
	},
	onChange(info) {
		if (info.file.status !== 'uploading') {
			console.log(info.file, info.fileList);
		}
		if (info.file.status === 'done') {
			message.success(`${info.file.name} file uploaded successfully`);
		} else if (info.file.status === 'error') {
			message.error(`${info.file.name} file upload failed.`);
		}
	},
};

const HelpParkForm = () => {
	const onFinish = async (values) => {
		const response = await postHelpParkData({
			uk: {
				title: values.title,
				qrCode: values.qrCode,
				link: values.link,
			},
			en: {
				title: values.titleEn,
				sqrCode: values.qrCode,
				link: values.link,
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
				label="Заголовок збору:"
				name="title"
				rules={[{ required: true, message: 'Please input title' }]}
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
				label="Завантажте QR-code"
				name="qrCode"
				rules={[{ required: true, message: 'Please input qr-code' }]}
			>
				<Upload {...props}>
					<Button icon={<UploadOutlined />}>Завантажити</Button>
				</Upload>
			</Form.Item>

			<Form.Item
				label="Посилання на збір"
				name="link"
				rules={[{ required: true, message: 'Please input link' }]}
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

export default HelpParkForm;
