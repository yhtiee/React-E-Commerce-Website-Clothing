import React from 'react'
import './header.css'
import HE from '../../Assets/hero.png'

const Header = () => {
  return (
    <header id='header'>
        <div className='container header__container'>
            <div className="header__left">
                <h2> Hello There! </h2>
                <h3> Welcome to Sharon's Fashion Hub, home to the best Tie-Dye designs for different clothing that suits you!! </h3>
                <a href="/signup" className='btn btn-primary btn-lg' id='button'> Shop Now </a>
            </div>
            <div className="header__right">
                <div className="header__image">
                    <img src={HE} alt="" />
                </div>
                <div className="header__right-bg1">
                </div>
                <div className="header__right-bg2">
                </div>
                <div className="header__right-bg3">
                </div>
                <div className="header__right-bg4">
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header