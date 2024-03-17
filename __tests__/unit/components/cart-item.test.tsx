import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../../../src/store/root-reducer';
import { RootState } from '../../../src/store/store';

import { CartItem as TCartItem } from '../../../src/store/cart/cart.types'; // adjust the path and file name as per your project structure
import CartItem from '../../../src/components/cart-item';


describe('CartItem', () => {
    it('should render the cart item correctly', () => {
        const cartItem: TCartItem = {
            id: 1,
            name: 'Test Item',
            imageUrl: 'http://example.com/test.jpg',
            price: 100,
            quantity: 2,
            description: 'Test Description',
        };

        const preloadedState: RootState = {
            cart: {
                cartItems: [cartItem],
                isCartOpen: false,
            },
            categories: {
                categories: [],
                isLoading: false,
                error: null,
            },
        };

        const store = createStore(rootReducer, preloadedState);

        const { getByText, getByAltText } = render(
            <Provider store={store}>
                <CartItem cartItem={cartItem} />
            </Provider>
        );

        expect(getByText('Test Item')).toBeInTheDocument();
        expect(getByText('2 x $100')).toBeInTheDocument();
        expect(getByAltText('Test Item')).toBeInTheDocument();
    });

    it('should dispatch an action when remove button is clicked', () => {
        const cartItem: TCartItem = {
            id: 1,
            name: 'Test Item',
            imageUrl: 'http://example.com/test.jpg',
            price: 100,
            description: 'Test Description',
            quantity: 2,
        };

        const preloadedState: Partial<RootState> = {
            cart: {
                cartItems: [cartItem],
                isCartOpen: false,
            },
            categories: {
                categories: [],
                isLoading: false,
                error: null,
            },
        };

        const store = createStore(rootReducer, preloadedState as RootState);
        store.dispatch = jest.fn();

        const { getByText } = render(
            <Provider store={store}>
                <CartItem cartItem={cartItem} />
            </Provider>
        );

        fireEvent.click(getByText('Remove'));
        expect(store.dispatch).toHaveBeenCalledTimes(1);
    });
});