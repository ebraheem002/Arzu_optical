import { createContext, useState } from "react";

const CartContext = createContext();


export function CartProvider({children}){
    const [item, setItem] = useState([]);
const addToCart = (title, price) => {
    setItem((prevState) => [...prevState, {title, price}])
}

    return(

        <CartContext.Provider value={{item, addToCart}}>{children}</CartContext.Provider>
    )
}

export default CartContext;