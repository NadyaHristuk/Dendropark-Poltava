import { apiCall } from './srviceApiAuth';

export const fetchHelpParkData = () => apiCall('/donations');

export const getHelpParkDataById = (id) => apiCall(`/donations/${id}`);

export const postHelpParkData = (body) => apiCall(`/donations`, 'post', body);

export const updateHelpParkData = (id, updatedHelpParkData) =>
	apiCall(`/donations/${id}`, 'put', updatedHelpParkData);

export const deleteHelpParkData = (id) => apiCall(`/donations/${id}`, 'delete');
