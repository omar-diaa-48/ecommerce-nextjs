import { cache } from 'react';
import api from '../instances/axios';
import { IPagination } from '../interfaces/pagination.interface';
import { IProduct } from '../interfaces/product.interface';

export const getProducts = cache(async (pagination: IPagination): Promise<Array<IProduct>> => {
    const res = await api.get('/products', { params: pagination });
    return res.data;
})

export const getProduct = cache(async (id: number | string): Promise<IProduct> => {
    const res = await api.get(`/products/${id}`);
    return res.data;
})