import getCategoriesFromAPI from '../../api';
import { Category } from './category.types';
import { takeLatest, all, call, put } from 'typed-redux-saga/macro';
import {
    fetchCategoriesSuccess,
    fetchCategoriesFailed,
} from './category.action';
import { CATEGORIES_ACTION_TYPES } from './category.types';

export function* fetchCategoriesAsync() {
    try {
        const response: { shop_data: Category[] } = yield* call(getCategoriesFromAPI);
        const categoriesArray: Category[] = response.shop_data;
        yield* put(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
        yield* put(fetchCategoriesFailed(error as Error));
    }
}

export function* onFetchCategories() {
    yield* takeLatest(
        CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
        fetchCategoriesAsync
    );
}

export function* categoriesSaga() {
    yield* all([call(onFetchCategories)]);
}