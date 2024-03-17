import React from 'react';
import { render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import CartDropdown from '../../../src/components/cart-dropdown';

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: () => jest.fn(),  // Add this line
}));

describe('CartDropdown', () => {
    it('should render the total amount correctly', () => {
        ((useSelector as unknown) as jest.Mock).mockReturnValue([
            { id: 1, price: 10, quantity: 2 },
            { id: 2, price: 20, quantity: 1 },
        ]);

        const { getByText } = render(<CartDropdown />);

        expect(getByText('Total: $40.00')).toBeInTheDocument();
    });

    it('should render the empty message when there are no cart items', () => {
        ((useSelector as unknown) as jest.Mock).mockReturnValue([]);

        const { getByText } = render(<CartDropdown />);

        expect(getByText('Your cart is empty')).toBeInTheDocument();
    });
});