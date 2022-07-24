import React, { useState } from 'react'
import {NavLink, Link} from 'react-router-dom'
import './navbar.css'
import {BsCart3} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'
import {GiHamburgerMenu } from 'react-icons/gi'


const Navbar = () => {
    const [navbaropen, setNavbarOpen] = useState(false)
    const openToggle = () =>{
        setNavbarOpen(prev => !prev)
    }
  return (
    <nav>
        <div className='container nav__container'>
            <a href="/home" className='nav__logo'>
                <h3> sFh </h3>
            </a>

            <ul className={`nav__menu ${navbaropen? "show__menu": ""}`}>
                <li> <a href="/products"> PRODUCTS </a></li>
                <li> <a href="/about"> ABOUT US</a></li>
                <li> <a href="/contact"> CONTACT US</a></li>
                <li> <a href="/cart" id='cart' className='cart__nav'> <BsCart3/> </a></li>
                <li> <a href="/signin" className="btn btn-primary" id='nav__btn'> SIGN IN </a></li>
            </ul>
            <ul className='cart__link'>
                <li> <a href="/cart"  id='cart' > <BsCart3/> </a></li>
            </ul>

            <button onClick={openToggle}> {navbaropen? <AiOutlineClose id='close-menu-btn'/>: <GiHamburgerMenu id='open-menu-btn' /> }</button>
        </div>

    </nav>
   
  )
}

export default Navbar