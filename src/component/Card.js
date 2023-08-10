import React, { useEffect, useState } from 'react'
import { useCart } from './context/CartContext'
// import img1 from '../assets/1.jpg'
// import img2 from '../assets/2.jpg'
// import img3 from '../assets/3.jpg'

const Card = ({product}) => {
  const {addtoCart,cartList,removeFromCart}=useCart()
  const [isinCart,setIsinCart]=useState(false)
  
// console.log(product)
const{id,name,price,img}=product
  // const[data,setData]=useState([
  //   {id:1,name:'Furniture',img:img1},
  //   {id:2,name:'Sofa',img:img2},
  //   {id:3,name:'Stairs',img:img3}
  // ])
  // function handleAdd(){
  //   addtoCart(product)
  //   // console.log(cartList)
  // }
  useEffect(()=>{
    const productIsinCart=cartList.find(item => item.id===id)
    if(productIsinCart){
      setIsinCart(true)
    }
    else{
      setIsinCart(false)
    }
  },[id,cartList])
  return (
    <>
     <div className="col-md-4">
     <div className="card ">
       <img src={img} className="card-img-top" alt="b"/>
       <div className="card-body">
         <h5 className="card-title">{name}</h5>
         <p>{price}</p>
         {isinCart? ( <button className='btn btn-danger' onClick={()=>removeFromCart(product)}>Remove</button>
         ):( 
         <button className='btn btn-primary' onClick={()=>addtoCart(product)}>Add</button>) }
        
       </div>
     </div>
   </div>
    {/* {
      data.map(()=>(
       
      ))
    } */}
    </>
//    <div className='color'>
//    <h1 className='Title'style={{padding:'20px'}}>More Features</h1>
//    <div className="row row-cols-1 row-cols-md-3 g-4 ">
//   <div className="col-8 col-md-3 m-auto">
//     <div className="card">
//       <img src={img1} className="card-img-top" alt="a"/>
//       <div className="card-body">
//         <h5 className="card-title">Furniture</h5>
//         <p className="card-text">We provide any kind of furniture work.</p>
//       </div>
//     </div>
//   </div>
//   <div className="col-8 col-md-3 m-auto">
//     <div className="card ">
//       <img src={img2} className="card-img-top" alt="b"/>
//       <div className="card-body">
//         <h5 className="card-title">Sofa</h5>
//         <p className="card-text">We provide different designs for sofa.</p>
//       </div>
//     </div>
//   </div>
//   <div className="col-8 col-md-3 m-auto">
//     <div className="card">
//       <img src={img3} className="card-img-top" alt="c"/>
//       <div className="card-body">
//         <h5 className="card-title">Stairs</h5>
//         <p className="card-text">We provide different designs of staircase.</p>
//       </div>
//     </div>
//   </div>
// </div>
//    </div>

  )
}

export default Card