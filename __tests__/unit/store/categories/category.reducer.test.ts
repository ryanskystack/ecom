import { categoriesReducer, CATEGORIES_INITIAL_STATE } from '../../../../src/store/categories/category.reducer.ts';
import {
    fetchCategoriesStart,
    fetchCategoriesSuccess,
    fetchCategoriesFailed,
} from '../../../../src/store/categories/category.action.ts';
import { mockCategories } from '../../../../__mocks__/mock-categories.js';

describe('Category Reducer action tests', () => {
    test('fetchCategoriesStart', () => {
        const expectedState = {
            ...CATEGORIES_INITIAL_STATE,
            isLoading: true,
        };

        expect(
            categoriesReducer(CATEGORIES_INITIAL_STATE, fetchCategoriesStart())
        ).toEqual(expectedState);
    });

    test('fetchCategoriesSuccess', () => {

        const expectedState = {
            ...CATEGORIES_INITIAL_STATE,
            isLoading: false,
            categories: mockCategories,
        };

        expect(
            categoriesReducer(
                CATEGORIES_INITIAL_STATE,
                fetchCategoriesSuccess(mockCategories)
            )
        ).toEqual(expectedState);
    });

    test('fetchCategoriesFailed', () => {
        const mockError = new Error('Error fetching categories');

        const expectedState = {
            ...CATEGORIES_INITIAL_STATE,
            isLoading: false,
            error: mockError,
        };

        expect(
            categoriesReducer(
                CATEGORIES_INITIAL_STATE,
                fetchCategoriesFailed(mockError)
            )
        ).toEqual(expectedState);
    });
});
