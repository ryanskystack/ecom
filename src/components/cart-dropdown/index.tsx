import { useSelector } from 'react-redux';
import Button from '../button';
import CartItem from '../cart-item';
import { selectCartItems } from '../../store/cart/cart.selector';
import {
    CartDropdownContainer,
    EmptyMessage,
    CartItems,
    TotalAmount
} from './styles';

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);

    // Calculate the total amount
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? (
                    cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
                ) : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                )}
            </CartItems>
            <TotalAmount>Total: ${totalAmount.toFixed(2)}</TotalAmount>
            <Button>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    );
};

export default CartDropdown;