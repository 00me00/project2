import React from 'react'
import { AboutUs, ContactUs, PageNotFound } from '../pages'
import { Route, Routes } from 'react-router-dom'
import Cart from '../pages/Cart'

const AllRoutes = () => {
  return (
   <>
  <Routes>
    <Route path='/' element={<AboutUs/>}/>
    <Route path='/aboutus' element={<AboutUs/>}/>
    <Route path='/contactus' element={<ContactUs/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='*' element={<PageNotFound/>}/>
  
  </Routes>
   </>
  )
}

export default AllRoutes