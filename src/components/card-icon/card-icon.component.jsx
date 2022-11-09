
import {CartIconContainer, ItemCount, ShoppingIcon}  from "./card-icon.styles.jsx";

import { useContext } from "react";
import { CartContext } from "../contexts/card-context";


const CartIcon = () => {

const {isCartOpen, setCartOpen, cartCount} = useContext(CartContext)

const toggleCartOpen = () =>
    setCartOpen(!isCartOpen)


  return (
    <CartIconContainer onClick={toggleCartOpen}>
      <ShoppingIcon/>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
