import { apiCall } from './srviceApiAuth';

export const fetchLocations = () => apiCall('/events');

export const getLocationById = (id) => apiCall(`/events/${id}`);

export const postLocation = (body) => apiCall(`/events`, 'post', body);

export const updateLocation = (id, updatedLocation) =>
	apiCall(`/events/${id}`, 'put', updatedLocation);

export const deleteLocation = (id) => apiCall(`/events/${id}`, 'delete');
