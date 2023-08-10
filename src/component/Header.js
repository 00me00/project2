import React from 'react'
import logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from './context/CartContext'

const Header = () => {
  const {cartList}=useCart()
  return (
    <header>
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#">
        <img className='logo' src={logo} alt='logo'/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-auto">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/aboutus">About Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/cart">Cart</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contactus">Contact Us</NavLink>
        </li>
        </ul>
        {/* <li className="nav-item">
          <span className="nav-link" to="/">Count:{cartList.length}</span>
        </li> */}
         <span className="nav-link" style={{marginRight:'60px'}} to="/">Count:{cartList.length}</span>
      </div>
      </div>
        </nav>
        
      </header>
  )
}

export default Header