import { Button, Form, Input } from 'antd';
import { postOurServices } from '../../serviceApiOurServices';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// import { fetchTrials } from '../../serviceApiTrials';
// import { fetchProducts } from '../../serviceApiProducts';
// import { fetchOurServices } from '../../serviceApiOurServices';
// import { fetchLocations } from '../../serviceApiLocations';
// import { fetchHelpParkData } from '../../serviceApiHelpPark';
// import { fetchDocuments } from '../../serviceApiDocuments';
// import { deleteLocation } from '../../serviceApiLocations';
// import { deleteDocument } from '../../serviceApiDocuments';
// import { deleteHelpParkData } from '../../serviceApiHelpPark';
// import { deleteOurServices } from '../../serviceApiOurServices';
// import { deleteTrial } from '../../serviceApiTrials';
// import { deleteProduct } from '../../serviceApiProducts';

const OurServicesForm = () => {
	const onFinish = async (values) => {
		const response = await postOurServices({
			uk: {
				title: values.title,
				description: values.description,
			},
			en: {
				title: values.titleEn,
				description: values.descriptionEn,
			},
		});
		// const doc = await fetchDocuments();
		// const don = await fetchHelpParkData();
		// const loc = await fetchLocations();
		// const ser = await fetchOurServices();
		// const prod = await fetchProducts();
		// const tria = await fetchTrials();

		// console.log('doc', doc);
		// console.log('don', don);
		// console.log('loc', loc);
		// console.log('ser', ser);
		// console.log('prod', prod);
		// console.log('tria', tria);

		// const doc = await deleteDocument('65eca947d9796efadf4d64d4');
		// const don = await deleteHelpParkData('65f32978a870f5dc91ef6a32');
		// const loc = await deleteLocation('65f3176c1301d195e8531832');
		// const ser = await deleteOurServices('65f352046fa36374c3420a30');
		// const prod = await deleteProduct('65f32a2ba870f5dc91ef6a3b');
		// const tria = await deleteTrial('65eca81d1cd4bade2947f270');

		// console.log('doc', doc);
		// console.log('don', don);
		// console.log('loc', loc);
		// console.log('ser', ser);
		// console.log('prod', prod);
		// console.log('tria', tria);

		return response;
	};

	return (
		<Form
			name="basic"
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 16 }}
			style={{ maxWidth: 600 }}
			initialValues={{ remember: true }}
			onFinish={onFinish}
			autoComplete="off"
		>
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
				<ReactQuill theme="snow" />
			</Form.Item>

			<p>Заповніть Англійською</p>
			<Form.Item
				label="TitleEn"
				name="titleEn"
				rules={[{ required: true, message: 'Please input title' }]}
			>
				<Input name="titleEn" />
			</Form.Item>

			<Form.Item
				label="DescriptionEn"
				name="descriptionEn"
				rules={[{ required: true, message: 'Please input description' }]}
			>
				<ReactQuill theme="snow" />
			</Form.Item>

			<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};
export default OurServicesForm;
