import React from 'react'
import './signin.css'
import {NavLink, Link} from 'react-router-dom'

const Signin = () => {
  return (
    <section id="signin">
        <div className="container signin_container">
            <div className="signin_wrapper">
              <div className="signin_intro">
                <h2>WELCOME BACK TO <span>sFh</span></h2>
                <h3>Please Signin to Continue Shopping</h3>
              </div>
              <div className="signin_main">
                <form action="" className='sigin_form'>
                  <div className="signin_email">
                    <label htmlFor="">Email:</label>
                    <input type="email" className='input_email' name='email'/>
                  </div>
                  <div className="signin_password">
                    <label htmlFor="">Password:</label>
                    <input type="password" name='password' className='input_password' required minLength="8"/>
                  </div>
                  <div className="form_alternative">
                    <p> Not yet Registered? Then Sign up<Link to="/signup" className='signup_link'>here</Link></p>
                  </div>
                  <div className="form_button">
                    <button className='btn_signin'>
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