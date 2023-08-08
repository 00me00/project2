import React from 'react'

const CartItem = ({product}) => {
  const{img,name,price}=product
  return (
    <>

    <tr>
      <td><img src={img} alt='img'/></td>
      <td>{name}</td>
      <td>{price}</td>
    </tr>


    </>
  )
}

export default CartItem