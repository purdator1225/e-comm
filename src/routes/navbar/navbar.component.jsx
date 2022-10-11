import { Fragment } from "react";

import { Outlet, Link } from "react-router-dom";

import {ReactComponent as CrwnLogo } from '../../assets/crown.svg'

import './navbar.styles.scss'

function Navigation() {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo"/>
        </Link>
        <div className="nav-links-container">
          <Link classname="nav-link" to="/shop">
            SHOP
          </Link>
          <Link classname="nav-link" to="/sign-in">
            SIGN IN 
          </Link>
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
}

export default Navigation;
