import { apiCall } from './srviceApiAuth';

export const fetchDocuments = () => apiCall('/documents');

export const getDocumentById = (id) => apiCall(`/documents/${id}`);

export const updateDocument = (id, updatedDocument) =>
	apiCall(`/documents/${id}`, 'put', updatedDocument);

export const deleteDocument = (id) => apiCall(`/documents/${id}`, 'delete');
