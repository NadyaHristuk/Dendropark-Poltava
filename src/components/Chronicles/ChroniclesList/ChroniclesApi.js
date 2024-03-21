import axios from 'axios';

const BASE_URL = 'https://dendropark-poltava-back-ix1i.onrender.com/api/events';

const fetchChronicles = async () => {
	const { data } = await axios.get(BASE_URL);
	return data;
};

export default fetchChronicles;