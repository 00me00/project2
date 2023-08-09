export const cartReducer=(state,action)=>{
    const {type,payload}=action
    switch(type){
        case"ADD_TO_CART":
        return {...state,cartList:payload.products}
        default:
            throw new Error("Case not found")
    }
}