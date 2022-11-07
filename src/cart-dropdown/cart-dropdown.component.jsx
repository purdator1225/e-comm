import "./cart-dropdown.styles.scss";
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
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <Button onClick = {goToCheckout} >GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
