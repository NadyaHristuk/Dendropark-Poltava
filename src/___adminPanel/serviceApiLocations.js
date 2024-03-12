import { apiCall } from './srviceApiAuth';

export const fetchLocations = () => apiCall('/locations');

export const getLocationById = (id) => apiCall(`/locations/${id}`);

export const updateLocation = (id, updatedLocation) =>
	apiCall(`/locations/${id}`, 'put', updatedLocation);

export const deleteLocation = (id) => apiCall(`/locations/${id}`, 'delete');
