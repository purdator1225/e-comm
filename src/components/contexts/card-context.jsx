import { createContext, useState ,useEffect} from "react";

//an add cartItem function taking in cartItems productToAdd and returning cartItems and product to Add
export const addCartItem = (cartItems, productToAdd) => {
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



export const removeCartItem = (cartItems, productToRemove)=>{


  //find cart item to remove 

  const existingCartItem = cartItems.find((cartItem)=>cartItem.id===productToRemove.id);


  //check if quantity=1, if yes then remove cartItem, 

  if (existingCartItem.quantity===1){
    return cartItems.filter((cartItem)=>cartItem.id!==productToRemove.id)
  }

  //else return cartItems with matching item with reduced quantity
  return cartItems.map((cartItem)=>
  
  cartItem.id===productToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1}
  : cartItem)
}


export const cancelCartItem = (cartItems, productToRemove)=>{

  return cartItems.filter((cartItem)=>cartItem.id !==productToRemove.id)

}


export const CartContext = createContext({
  isCartOpen: false,
  setCartOpen: () => {},
  cartItems: [],
  addItemtoCart: () => {},
  removeItemfromCart: ()=>{},
  cancelItemfromCart: ()=>{},
  cartCount: 0,
  total: 0 
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setCartOpen] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  const [cartCount,setCartCount]= useState(0)

  const [total, setTotal] = useState(0)

  //first useEffecthook whenever cartItems state is updated 

  useEffect(() => {
    //reduct method, first argument is the aggregator, second is the adder 
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity
    ,0)

    setCartCount(newCartCount)

  //dependency array
  }, [cartItems]);

//second useEffect for total 
  useEffect(() => {
    //reduct method, first argument is the aggregator, second is the adder 
    const newCartTotal = cartItems.reduce((totalPrice, cartItem) => totalPrice + cartItem.quantity*cartItem.price
    ,0)

    setTotal(newCartTotal)

  //dependency array
  }, [cartItems]);


  //to pass in the producttoadd into the cart and set the cart to include the products to add
  const addItemtoCart = (product) => {
    //setting state of theCartItems to the new array
    setCartItems(addCartItem(cartItems, product));
  };

  const removeItemfromCart = (product) =>{
    setCartItems(removeCartItem(cartItems,product))

  }

  const cancelItemfromCart= (product)=>{
    setCartItems(cancelCartItem(cartItems,product))
  }



  const value = { isCartOpen, setCartOpen, addItemtoCart, cartItems, cartCount, removeItemfromCart, cancelItemfromCart, total};

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
