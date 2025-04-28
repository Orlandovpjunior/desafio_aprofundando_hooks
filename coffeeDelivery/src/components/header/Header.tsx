import { MapPin, ShoppingCart } from '@phosphor-icons/react';
import { HeaderContainer, HeaderContent, LocationContainer, CartContainer } from './styles';
import Logo from '../../assets/Logo.svg';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export function Header() {
  const { cartItems } = useContext(CartContext)

  const totalQuantity = cartItems.reduce((total, item) => {
    return total + item.quantity
  }, 0)

  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink to="/" title="Home">
          <img src={Logo} alt="Coffee Delivery Logo" />
        </NavLink>
        <div>
          <LocationContainer>
            <MapPin size={22} weight="fill" />
            Porto Alegre, RS
          </LocationContainer>
          <CartContainer>
            <NavLink to="/checkout" title="Checkout">
              <ShoppingCart size={22} weight="fill" />
              {totalQuantity > 0 && <span>{totalQuantity}</span>}
            </NavLink>
          </CartContainer>
        </div>
      </HeaderContent>
    </HeaderContainer>
  );
}
