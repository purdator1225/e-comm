import { CartDropdownContainer, EmptyMessage,CartItems } from "./cart-dropdown.styles";



import Button from "../components/button/button.component";
import CartItem from "../components/cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";

import { CartContext } from "../components/contexts/card-context";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckout = ()=>{
    navigate('/checkout')
  }

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
        </CartItems>
      <Button onClick = {goToCheckout} >GO TO CHECKOUT</Button>
      </CartDropdownContainer>
  );
};

export default CartDropdown;
