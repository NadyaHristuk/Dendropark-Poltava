import { apiCall } from './srviceApiAuth';

export const fetchHelpParkData = () => apiCall('/donation');

export const getHelpParkDataById = (id) => apiCall(`/donation/${id}`);

export const postHelpParkData = (body) => apiCall(`/donation`, 'post', body);

export const updateHelpParkData = (id, updatedHelpParkData) =>
	apiCall(`/documents/${id}`, 'put', updatedHelpParkData);

export const deleteHelpParkData = (id) => apiCall(`/donation/${id}`, 'delete');
