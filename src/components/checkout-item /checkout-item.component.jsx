import "./checkout-item.styles.scss";

import { useContext } from "react";

import { CartContext } from "../contexts/card-context";

import { ReactComponent as CloseIcon } from "../../assets/Close.svg";
import React from "react";

function CheckoutRow({ cartItem }) {
  const { name, quantity, imageUrl, price } = cartItem;

  const { addItemtoCart, removeItemfromCart, cancelItemfromCart } =
    useContext(CartContext);

  const addItem = () => addItemtoCart(cartItem);

  const decItem = () => removeItemfromCart(cartItem);

  const cancelItem = () => cancelItemfromCart(cartItem);

  return (
    <div>
      <div className="checkout-item-container">
        <span className="name">{name}</span>
        <div className="image-container">
          <img src={imageUrl} alt={name} />
        </div>

        <span className="quantity">
          <div className="arrow" onClick={addItem}>
            &#10094;
          </div>
          <span className="value">{quantity}</span>

          <div className="arrow" onClick={decItem}>
            &#10095;
          </div>
        </span>

        <span className="price">${price}</span>
        <div className="remove-button" onClick={cancelItem}>
          &#10005;
        </div>
      </div>
    </div>
  );
}

export default CheckoutRow;
