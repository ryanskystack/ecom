import { RootState } from "../../../../src/store/store";
import { selectCartItems, selectIsCartOpen, selectCartCount, selectCartTotal } from '../../../../src/store/cart/cart.selector';

describe('cart selectors', () => {
    const mockState: RootState = {
        categories: {
            categories: [],
            isLoading: false,
            error: null,
        },
        cart: {
            isCartOpen: true,
            cartItems: [
                { id: 1, imageUrl: 'test', name: 'test', description: 'test', price: 1, quantity: 2 },
                { id: 2, imageUrl: 'test', name: 'test', description: 'test', price: 2, quantity: 3 },
            ],
        },
    };

    it('should select the cart items', () => {
        const selected = selectCartItems(mockState);
        expect(selected).toEqual(mockState.cart.cartItems);
    });

    it('should select the cart open state', () => {
        const selected = selectIsCartOpen(mockState);
        expect(selected).toEqual(mockState.cart.isCartOpen);
    });

    it('should select the cart count', () => {
        const selected = selectCartCount(mockState);
        expect(selected).toEqual(5); // 2 + 3
    });

    it('should select the cart total', () => {
        const selected = selectCartTotal(mockState);
        expect(selected).toEqual(8); // (1*2) + (2*3)
    });
});