import { apiCall } from './srviceApiAuth';

export const fetchOurServices = () => apiCall('/services');

export const getOurServicesById = (id) => apiCall(`/services/${id}`);

export const postOurServices = (body) => apiCall(`/services`, 'post', body);

export const updateOurServices = (id, updatedServices) =>
	apiCall(`/services/${id}`, 'put', updatedServices);

export const deleteOurServices = (id) => apiCall(`/services/${id}`, 'delete');
