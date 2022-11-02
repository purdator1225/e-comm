import { createContext, useState } from "react";

//an add cartItem function taking in cartItems productToAdd and returning cartItems and product to Add
const addCartItem = (cartItems, productToAdd) => {
  //find if cartIems constains product to add,

  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  //if found, increment quantity

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  //return new array with modified cart item/new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};



export const CartContext = createContext({
  isCartOpen: false,
  setCartOpen: () => {},
  cartItems: [],
  addItemtoCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setCartOpen] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  //to pass in the producttoadd into the cart and set the cart to include the products to add
  const addItemtoCart = (productToAdd) => {
    //setting state of theCartItems to the new array
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  

  const value = { isCartOpen, setCartOpen, addItemtoCart, cartItems };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
