import { cartReducer, CART_INITIAL_STATE } from '../../../../src/store/cart/cart.reducer';
import { setCartItems, setIsCartOpen } from '../../../../src/store/cart/cart.action';

describe('cartReducer', () => {
    it('should return the initial state', () => {
        expect(cartReducer(undefined, { type: '' })).toEqual(CART_INITIAL_STATE);
    });

    it('should handle setIsCartOpen action', () => {
        const action = setIsCartOpen(true);
        const expectedState = { ...CART_INITIAL_STATE, isCartOpen: true };
        expect(cartReducer(CART_INITIAL_STATE, action)).toEqual(expectedState);
    });

    it('should handle setCartItems action', () => {
        const mockItems = [{ id: 1, imageUrl: 'test', name: 'test', description: 'test', price: 1, quantity: 1 }];
        const action = setCartItems(mockItems);
        const expectedState = { ...CART_INITIAL_STATE, cartItems: mockItems };
        expect(cartReducer(CART_INITIAL_STATE, action)).toEqual(expectedState);
    });
});