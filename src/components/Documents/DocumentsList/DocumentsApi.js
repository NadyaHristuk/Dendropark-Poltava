import axios from 'axios';

const BASE_URL = 'https://dendropark-poltava-back.onrender.com/api/documents';

const fetchDocuments = async () => {
	const { data } = await axios.get(BASE_URL);
	return data;
};

export default fetchDocuments;
