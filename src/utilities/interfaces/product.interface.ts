export interface IProduct {
    id: string;
    title: string;
    price: number;
    description: string;
    category: string;
    images: string[];
    rating: {
        rate: number;
        count: number;
    };
}