import { testSaga } from 'redux-saga-test-plan';
import { call, put } from 'redux-saga/effects';
import { fetchCategoriesAsync, onFetchCategories, categoriesSaga } from '../../../../src/store/categories/category.saga';
import getCategoriesFromAPI from '../../../../src/api';
import { fetchCategoriesSuccess, fetchCategoriesFailed } from '../../../../src/store/categories/category.action';
import { CATEGORIES_ACTION_TYPES } from '../../../../src/store/categories/category.types';

describe('category sagas', () => {
    it('should fetch categories', () => {
        const mockCategories = [{ title: 'test', imageUrl: 'test', items: [{ id: 1, imageUrl: 'test', name: 'test', description: 'test', price: 1 }] }];
        const response = { shop_data: mockCategories };

        testSaga(fetchCategoriesAsync)
            .next()
            .call(getCategoriesFromAPI)
            .next(response)
            .put(fetchCategoriesSuccess(mockCategories))
            .next()
            .isDone();
    });

    it('should handle fetch error', () => {
        const error = new Error('An error occurred');

        testSaga(fetchCategoriesAsync)
            .next()
            .call(getCategoriesFromAPI)
            .throw(error)
            .put(fetchCategoriesFailed(error))
            .next()
            .isDone();
    });

    it('should start task to watch for FETCH_CATEGORIES_START action', () => {
        testSaga(onFetchCategories)
            .next()
            .takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync)
            .next()
            .isDone();
    });

    it('should call all sagas', () => {
        testSaga(categoriesSaga)
            .next()
            .all([call(onFetchCategories)])
            .next()
            .isDone();
    });
});