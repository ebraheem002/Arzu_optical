import { createContext, useState } from "react";

const cartContext = createContext();

export function CartProvider({children}){
    return(
        <cartContext.Provider value={{item : 1}}></cartContext.Provider>
    )
}

export default cartContext;