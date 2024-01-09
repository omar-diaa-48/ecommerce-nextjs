import { cache } from 'react';
import api from '../instances/axios';

export const getProducts = cache(async () => {
    const res = await api.get('/products');
    return res.data;
})