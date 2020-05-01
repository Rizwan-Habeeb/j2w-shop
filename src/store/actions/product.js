//Importing data here since there is no backend fetching at the moment
import products from '../../data/products.json';

export const GET_PRODUCTS = "GET_PRODUCTS";

export const getProducts = () => {
    return { type: GET_PRODUCTS, data: products }
}