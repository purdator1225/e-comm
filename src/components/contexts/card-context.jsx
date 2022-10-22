import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setCartOpen: () => {},
  products: [],
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setCartOpen] = useState(false);

  const value = { isCartOpen, setCartOpen };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};


