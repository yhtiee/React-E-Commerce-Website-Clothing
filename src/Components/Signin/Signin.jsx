import React from 'react'
import './signin.css'
import jwt_decode from "jwt-decode";
import {NavLink, Link, useNavigate} from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../../Context/authContext'
import { useState } from 'react'


const Signin = () => {
  let {loginUser} = useContext(AuthContext)
  let {error} = useContext(AuthContext)
  let renderError = (
    <div className='error'>
      {error}
    </div>
  )

  return (
    <section id="signin">
        <div className="container signin_container">
            <div className="signin_wrapper">
              <div className="signin_intro">
                <h2>WELCOME BACK TO <span>sFh</span></h2>
                <h3>Please Signin to Continue Shopping</h3>
              </div>
              {error? renderError : '' }
              <div className="signin_main">
                <form onSubmit={loginUser} className='sigin_form'>
                  <div className="signin_email">
                    <label htmlFor="">Username:</label>
                    <input type="text" className='input_email' name='username' required minlength="3"/>
                  </div>
                  <div className="signin_password">
                    <label htmlFor="">Password:</label>
                    <input type="password" name='password' className='input_password' required minLength="8"/>
                  </div>
                  <div className="form_alternative">
                    <p> Not yet Registered? Then Sign up<Link to="/signup" className='signup_link'>here</Link></p>
                  </div>
                  <div className="form_button">
                    <button className='btn_signin' type='submit'>
                      Sign in 
                    </button>
                  </div>
                </form>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Signin