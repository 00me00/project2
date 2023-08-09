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
        updateTotal(updatecartList)
        dispatch({
            type:"ADD_TO_CART",
            payload:{
                products:updatecartList
            }
        })
    }
    const removeFromCart=(product)=>{
        const updatecartList=state.cartList.filter(current=>current.id!==product.id)
        updateTotal(updatecartList)
        dispatch({
            type:"REMOVE_FROM_CART",
            payload:{
                products:updatecartList
            }
        })
    }
    const updateTotal=(products)=>{
        let total=0
        products.forEach(product=>total=total+product.price)
        dispatch({
            type:"UPDATE_TOTAL",
            payload:{
                total
            }
        })
    }
    const value={
        total:state.total,
        cartList:state.cartList,
        addtoCart,
        removeFromCart,
        updateTotal
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
