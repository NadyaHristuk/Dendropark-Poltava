import axios from 'axios';

const api = axios.create({
	baseURL: 'https://crypto-helper.onrender.com',
});

axios.defaults.baseURL = 'https://crypto-helper.onrender.com/api/';
export const token = {
	set(token) {
		axios.defaults.headers.common.Authorization = `Bearer ${token}`;
	},
	unset() {
		axios.defaults.headers.common.Authorization = '';
	},
};

export const login = async (credentials) => {
	try {
		const response = await axios.post('/auth/login', credentials);
		if (response.data.token) {
			token.set(response.data.token);
		}
		return response;
	} catch (error) {
		return error.message;
	}
};

export default api;
