import { apiCall } from './srviceApiAuth';

export const fetchProducts = () => apiCall('/products');

export const getProductById = (id) => apiCall(`/products/${id}`);

export const postProduct = (body) => apiCall(`/products`, 'post', body);

export const updateProduct = (id, updatedProduct) =>
	apiCall(`/products/${id}`, 'put', updatedProduct);

export const deleteProduct = (id) => apiCall(`/products/${id}`, 'delete');
