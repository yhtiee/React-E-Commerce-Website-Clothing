import React from 'react'
import { useState, useDeferredValue, useEffect } from 'react'
import { useContext, useRef } from 'react'
import CartContext from '../../Context/cartContext'
import ProductContext from '../../Context/productContext'
import "./product_selection.css"

const ProductSelection = () => {

    let [size , setSize] = useState(null)
    const [isChecked, setIsChecked] = useState(false)

    let {addItem} = useContext(CartContext)
    let [alert , setAlert] = useState(false)
    let [notify, setNotify] = useState(null)
    
    let [src, setSrc] = useState(null)
    let [price, setPrice] = useState(null)
    let [alt, setAlt] = useState(null)
    let [description, setDescription] = useState(null)
    let [id , setId] = useState(null)

    let Product = () => {
      let getproduct = JSON.parse(localStorage.getItem("product"))
      let getSrc = getproduct.src
      console.log(getSrc)
      setSrc(getSrc)
      let getPrice = getproduct.price
      setPrice(getPrice)
      let getAlt = getproduct.alt
      setAlt(getAlt)
      let getDescription = getproduct.description
      setDescription(getDescription)
      let getId = getproduct.id
      setId(getId)
    }

    useEffect(() => {
        
      Product()

    }, [])


    let checkValue = (e) => {
        let size = e.target.value
        setSize(size)
        console.log(size)
        setIsChecked((prev) => !prev)
    }

    let showAlert = (event) => {
      if (isChecked){
        addItem(event, id, src, alt, description, price, size)
        setAlert(true)
      }
      else{
        setNotify("Please Select a Size")
      }

    }

    setTimeout(() => {
      setAlert(false)

    }, 4500)

    setTimeout(() => {
      setNotify(null)

    }, 4500)


  return (
    <section id='selection_page'> 
        <div className="container selectionProducts_container">
          {notify && <div className='cartNotify'>{notify}</div>}
          {alert && <div className='cartAlert_wrapper'><div className='cartAlert'> Added to Cart Sucessfully!!</div></div>}
            <div className="selection_container">
              <div className="selected_product_wrapper">
                <div className="selected_product">
                  <div className="selected_product_display">
                    <img src={src} alt={alt} className='selected_img' />
                  </div>

                  <div className="selected_product_description">
                    <h3> {description}</h3>
                    <p> ₦ {price}</p>
                    <div className="select_product_size">
                      <div className="label_size">
                        Select Size : 
                      </div>
                      <div className="product_sizes">
                        <label> <input type="checkbox" name="size" value="S" onChange={checkValue}/> Small </label> 
                        <label> <input type="checkbox" name="size" value="M" onChange={checkValue}/> Medium </label> 
                        <label> <input type="checkbox" name="size" value="L" onChange={checkValue}/> Large </label> 
                        <label> <input type="checkbox" name="size" value="XL" onChange={checkValue}/> X-Large </label> 
                        <label> <input type="checkbox" name="size" value="XXL" onChange={checkValue}/> XX-Large</label> 
                      </div>
                    </div>
                    <a href='#' className="btn btn-primary" id='cart_btn' onClick={showAlert}> Add to Cart </a>
                  </div>
                </div>
                <div className="delivery_requirements">
                  delivery
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default ProductSelection