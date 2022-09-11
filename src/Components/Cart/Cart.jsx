import React from 'react'
import './cart.css'
import {MdDeleteForever} from "react-icons/md"
import { useContext, useEffect, useState } from 'react'
import CartContext from '../../Context/cartContext'
import {MdAdd} from "react-icons/md"


const Cart = () => {

  let cartItems = JSON.parse(localStorage.getItem("cart"))
  let {totalPriceFinal} = useContext(CartContext)
  let {removeCart} = useContext(CartContext)
  let {removeItem} = useContext(CartContext)
  let {increase} = useContext(CartContext)
  

  



  


  // let removeItem = (event) => {

  // removeItemContext(event, item.size)

  // }


  

  return (
    
      <section id="cartpage">
            <div className="container cart_container">
                <div className="cart_wrapper" >
                  {cartItems? React.Children.toArray(
                    cartItems.map((item) => (
                      <div className='cart_list'>
                        <img src={item.src} alt={item.alt} className="cart_picture"/>
                        <p>Description: {item.description}</p>
                        <p>Size: {item.size}</p>
                        <div className='quantity_selector'> Quantity: <div className='quantity_wrapper'><button >Remove</button><p>{item.quantity}</p><button onClick={event => increase(event, item.size, item.id, item.quantity, item.price, item.description, item.src, item.alt)}><MdAdd/></button></div> </div>
                        <p>Price: ₦ {item.price}</p>
                        <a href='#' className='delete_btn' onClick={event => removeItem(event, item.size, item.price) }><MdDeleteForever/></a>
                      </div>
                  ))
                  ) : <p className='item_notify'>No items in cart</p>}
                  {totalPriceFinal? <div className='total_price_wrapper'> <div className='button_wrraper'> <a href='' onClick={removeCart} className='btn clear_cart'> Clear Cart</a></div> <div className='total_price'> <p>Total Price: ₦ {totalPriceFinal}</p> <a href='#' className='btn check_out_btn'> Check Out </a></div></div>: ""}
                </div>
            </div>
      </section>
    
  )
}

export default Cart