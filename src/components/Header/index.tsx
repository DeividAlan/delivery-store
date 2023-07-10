import logo from '../../assets/logo.svg';
import { ShoppingCart, MapPin } from '@phosphor-icons/react';
import { NavLink } from 'react-router-dom';
import { HeaderContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} />
      <nav>
        <NavLink to="/" title="Timer">
          <MapPin size={24} />
        </NavLink>
        <NavLink to="/checkout" title="Checkout">
          <ShoppingCart size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
