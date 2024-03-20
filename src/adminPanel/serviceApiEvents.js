import { apiCall } from './srviceApiAuth';

export const fetchEvents = () => apiCall('/events');

export const getEventById = (id) => apiCall(`/events/${id}`);

export const postEvent = (body) => apiCall(`/events`, 'post', body);

export const updateEvent = (id, updatedEventData) =>
	apiCall(`/events/${id}`, 'put', updatedEventData);

export const deleteEvent = (id) => apiCall(`/events/${id}`, 'delete');
