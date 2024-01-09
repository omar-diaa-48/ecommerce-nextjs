import { cache } from 'react';
import api from '../instances/axios';
import { IProduct } from '../interfaces/product.interface';

export const getProducts = cache(async (): Promise<Array<IProduct>> => {
    const res = await api.get('/products');
    return res.data;
})

export const getProduct = cache(async (id: number | string): Promise<IProduct> => {
    const res = await api.get(`/products/${id}`);
    return res.data;
})