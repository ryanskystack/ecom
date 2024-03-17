import { CART_ACTION_TYPES, CartItem, } from '../../../../src/store/cart/cart.types';
import { CategoryItem } from '../../../../src/store/categories/category.types';
import { setIsCartOpen, setCartItems, addItemToCart, removeItemFromCart, clearItemFromCart } from '../../../../src/store/cart/cart.action';

describe('cart actions', () => {
    it('should create an action to set isCartOpen', () => {
        const expectedAction = {
            type: CART_ACTION_TYPES.SET_IS_CART_OPEN,
            payload: true,
        };
        expect(setIsCartOpen(true)).toEqual(expectedAction);
    });

    it('should create an action to set cartItems', () => {
        const mockItems: CartItem[] = [
            { id: 1, imageUrl: 'test', name: 'test', description: 'test', price: 1, quantity: 1 },
        ];
        const expectedAction = {
            type: CART_ACTION_TYPES.SET_CART_ITEMS,
            payload: mockItems,
        };
        expect(setCartItems(mockItems)).toEqual(expectedAction);
    });

    it('should create an action to add item to cart', () => {
        const mockItems: CartItem[] = [];
        const mockProduct: CategoryItem = { id: 1, imageUrl: 'test', name: 'test', description: 'test', price: 1 };
        const expectedAction = {
            type: CART_ACTION_TYPES.SET_CART_ITEMS,
            payload: [{ ...mockProduct, quantity: 1 }],
        };
        expect(addItemToCart(mockItems, mockProduct)).toEqual(expectedAction);
    });

    it('should create an action to remove item from cart', () => {
        const mockItem: CartItem = { id: 1, imageUrl: 'test', name: 'test', description: 'test', price: 1, quantity: 2 };
        const mockItems: CartItem[] = [mockItem];
        const expectedAction = {
            type: CART_ACTION_TYPES.SET_CART_ITEMS,
            payload: [{ ...mockItem, quantity: 1 }],
        };
        expect(removeItemFromCart(mockItems, mockItem)).toEqual(expectedAction);
    });

    it('should create an action to clear item from cart', () => {
        const mockItem: CartItem = { id: 1, imageUrl: 'test', name: 'test', description: 'test', price: 1, quantity: 1 };
        const mockItems: CartItem[] = [mockItem];
        const expectedAction = {
            type: CART_ACTION_TYPES.SET_CART_ITEMS,
            payload: [],
        };
        expect(clearItemFromCart(mockItems, mockItem)).toEqual(expectedAction);
    });
});