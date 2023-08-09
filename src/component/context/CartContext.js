import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";
const initialState={
    cartList:[],
    total:0
}
const CartContext=createContext(initialState)
export const CartProvider=({children})=>{
    const [state,dispatch]=useReducer(cartReducer,initialState)
    const addtoCart=(product)=>{
        const updatecartList=state.cartList.concat(product)
        dispatch({
            type:"ADD_TO_CART",
            payload:{
                products:updatecartList
            }
        })
    }
    const value={
        total:state.total,
        cartList:state.cartList,
        addtoCart
    }
    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    
    )
}
export const useCart=()=>{
    const context=useContext(CartContext)
    return context;
}
