import { RootState } from "../../../../src/store/store";
import { selectCategories, selectCategoriesMap, selectCategoriesIsLoading } from '../../../../src/store/categories/category.selector';

describe('category selectors', () => {
    const mockState: RootState = {
        categories: {
            categories: [
                { title: 'Test', imageUrl: 'test', items: [{ id: 1, imageUrl: 'test', name: 'test', description: 'test', price: 1 }] },
            ],
            isLoading: false,
            error: null,
        },
        cart: {
            isCartOpen: false,
            cartItems: [],
        },
    };

    it('should select the categories', () => {
        const selected = selectCategories(mockState);
        expect(selected).toEqual(mockState.categories.categories);
    });


    it('should select the categories map', () => {
        const selected = selectCategoriesMap(mockState);
        const expected = {
            test: [{ id: 1, imageUrl: 'test', name: 'test', description: 'test', price: 1 }],
        };
        expect(selected).toEqual(expected);
    });

    it('should select the loading state', () => {
        const selected = selectCategoriesIsLoading(mockState);
        expect(selected).toEqual(mockState.categories.isLoading);
    });
});