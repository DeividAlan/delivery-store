import logo from '../../assets/logo.svg';
import { ShoppingCart, MapPin } from '@phosphor-icons/react';
import { NavLink } from 'react-router-dom';
import { HeaderContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} />
      <nav>
        <button title="Timer">
          <MapPin size={22} weight="fill" />
          <span>Caruaru, PE</span>
        </button>
        <NavLink to="" title="Checkout">
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
