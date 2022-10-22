import { Fragment, useContext } from "react";

import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import { signOutUser } from "../../utils/firebase.utils";

import { UserContext } from "../../components/contexts/user.context";

import "./navbar.styles.scss";
import CartIcon from "../../components/card-icon/card-icon.component";

import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../components/contexts/card-context";

function Navigation() {
  //whenever value updates, useContext re-renders

  const { currentUser } = useContext(UserContext);

  const {isCartOpen} = useContext(CartContext)

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT{" "}
            </span>
          ) : (
            <Link className="nav-link" to="/sign-in">
              SIGN IN
            </Link>
          )}

          <CartIcon />
        </div>
        {/* //relative to navigation */}
        {isCartOpen && <CartDropdown />}
        
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
