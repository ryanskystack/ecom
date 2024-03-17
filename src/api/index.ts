import axios from 'axios';
import { Category } from '../store/categories/category.types';

async function getCategoriesFromAPI(): Promise<{ shop_data: Category[] }> {

    const url = 'https://raw.githubusercontent.com/ryanskystack/ecom/master/src/assets/shop-data.json';

    const response = await axios.get(url);
    const data = response.data;
    return data;
}

export default getCategoriesFromAPI;