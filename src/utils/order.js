import { get } from './api';

export const formatProduct = product => {
	const fields = ['id', 'name', 'price', 'image'];
	const formatedProduct = { custom: [], id: 0, price: 0, name: '', image: '' };
	for (const [key, value] of Object.entries(product)) {
		if (fields.indexOf(key) >= 0) {
			formatedProduct[key] = value;
		}
		else {
			formatedProduct.custom.push({ key, value });
		}
	}
	return formatedProduct;
};

export const loadOrder = (id, email) =>
	get('/orders/' + id + '?email=' + email);