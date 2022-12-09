import {
  NavigationContainer,
  NavLink,
  NavLinks,
  LogoContainer,
} from "./navbar.styles";

import { Fragment, useContext } from "react";

import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import { signOutUser } from "../../utils/firebase.utils";

import { UserContext } from "../../components/contexts/user.context";

import CartIcon from "../../components/card-icon/card-icon.component";

import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../components/contexts/card-context";

function Navigation() {
  //whenever value updates, useContext re-renders

  const { currentUser } = useContext(UserContext);

  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
