import { apiCall } from './srviceApiAuth';

export const fetchTrials = () => apiCall('/trials');

export const getTrialById = (id) => apiCall(`/trials/${id}`);

export const postTrial = (body) => apiCall(`/trials`, 'post', body);

export const updateTrial = (id, updatedTrial) =>
	apiCall(`/trials/${id}`, 'put', updatedTrial);

export const deleteTrial = (id) => apiCall(`/trials/${id}`, 'delete');
