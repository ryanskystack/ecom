import axios from 'axios';
import { Category } from '../store/categories/category.types';

async function getCategoriesFromAPI(): Promise<{ shop_data: Category[] }> {

    const url = 'http://localhost:3001/shop_data';

    const response = await axios.get(url);
    const data = response.data;
    return { shop_data: data };
}

export default getCategoriesFromAPI;