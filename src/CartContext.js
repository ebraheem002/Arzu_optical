import React from 'react'
import { createContext, useState, useContext,useEffect } from "react";
import  {onSnapshot,collection }  from 'firebase/firestore';
import db from './firebase.js';
const CartContext = createContext();

export function CartProvider({children}){
    const [productsData, setProductsData] = useState([]);
    const [checkItem, setCheckItem] = useState([]);
    const [quan,setQuan] = useState(1);


    const [isLoading, setLoading] = useState(true)
    useEffect(() =>
    onSnapshot(collection(db,"arzu-product"),(snapshot) =>
    setProductsData(snapshot.docs.map((doc) => doc.data())),
         
     ),
 []
 )

      useEffect(() => {
          if(productsData.length !==0){
              setLoading(false);
              console.log(productsData);
          }
      }, [productsData])

     
     

const addToCart = (title, price,id,) => {
    setCheckItem((prevState) =>  [...prevState, {title, price,id}])
    
}
const addqQuantity =(e) =>{
    const quantityValue = e.target.value;
    setQuan(quantityValue)
    console.log(quan)
}


    return(

        <CartContext.Provider value={{checkItem, productsData, addToCart,isLoading}} loading={isLoading}>{children}</CartContext.Provider>
    )
}

export default CartContext;

export function ValidApi() {
    const context = useContext(CartContext);
    if (context === undefined) {
      throw new Error("Context must be used within a Provider");
    }
    return context;
  }

