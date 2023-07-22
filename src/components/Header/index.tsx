import logo from '../../assets/logo.svg';
import { ShoppingCart, MapPin } from '@phosphor-icons/react';
import { NavLink } from 'react-router-dom';
import { HeaderContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logo} />
      </NavLink>
      <nav>
        <button title="Timer">
          <MapPin size={22} weight="fill" />
          <span>Caruaru, PE</span>
        </button>
        <NavLink to="/checkout" title="Checkout">
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
