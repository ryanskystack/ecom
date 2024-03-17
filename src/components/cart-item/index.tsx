import { FC, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CartItemContainer, ItemDetails } from './styles';
import { removeItemFromCart } from '../../store/cart/cart.action';
import { CartItem as TCartItem } from '../../store/cart/cart.types';
import { RootState } from '../../store/store';

type CartItemProps = {
    cartItem: TCartItem;
};

const CartItem: FC<CartItemProps> = memo(({ cartItem }) => {
    const dispatch = useDispatch();
    const { name, imageUrl, price, quantity } = cartItem;

    // Get the current list of cart items from the store
    const cartItems = useSelector((state: RootState) => state.cart.cartItems);

    const handleRemoveClick = () => {
        dispatch(removeItemFromCart(cartItems, cartItem));
    };

    return (
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`} />
            <ItemDetails>
                <span>{name}</span>
                <span>
                    {quantity} x ${price}
                </span>
                <button onClick={handleRemoveClick}>Remove</button>
            </ItemDetails>
        </CartItemContainer>
    );
});

export default CartItem;