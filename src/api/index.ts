import axios from 'axios';
import { Category } from '../store/categories/category.types';

async function getCategoriesFromAPI(): Promise<{ shop_data: Category[] }> {

    const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";

    let url;

    if (isLocal) {
        url = 'http://localhost:3001/shop_data';
    } else {
        url = 'https://raw.githubusercontent.com/ryanskystack/ecom/master/assets/shop-data.json';
    }

    const response = await axios.get(url);
    const data = response.data;
    if (isLocal) {
        return { shop_data: data };
    } else {
        return data;
    }
}

export default getCategoriesFromAPI;