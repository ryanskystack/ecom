import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import CartIcon from '../../components/cart-icon';
import CartDropdown from '../../components/cart-dropdown';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import Logo from '../../assets/fancybox.png';

import {
    NavigationContainer,
    NavLinks,
    NavLink,
    LogoContainer,
} from './styles';
import Button from '../../components/button';

const Navigation = () => {
    const isCartOpen = useSelector(selectIsCartOpen);

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer>
                    <img src={Logo} className='logo' alt='Logo' />
                </LogoContainer>
                <NavLinks>
                    <NavLink to="/" >SHOP</NavLink>
                    <Button >SIGN IN</Button>
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
        </Fragment>
    );
};

export default Navigation;