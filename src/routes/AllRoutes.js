import React from 'react'
import { AboutUs, ContactUs, PageNotFound } from '../pages'
import { Route, Routes } from 'react-router-dom'

const AllRoutes = () => {
  return (
   <>
  <Routes>
    <Route path='/' element={<AboutUs apiPath="/home"/>}/>
    <Route path='/aboutus' element={<AboutUs apiPath="/aboutus"/>}/>
    <Route path='/contactus' element={<ContactUs apiPath="/contactus"/>}/>
    <Route path='*' element={<PageNotFound/>}/>
  </Routes>
   </>
  )
}

export default AllRoutes