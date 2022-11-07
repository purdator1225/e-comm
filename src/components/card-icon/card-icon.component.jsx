import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./card-icon.styles.scss";

import { useContext } from "react";
import { CartContext } from "../contexts/card-context";



const CartIcon = () => {

const {isCartOpen, setCartOpen, cartCount} = useContext(CartContext)

const toggleCartOpen = () =>
    setCartOpen(!isCartOpen)


  return (
    <div className="cart-icon-container" onClick={toggleCartOpen}>
      <ShoppingIcon className="shopping-icon"/>
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
