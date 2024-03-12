import { Button, Form, Input, Upload, InputNumber } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { postProduct } from '../../serviceApiProducts';

const ProductsForm = () => {
	const onFinish = async (values) => {
		const response = await postProduct({
			uk: {
				title: values.title,
				description: values.description,
				imgAlt: values.imgAlt,
				price: values.price,
			},
			en: {
				title: values.titleEn,
				description: values.descriptionEn,
				imgAlt: values.imgAltEn,
			},
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
	//     "title": "Назва продукту",
	//     "description": "Опис продукту",
	//     "price": 10.99,
	//     "imgAlt": "Альтернативний текст для зображення"
	//   },
	//   "en": {
	//     "title": "Product Title",
	//     "description": "Product Description",
	//     "imgAlt": "Image Alt Text"
	//   },
	//   "image": "Прикріпленний файл"
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
				label="Title"
				name="title"
				rules={[{ required: true, message: 'Please input title' }]}
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
			<Form.Item
				label="ImgAlt"
				name="imgAlt"
				rules={[{ required: true, message: 'Please input alternative text' }]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				label="Price"
				name="price"
				rules={[{ required: true, message: 'Please input subtitle' }]}
			>
				<InputNumber />
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
				label="DescriptionEn"
				name="descriptionEn"
				rules={[{ required: true, message: 'Please input description' }]}
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
			<p>Завантажте Фото</p>
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
					action="https://dendropark-poltava-back.onrender.com/api/products"
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

export default ProductsForm;
