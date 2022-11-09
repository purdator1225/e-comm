import {createContext,useState, useEffect } from "react";

import SHOP_DATA from '../../shop-data.js'

import { addCollectionAndDocuments } from "../../utils/firebase.utils.js";

import { getCategoriesAndDocuments } from "../../utils/firebase.utils.js";

//initialising a context 
export const ProductsContext = createContext({
   categoriesMap:{},
})

export const ProductsProvider = ({children})=>{

//useState sets state to the products list 
    const [categoriesMap, setCategoriesMap] = useState([]);


useEffect(()=>
{ const getCategoriesMap = async()=>{
    const categoryMap = await getCategoriesAndDocuments(); 
    
    console.log(categoryMap);

    setCategoriesMap(categoryMap)
}

    getCategoriesMap();
},[]);


//useEffect to fire the addCollections once
// useEffect(()=>{addCollectionAndDocuments('categories', SHOP_DATA)},[]);

//pass value down as props 
    const value = {categoriesMap}



    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>

}