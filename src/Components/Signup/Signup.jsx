import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import "./signup.css"

const Signup = () => {
  return (
    <section id="signup">
        <div className="container signup_container">
            <div className="signup_wrapper">
                <div className="signup_intro">
                    <h2>JOIN THE <span>sFh</span> FAMILY</h2>
                    <h3>Please Signup to Start Shopping</h3>
                </div>
                <div className="signup_main">
                    <form action="" className='sigup_form'>
                        <div className="signup_firstname">
                            <label htmlFor="">First Name:</label>
                            <input type="text" className='input_firstname' name='first_name'/>
                        </div>
                        <div className="signup_lastname">
                            <label htmlFor="">Last Name:</label>
                            <input type="text" className='input_lastname' name='last_name'/>
                        </div>
                        <div className="signup_othernames">
                            <label htmlFor="">Other Names:</label>
                            <input type="text" className='input_othernames' name='other_name'/>
                        </div>
                        <div className="signup_phone">
                            <label htmlFor="">Phone Number:</label>
                            <input type="text" className='input_phonenumber' name='phone_number'/>
                        </div>
                        <div className="signup_email">
                            <label htmlFor="">Email:</label>
                            <input type="email" className='input_email' name='email'/>
                        </div>
                        <div className="signup_password">
                            <label htmlFor="">Password:</label>
                            <input type="password" name='password' className='input_password' required minLength="8"/>
                        </div>
                        <div className="form_alternative">
                            <p> Already  Registered? Then Sign in<Link to="/signin" className='signin_link'>here</Link></p>
                        </div>
                        <div className="form_button">
                            <button className='signup_btn'>
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Signup