import axios from 'axios';

const api = axios.create({
	baseURL: 'https://dendropark-poltava-back.onrender.com/api',
});

export const token = {
	set(token) {
		api.defaults.headers.common.Authorization = `Bearer ${token}`;
	},
	unset() {
		delete api.defaults.headers.common.Authorization;
	},
};

export const apiCall = async (path, method = 'get', body = null) => {
	try {
		const response = await api[method](path, body);
		if (path === '/auth/login' && response) token.set(response.data.token);
		else if (path === '/auth/logout' && response) token.unset();
		return response.data;
	} catch (error) {
		throw new Error(error.response ? error.response.data : error.message);
	}
};

export const login = (credentials) =>
	apiCall('/auth/login', 'post', credentials);

export const logout = (email) => apiCall('/auth/logout', 'post', { email });

export const getCurrentUser = () => apiCall('/auth/current');

export default api;
