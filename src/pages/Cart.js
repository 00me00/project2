import React from 'react'
import { CartItem } from '../component'
import { useCart } from '../component/context/CartContext'

const Cart = () => {
  const {total}=useCart()
  console.log(total)
    const products=[
        {"id":1,"name":"Product1","price":1200,"img":"/assets/1.jpg"},
        {"id":2,"name":"Product2","price":2200,"img":"/assets/2.jpg"}
      ]
  return (
    <div>
        <table className="table">
  <thead>
    <tr>
      <th className="col">Image</th>
      <th className="col">Name</th>
      <th className="col">Price</th>
    </tr>
  </thead>
  <tbody>
 { products.map((product)=>(
   
   <CartItem key={product.id} product={product}/>
  
 ))}
  </tbody>
  </table>
        
 

    </div>
  )
}

export default Cart