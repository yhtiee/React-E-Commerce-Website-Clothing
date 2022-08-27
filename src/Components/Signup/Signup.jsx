import React from 'react'
import { useContext } from 'react'
import {NavLink, Link} from 'react-router-dom'
import AuthContext from '../../Context/authContext'
import "./signup.css"

const Signup = () => {
    let {signUpUser} = useContext(AuthContext)
    let {error} = useContext(AuthContext)
    let renderError = (
        <div className='error'>
        {error}
        </div>
    )
  return (
    <section id="signup">
        <div className="container signup_container">
            <div className="signup_wrapper">
                <div className="signup_intro">
                    <h2>JOIN THE <span>sFh</span> FAMILY</h2>
                    <h3>Please Signup to Start Shopping</h3>
                </div>
                {error? renderError : '' }
                <div className="signup_main">
                    <form onSubmit={signUpUser} className='sigup_form'>
                        <div className="signup_firstname">
                            <label htmlFor="">First Name:</label>
                            <input type="text" className='input_firstname' name='first_name' required minlength="3"/>
                        </div>
                        <div className="signup_lastname">
                            <label htmlFor="">Last Name:</label>
                            <input type="text" className='input_lastname' name='last_name' required minlength="3"/>
                        </div>
                        <div className="signup_othernames">
                            <label htmlFor="">Username:</label>
                            <input type="text" className='input_othernames' name='username' required minlength="3"/>
                        </div>
                        <div className="signup_email">
                            <label htmlFor="">Email:</label>
                            <input type="email" className='input_email' name='email' required minlength="5"/>
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