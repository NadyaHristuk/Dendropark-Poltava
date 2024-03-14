import { apiCall } from './srviceApiAuth';

export const fetchOurServices = () => apiCall('/services');

export const getOurServicesById = (id) => apiCall(`/services/${id}`);

export const postOurServices = (body) => apiCall(`/services`, 'post', body);

export const updateOurServices = (id, updatedDocument) =>
	apiCall(`/documents/${id}`, 'put', updatedDocument);

export const deleteOurServices = (id) => apiCall(`/services/${id}`, 'delete');
