import {createContext,useState } from "react";

import PRODUCTS from '../../shop-data.json'


//initialising a context 
export const ProductsContext = createContext({
    products: [],
    setProducts: ()=>null

})

export const ProductsProvider = ({children})=>{

//useState sets state to the products list 
    const [products,setProducts] = useState(PRODUCTS);
    
    const value = {products,setProducts}



    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>

}