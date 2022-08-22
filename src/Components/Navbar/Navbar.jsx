import React, { useState, useContext } from 'react'
import {NavLink, Link} from 'react-router-dom'
import './navbar.css'
import {BsCart3} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'
import {GiHamburgerMenu } from 'react-icons/gi'
import AuthContext from '../../Context/authContext'



const Navbar = () => {
    const [navbaropen, setNavbarOpen] = useState(false)
    const openToggle = () =>{
        setNavbarOpen(prev => !prev)
    }
    let {user, logoutUser} = useContext(AuthContext)
    return (
    <nav>
        <div className='container nav__container'>
            <Link to="/home" className='nav__logo'>
                <h3> sFh </h3>
            </Link>

            <ul className={`nav__menu ${navbaropen? "show__menu": ""}`}>
                <li><Link to="/products">   PRODUCTS  </Link></li>
                <li> <Link to="/about"> ABOUT US</Link></li>
                <li> <Link to="/contact"> CONTACT US</Link></li>
                <li> <Link to="/cart" id='cart' className='cart__nav'> <BsCart3/> </Link></li>
                {user && <li> <Link to="/profile" id='profile' className="user_profile">{user.username}</Link></li>}
                {user? (
                <li> <button onClick={logoutUser} className="btn btn-primary" id='nav__btn'> LOGOUT </button></li> 
                ) : (<li> <Link to="/signin" className="btn btn-primary" id='nav__btn'> SIGN IN </Link></li>)}

            </ul>
            <ul className='cart__link'>
                <li> <Link to="/cart"  id='cart' > <BsCart3/> </Link></li>
            </ul>

            <button onClick={openToggle}> {navbaropen? <AiOutlineClose id='close-menu-btn'/>: <GiHamburgerMenu id='open-menu-btn' /> }</button>
        </div>

    </nav>
   
  )
}

export default Navbar