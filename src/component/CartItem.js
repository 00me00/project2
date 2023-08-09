import React from 'react'
import { useCart } from './context/CartContext'

const CartItem = ({product}) => {
  const {removeFromCart,cartList}=useCart()
  const{img,name,price}=product
  return (
    <>

    <tr>
      <td><img src={img} alt='img'/></td>
      <td>{name}</td>
      <td>{price}</td>
    <td><button className='btn btn-danger' onClick={()=>removeFromCart(product)}>Remove</button></td>
    </tr>


    </>
  )
}

export default CartItem