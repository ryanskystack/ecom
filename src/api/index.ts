import axios from 'axios';
import { Category } from '../store/categories/category.types';

async function getCategoriesFromAPI(): Promise<{ shop_data: Category[] }> {

    let url;

    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
        url = 'http://localhost:3001/shop_data';
    } else {
        url = 'https://raw.githubusercontent.com/ryanskystack/ecom/master/assets/shop-data.json';
    }

    const response = await axios.get(url);
    const data = response.data;
    return { shop_data: data };
}

export default getCategoriesFromAPI;